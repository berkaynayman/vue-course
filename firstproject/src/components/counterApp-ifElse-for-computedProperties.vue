<template>
    <div>
        <div>
            <button v-on:click='increment'>increment</button>
            {{count}}
            <button v-on:click='discrement'>discrement</button>
        </div>
        <br/>
        <div v-for="number in numbers" :key="number">
            {{ number }}
            <span v-if='isEven(number)'>
                Even
            </span>
            <span v-else>
                Odd
            </span>
        </div>
        <div>
            <h3>Just Even List</h3>
            <div v-for="item in evenList" :key="item">
                {{item}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CounterApp',
        data(){
            return{
                count: 0,
                numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            }
        },
        computed:{
            evenList(){
                return this.numbers.filter(item => this.isEven(item))
            }
        },
        methods:{
            increment(){
                this.count += 1
            },
            discrement(){
                this.count -= 1
            },
            isEven(number){
                return number % 2 === 0
            }
        }
    }
</script>