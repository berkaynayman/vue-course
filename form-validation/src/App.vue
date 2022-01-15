<template>
  <form @submit.prevent="submit">
    <my-input name="Username" :rules="{ required: true, min: 5}"
      :value="username.value" :error="username.error" @update="update" />

    <my-input name="Password" :rules="{ required: true, min: 10}"
      :value="password.value" :error="password.error" @update="update" type="password" />

    <my-button  
      background="red"
      color="white"
      :disabled="!valid" />
  </form>
</template>

<script>
import MyButton from "./components/MyButton.vue"
import MyInput from "./components/MyInput.vue"

export default {
  name: 'App',
  components: {
    MyButton,
    MyInput
  },

  data(){
    return{
      username: {
        value: 'user',
        error: ''
      },
      password: {
        value: 'pass',
        error: ''
      }
    }
  },
  computed: {
    valid() {
      return (
        !this.username.error &&
        !this.password.error
      )
    }
  },
  methods: {
    submit(){
      console.log('event');
    },

    update({name, value, error}) {
      this[name].value = value
      this[name].error = error
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  margin-top: 60px;
}
</style>
