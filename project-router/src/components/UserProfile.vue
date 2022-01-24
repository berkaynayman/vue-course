<template>
    <div>
        <a @click="goBack">Go back to user</a>
       <h1>{{user.name}}</h1>
       <ul>
           <li>{{user.phone}}</li>
           <li>{{user.email}}</li>
           <li>{{user.website}}</li>
       </ul>
       <router-link :to="postsLink">Posts</router-link>
    </div>
</template>

<script>
export default {
    name: "UserProfile",
    data(){
        return{
            id: parseInt(this.$route.params.id),
            user: []
        }
    },
    methods:{
        fetchData(){
            fetch(`https://jsonplaceholder.typicode.com/users/${this.id}`)
            .then((res) => res.json()).then(res => this.user = res)
        },
        goBack(){
            this.$router.push("/")
        }
    },
    computed:{
        postsLink(){
            return `/user/${this.id}/posts`
        }
    },
    created(){
        this.fetchData()
    }
}
</script>