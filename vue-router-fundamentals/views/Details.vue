<template>
    <div>
        <h1>details</h1>
        <p>{{ $route.params.userID }}</p>
        <button @click="goBack">Geri Dön</button>
    </div>
</template>
<script>
export default {
    created() {
        console.log(this.$route);
    },
    methods: {
        goBack(){
            this.$router.push("/")
        }
    }
}
</script>