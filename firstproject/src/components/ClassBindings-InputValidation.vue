<template>
    <div> 
        <div v-for="number in numbers" :key="number" v-bind:class="getClass(number)">
            {{ number }}
        </div>
        <div>
            <input v-bind:value="value" 
                   v-on:input="input" />
            {{ value }}
            <h4> {{ error }}</h4>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ClassBindings',
        data(){
            return{
                numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                value: "user"
            }
        },
        computed: {
            error () {
                if (this.value.length < 5 ) {
                    return "Kelime uzunluğu 5 den küçük."
                }
            }
        },
        methods:{
            input($event){
                this.value = $event.target.value
            },
            isEven(num) {
                return num % 2 === 0
            },
            getClass(num) {
                return this.isEven(num) ? "blue" : "red"
            }
        }
    }
</script>

<style>
    .blue{color:blue}
    .red{color:red}
</style>