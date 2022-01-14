<template>
  <div>
    <!--
    <HelloWorld userName="Berkay Nayman"/>
    <CounterApp />
    <ClassBindings />
    <VModel message="numbers" />
    <VModel v-for="number in numbers" :key="number" v-bind:message="number" />
    -->
    <ChildParent 
      v-for="item in numbers"
      :key="item"
      v-bind:item="item"
      v-on:chosen="addNumber"
    />

    <hr/>
    <ChildParent 
      v-for="item in numberHistory"
      :key="item"
      v-bind:item="item"
    />
  </div>
</template>

<script>
/*
import HelloWorld from './components/props-degiskenTanımlama.vue'
import CounterApp from './components/counterApp-ifElse-for-computedProperties.vue'
import ClassBindings from './components/ClassBindings-InputValidation.vue'
import VModel from './components/VModel-Props.vue'
*/
import ChildParent from './components/ChildParent.vue'


export default {
  name: 'App',
  components: {
    /*
    HelloWorld,
    CounterApp,
    ClassBindings,
    VModel
    */
    ChildParent
  },
  data(){
      return{
        numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        numberHistory: []
      }
  },
  methods:{
    addNumber(item){
      console.log("NUMBER",item);
      this.numberHistory.push(item)
    }
  }
}
</script>

<style>
#app {
  text-align: center;
}
</style>
