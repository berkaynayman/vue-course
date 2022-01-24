<template>
    <div class="search">
        <input type="text" v-model="query" @keypress.enter="handleSearch"/>
        <button @click="handleSearch">search</button>
    </div>
</template>

<script>
export default {
    data() {
        return{
            query: ''
        }
    },
    methods:{
        handleSearch(){
            this.$emit('SearchRequested', this.query)
            console.log(this.query);
        }
    }
}
</script>

<style>
.search input{
    padding: 10px 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 400px;
}
.search button{
    padding: 10px 20px;
    border: 1px solid #ccc;
    background-color: #ccc;
    font-weight: bold;
    font-size: 16px;
    border-radius: 5px;
}
</style>