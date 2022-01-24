<template>
    <div>
       <h1>user posts</h1>
       <router-link :to="userLink">Back to User</router-link>
       <ul>
           <li v-for="(post, index) in posts" :key="index">
               <h3>{{post.title}}</h3>
               <p>{{post.body}}</p>
           </li>
       </ul>
    </div>
</template>

<script>
export default {
    name: "UserPosts",
    data(){
        return{
            id: this.$route.params.id,
            posts: []
        }
    },
    computed:{
        userLink(){
            return `/user/${this.id}`
        }
    },
    components: {},
    created(){
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${this.id}`)
        .then((res) => res.json()).then(res => this.posts = res)
    }
}
</script>
<style scoped>
li{
    list-style: none;
    border: 1px solid #ccc;
}
</style>