<template>
  <div id="app">
    <h3 v-show="isLoading">Loading</h3>
    <Search v-on:SearchRequested="handleSearch"/>
    <Preview :gifs="gifs"/>
  </div>
</template>

<script>
import Search from "./components/Search.vue"
import Preview from "./components/Preview.vue"

export default {
  name: 'App',
  components: {
    Search,
    Preview
  },
  data(){
    return{
      gifs: [],
      isLoading: true
    }
  },//https://api.giphy.com/v1/gifs/search
  methods:{
    doQuery(url){
      fetch(url)
      .then((res) => res.json()).then((res) => {
          this.gifs = res.data
          this.isLoading = false
        })
    },
    handleSearch(query){
      this.gifs = []
      const url = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=hd188oaGG03sijc4WDIpbAwAIixqNH97`
      this.doQuery(url)
    }
  },
  created(){
    const url = 'http://api.giphy.com/v1/gifs/trending?api_key=hd188oaGG03sijc4WDIpbAwAIixqNH97' 
    this.doQuery(url)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
