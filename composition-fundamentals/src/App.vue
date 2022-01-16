<template>
  <div>
    <button @click="a++">{{ a }}</button>
    <button @click="b++">{{ b }}</button>
    <h3>{{ total }}</h3>
    <p>
      {{ history }}
    </p>
  </div>
</template>

<script>
import { useNumbers } from "./useNumbers.js" 

export default {
  name: 'App',
  setup(){

    /*
    const numbers = reactive({
      a: 0,
      b: 0
    })
    const increase = (n) => {
      numbers[n]++
    } 

    const total = computed(() => {
      return count.value + numbers.a + numbers.b
    }) 

    watch(numbers, (newVal) => {
      console.log(`a: ${newVal.a}. b: ${newVal.b}`);
    })

    watchEffect(() => {
      console.log(numbers.a);
      console.log(numbers.b);
    })
    */

    return useNumbers()
  }
}
</script>

<style>

</style>
