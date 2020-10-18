<template lang="">
    <div>
        <v-card>
            <v-card-title>Jola</v-card-title>

              <v-lazy-image :src="imagen" v-if="!loader"/>
              <div class="loader" v-else>Loading...</div>

        </v-card>
      

    </div>
</template>
<script>
import axios from "axios"
import VLazyImage from "v-lazy-image";

export default {
  components:{
        VLazyImage,

  },
    data() {
        return {
            imagen:"",
            loader:true
        }
    },
    methods:{
       async getImage(){
                const img= await  axios.get("https://picsum.photos/id/22/1920/1080/")
                this.imagen=img.config.url
                this.loader=false
        }
    },
    created() {
    },
    mounted(){
                this.getImage()

    }
}
</script>
