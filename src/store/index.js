import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pokemonList:[
     
    ],
    pokemonDetail:{},
    loader:true,
  },
  mutations: {
    vaciar(state){
      state.pokemonDetail={}
    },
   
    setLoader(state,data){
      state.loader=data
    },
    setPokemons(state,pokemons){  
        state.pokemonList=pokemons
  },
  setPokemonsDetail(state,pokemons){

    state.pokemonDetail=pokemons 
},
  },
  actions: {

    async getPokemons({commit}){
      let data=[]
      const path = "https://pokeapi.co/api/v2/pokemon?limit=0";
         await axios.get(path).then(  response => {
            
            response.data.results.forEach( element=>{
              axios.get(`https://pokeapi.co/api/v2/pokemon/${element.name}`)
              .then(results=>{
                data.push({
                          id:results.data.id,
                          name:results.data.name,
                          urlImg:results.data.sprites.front_default
                        })
              }
               
              
              )
              .catch((error) => console.log(error))
  
            });
  
          
        })
        commit("setPokemons",data) 


    },
      // let data=[]
      //   const context= await axios.get(path)
      //   context.data.results.forEach((element,index) => {
      //          data.push({
      //         id:index+1,
      //         name:element.name,
      //         url:element.url  
      //       })
      //   });

      //      commit("setPokemons",data) 
      //      setTimeout(() => {
      //       this.state.loader=false

      //      }, 3000);

     
    //  async getPokemons({commit}){
    //   const path = "https://pokeapi.co/api/v2/pokemon?limit=102";
    //     axios.get(path).then(  response => {
          
    //       response.data.results.forEach( element=>{
    //         axios.get(`https://pokeapi.co/api/v2/pokemon/${element.name}`)
    //         .then(results=>
    //          commit("setPokemons",results.data) 
            
    //         )
    //         .catch((error) => console.log(error))

    //       });

        
    //   })
     
    //   },

    async getPokemonsDetail({commit},name){
      const context= await axios
        .get(`https://pokeapi.co/api/v2/pokemon/${name}`).catch((error) => console.log(error));
        commit("setPokemonsDetail",context.data) 
     
    }
  },
  getters:{
    pokemonList:state=>state.pokemonList,

  }
})
