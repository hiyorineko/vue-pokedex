<template>
    <div>
        <h2>ポケモン図鑑</h2>
        <div v-for="Pokemon in PokemonList" v-bind:key="Pokemon.no">
            <Pokemon v-bind:Pokemon="Pokemon"/>
        </div>
    </div>
</template>
<script>
    import Pokemon from './Pokemon.vue'
    import PokemonData from '@/assets/pokemon_data.json'

    // assets/pokemon_data.jsonを読み込んで
    // pokemon.vueに渡す
    // v-forでpokemon.vueをいくつも表示する
    export default {
        name: "MyComponent1",
        components: {
            Pokemon
        },
        data: () => {
            return {
                PokemonList: []
            }
        },
        created () {
            this.PokemonList = PokemonData
        }
    }
</script>

<style scoped>

</style>