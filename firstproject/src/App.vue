<template>
  <div>
    <!--
    <HelloWorld userName="Berkay Nayman"/>
    <CounterApp />
    -->
    <ClassBindings />
  </div>
</template>

<script>
/*
import HelloWorld from './components/props-degiskenTanımlama.vue'
import CounterApp from './components/counterApp-ifElse-for-computedProperties.vue'
*/
import ClassBindings from './components/ClassBindings-InputValidation.vue'

export default {
  name: 'App',
  components: {
    /*
    HelloWorld,
    CounterApp,
    */
    ClassBindings
  }
}
</script>

<style>
#app {
  text-align: center;
}
</style>
