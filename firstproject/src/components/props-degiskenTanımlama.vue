<template>
  <div>
    <h3>
      Username : {{ userName }}
    </h3>
    <h3>
      Age : {{ age }}
    </h3>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  //değişken tanımlama
  data() {
    return {
      age: 21
    }
  },
  //props tanımlama
  props: {
    userName: String
  }
}
</script>