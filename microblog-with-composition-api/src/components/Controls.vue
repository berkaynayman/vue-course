<template>
    <button @click="click"> 
        Like
    </button>
    {{ post.likes }}
    <Hashtag 
        v-for="hashtag in post.hashtags"
        :key="hashtag"
        :hashtag="hashtag"
    />
</template>

<script>
import Hashtag from "./Hashtag.vue"
import { store } from "../store.js"

export default {
    components:{
        Hashtag
    },
    props: {
        post: {
            type: Object,
            required: true
        }
    },

    setup(props){
        const click = () => {
            store.incrementLike(props.post)
        }

        return{
            click
        }
    }
}
</script>