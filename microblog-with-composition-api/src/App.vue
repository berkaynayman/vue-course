<template>
  <div>
    <input 
      :value="currentTag" 
      @input="setHashtag"
    />
    <div class="cards">
      <Card v-for="post in filteredPosts" :key="post.id">
        <template v-slot:title>
          {{ post.title }}
        </template>
        <template v-slot:content>
          {{ post.content }}
        </template>
        <template v-slot:desc>
          <Controls :post="post" />
        </template>
      </Card>
    </div>
  </div>
</template>

<script>
import {computed} from 'vue'
import Card from "./components/Card.vue"
import Controls from "./components/Controls.vue"
import {store} from './store.js'

export default {
  name: 'App',
  components: {
    Card,
    Controls
  },
  setup(){
    const setHashtag = ($evt) => {
      store.setHashtag($evt.target.value)
    }

    return{
      setHashtag,
      filteredPosts: computed(() => store.filteredPosts),
      currentTag: computed(() => store.state.currentTag)
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
  color: #2c3e50;
  margin-top: 60px;
}
.cards{
  display: flex;
  justify-content: center;
}
</style>
