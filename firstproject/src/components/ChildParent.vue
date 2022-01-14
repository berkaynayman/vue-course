<template>
    <button :class="getClass(item)"
            v-on:click="click">
        {{item}}
    </button>
</template>

<script>
export default {
    name: 'ChildParent',
    props: {
        item: Number
    },
    methods:{
        click(){
            this.$emit('chosen', this.item)
        },
        getClass(num){
            return this.isEven(num) ? "even" : "odd"
        },
        isEven(num){
            return num % 2 === 0
        }
    }
}
</script>
<style>
.even{
    color:red;
}
.odd{
    color: blue;
}
</style>