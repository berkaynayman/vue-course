<template>
    <div>
        <!--
        <div>
            <input v-model="nameSurname" />
            {{nameSurname}}
        </div>
        <div>
            <h4>V-Model Radio Input</h4>
            <input type="radio" v-model="radioVal"  value="a"/>
            <input type="radio" v-model="radioVal"  value="b"/>
            {{radioVal}}
        </div>
        <div>
            <h4>V-Model Checkbox Input</h4>
            <input type="checkbox" v-model="checkBoxVal"  value="a"/>
            <input type="checkbox" v-model="checkBoxVal"  value="b"/>
            {{checkBoxVal}}
        </div>
        -->
        <h3>Message : {{ message }}</h3>
    </div>
</template>

<script> 
export default {
    name : "ComponentFour",
    props : {
        message: String,
    },
    data(){
        return{
            nameSurname: "",
            radioVal : "a",
            checkBoxVal : ["a"]
        }
    }
}
</script>