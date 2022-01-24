new Vue({
    el: '#app',
    data: {
        message: "hello vue",
        selectedVal: 'foo',
        isSelected: false
    },
    methods:{
        log(){
            console.log(this.message);
        },
        setValue(){
            this.message = "asdsadasd"
            this.selectedVal = 'baz'
            this.isSelected = !this.isSelected
        }
    }
})