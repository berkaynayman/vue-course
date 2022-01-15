<template>
  <div>
    <div class="cards">
      <Card v-for="p in pokemon" :key="p.id" @click="click(p)" :class="{opace: selectedId && p.id !== selectedId}" class="card">
        <template v-slot:title>
          {{ p.name }} #{{ p.id }}
        </template>
        <template v-slot:image>
          <img :src="p.sprite" />
        </template>
        <template v-slot:desc>
          <div v-for="type in p.types" :key="type">
            {{type}}
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue"

export default {
    components: {
        Card
    },
    props: {
        pokemon: Array,
        selectedId: Number
    },
    methods: {
        click(pokemon){
            this.$emit("chosen", pokemon)
        }
    }

}
</script>

<style scoped>
.opace{
  opacity: .5;
}
.cards{
  display: flex;
  justify-content: center;
}
.card:hover{
  opacity: 1;
}
.evolutions{
  margin-top: 10px;
}
img{
    width: 100%;
}
</style>
