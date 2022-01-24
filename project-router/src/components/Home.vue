<template>
    <div>
        <h1>home</h1>
        <div v-for="(user,index) in users" :key="index">
            <UserItem :user="user"/>
        </div>
    </div>
</template>

<script>
import UserItem from './UserItem.vue'
export default {
    name: "Home",
    components: { UserItem },
    data(){
        return{
            users: []
        }
    },
    created(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json()).then(res => this.users = res)
    }
}
</script>