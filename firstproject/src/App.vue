<template>
  <div>
    <HelloWorld userName="Berkay Nayman"/>
    <CounterApp />
  </div>
</template>

<script>
import HelloWorld from './components/props-degiskenTanımlama.vue'
import CounterApp from './components/counterApp-ifElse-for-computedProperties.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    CounterApp
  }
}
</script>

<style>
#app {
  text-align: center;
}
</style>
