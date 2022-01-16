<template>
    <div 
        class="hashtag"
        @click="setHashtag"
    >
        #{{ hashtag }}
    </div>
</template>

<script>
import {store} from '../store.js'

export default {
    props:{
        hashtag: String
    },
    setup(props) {
        const setHashtag = () => {
            store.setHashtag(props.hashtag)
        }

        return{
            setHashtag
        }
    }
}
</script>

<style scoped>
.hashtag {
  text-decoration: underline; 
  font-weight: bold;
}
.hashtag:hover {
  color: cornflowerblue;
}
</style>