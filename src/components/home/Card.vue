<template>
  <v-row>
    <v-col class="align-center">
    
      <v-card >
        <v-carousel
          height="350"
          hide-delimiter-background
          cycle
          show-arrows-on-hover
        >
          <v-carousel-item
            v-for="(item, i) in img"
            :key="i"
            :src="item.src"
          ></v-carousel-item>
        </v-carousel>
      </v-card>
    </v-col>
    <v-divider vertical></v-divider>
    <v-col>
      <v-tabs
        v-model="tab"
        background-color="orange accent-4"
        centered
        dark
        icons-and-text
      >
        <v-tabs-slider></v-tabs-slider>

        <v-tab>
          HISTORY
          <v-icon>mdi-information</v-icon>
        </v-tab>

        <v-tab>
          DETAILS
          <v-icon>mdi-account-box</v-icon>
        </v-tab>

        <v-tab>
          STATS
          <v-icon>mdi-sword</v-icon>
        </v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab">
        <v-tab-item>
          <v-card flat>
            <v-card-text
              >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
              beatae quibusdam obcaecati maxime, itaque sit ad repudiandae, ab
              praesentium labore commodi quod accusantium ratione eveniet
              facere! Repellat iure reiciendis expedita? Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Maiores beatae quibusdam
              obcaecati maxime, itaque sit ad repudiandae, ab praesentium labore
              commodi quod accusantium ratione eveniet facere! Repellat iure
              reiciendis expedita?
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title> Altura</v-list-item-title>
                  <v-list-item-subtitle
                    >{{ Detail.height }} Mt.</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title> Peso</v-list-item-title>
                  <v-list-item-subtitle
                    >{{ Detail.weight }} Kg.</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Tipo</v-list-item-title>
                  <v-list-item-subtitle
                    v-for="(type, i) in Detail.types"
                    :key="i"
                  >
                    {{ type.type.name }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <v-row>
                <v-col cols="6" v-for="(stats, i) in Detail.stats" :key="i">
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>
                        {{ stats.stat.name | capitalize }}</v-list-item-title
                      >
                      <v-list-item-subtitle
                        >{{ stats.base_stat }}
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-col>
  </v-row>
</template>


<script>
// import {  mapGetters } from "vuex";

export default {
  props: {
    Detail: Object,
  },
  data() {
    return {
      tab: null,
      loader: true,
      img: [
        {
          src: this.Detail.sprites.front_default,
        },
        {
          src: this.Detail.sprites.back_default,
        },
        {
          src: this.Detail.sprites.front_shiny,
        },
        {
          src: this.Detail.sprites.back_shiny,
        },
      ],
    };
  },
  methods: {},

  //  computed: {
  //   ...mapGetters({
  //     Detail: "pokemonDetail",
  //   }),
  // },
  filters: {
    capitalize: function (value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },
};
</script>
