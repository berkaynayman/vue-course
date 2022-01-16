<template>
    <div>
        <h1>home</h1>
        <input @keydown.enter="goToDetails" />
    </div>
</template>

<script>
export default {
    methods: {
        goToDetails(e){
            this.$router.push(`/detail/${e.target.value}`)
        }
    }
}
</script>