<template>
  <div>
    <PokemonCards 
      :pokemon="pokemon"
      @chosen="fetchEvolutions"
      :selectedId="selectedId"
    />
    <PokemonCards 
      :pokemon="evolutions"
      class="evolutions"
    />
  </div>
</template>

<script>
import PokemonCards from "./components/PokemonCards.vue"

const API = 'https://pokeapi.co/api/v2/pokemon'
const IDS = [1, 4, 7]

export default {
  name: 'App',
  components: {
    PokemonCards
  },
  data(){
    return{
      pokemon: [],
      evolutions: [],
      selectedId: null
    }
  },

  async created(){
    //console.log('created', this.$el);
    this.pokemon = await this.fetchData(IDS)
  },
  mounted(){
    //console.log('mounted', this.$el);
  },

  methods: {
    async fetchEvolutions(pokemon){
      this.evolutions = await this.fetchData([pokemon.id + 1, pokemon.id + 2])
      this.selectedId = pokemon.id
    },
    async fetchData(ids) {
      const res = await Promise.all(
        ids.map(id => window.fetch(`${API}/${id}`))
      )
      const resJSON = await Promise.all(
        res.map(data => data.json())
      )
      return resJSON.map(datum =>({
        id: datum.id,
        name: datum.name,
        sprite: datum.sprites.other['official-artwork'].front_default,
        types: datum.types.map(type => type.type.name)
      }))
    }
  }
}
</script>