<template>
  <v-container mb-12>
    
    <v-row>
      <v-col sm="10" offset-sm="1" md="8" offset-md="2">
        <h2>
          Pokemons <v-btn to="" color="primary" small text>View all</v-btn>
        </h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col sm="12" md="10" offset-md="1" lg="8" offset-lg="2">
        <v-row>
          <v-col
            cols="6"
            lg="4"
            md="4"
            sm="6"
            v-for="item in List"
            :key="item.id"
          >
            <v-card elevation="5" hover>
              <div class="pos" v-if="isLoad">
                <div class="sk-chase">
                  <div class="sk-chase-dot"></div>
                  <div class="sk-chase-dot"></div>
                  <div class="sk-chase-dot"></div>
                  <div class="sk-chase-dot"></div>
                  <div class="sk-chase-dot"></div>
                  <div class="sk-chase-dot"></div>
                </div>
              </div>
                   <v-img :src="item.urlImg"   v-else height="200"></v-img>
              
              
              <v-card-title>
                {{ item.name | capitalize }}
              </v-card-title>
              <v-card-text>
                <v-card-actions>
                  <v-btn color="yellow" v-on:click="openModal(item.name)">
                    <v-icon aria-hidden="false">mdi-plus</v-icon>&nbsp;Ver
                    Detalles
                  </v-btn>
                </v-card-actions>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-dialog
      v-model="Dialog"
      persistent
      max-width="800 "
      transition="scroll-y-transition"
    >
      <v-card max-width="800 ">
        <v-card-title class="headline">
          {{ this.$store.state.pokemonDetail.name | capitalize }}
        </v-card-title>
        <v-card-text>
          <Card
            :Detail="this.$store.state.pokemonDetail"
            v-if="objectLength != 0"
          />
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="vaciar()"> Cerrar </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
// import Modal from '@/components/home/Modal.vue';
// import VLazyImage from "v-lazy-image";

const Card = () => import("@/components/home/Card.vue");
export default {
  components: {
    Card,
    // VLazyImage,
  },
  data: () => ({
    Dialog: false,
    url: "",
    index: 0,
    images: [
    ],
    isLoad: true,
  }),
  computed: {
    ...mapGetters({
      List: "pokemonList",
    }),
    objectLength() {
      return Object.keys(this.$store.state.pokemonDetail).length;
    },
  },
  filters: {
    capitalize: function (value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },
  methods: {
    ...mapActions(["getPokemons", "getPokemonsDetail"]),
    vaciar() {
      this.Dialog = false;
      this.$store.commit("vaciar");
    },

    openModal(name) {
      (this.Dialog = true), this.getPokemonsDetail(name);
    },

 

  },
  updated() {},
  created() {
  },
  mounted() {
    this.getPokemons().then(
      setTimeout(() => {
        this.isLoad=false
      }, 1000)
    );
  },
};
</script>
<style scoped>
.pos {
  display: flex;
  width: 60px;
  height: 200px;
  justify-content: center;
  align-items: center;
  margin: auto;
}
</style>