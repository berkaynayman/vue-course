<script>
import {mapState, mapGetters, mapActions} from 'vuex'

export default {
  name: 'App',
  data(){
    return{
      name: "Berkay Nayman"
    }
  },
  computed:{
    ...mapState([
      'username',
      'message'
    ]),
    ...mapGetters([
      'welcomeMessage'
    ])
  },
  methods:{
    ...mapActions([
      'updateUserName'
    ]),
    updateName(){
      this.updateUserName(this.name);
    },
  }
}
</script>

<template>
  <div id="app">
    <h1>{{message}} {{username}}</h1>
    <h1>{{welcomeMessage}}</h1>
    <h1>{{welcomeMessage}}</h1>

    <input v-model="name" />
    <button @click="updateName">updateName</button>
  </div>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
