<template lang="">
    <v-sheet :height="sheetWeight">
        <v-container class="fill-height">
            <v-row align="center" justify="center">
           <h1 class="text-center display-3 hidden-xs-only">
               Welcome to my new page 
           </h1>
              <h1 class="text-center display-3 hidden-sm-and-up">
                           Welcome to my new page 

           </h1>
           </v-row>
        </v-container>
    </v-sheet>
</template>

<script>
export default {
    computed: {
        sheetWeight(){
            switch (this.$vuetify.breakpoint.name) {
                case "xs": return "200px"
                case "sm": return "250px"
                case "md": return "300px"
                case "lg": return "300px"
                case "xl": return "350px"

                    
            
                default:
                    break;
            }
            return  "300px"
        }
    },
}
</script>