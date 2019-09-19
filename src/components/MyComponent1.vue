<template>
    <div>
        <v-container>
            <v-layout class="row" mt-5 px-3 py-3>
                <div v-for="Pokemon in PokemonList" v-bind:key="Pokemon.index">
                    <Pokemon v-bind:Pokemon="Pokemon"/>
                </div>
            </v-layout>
        </v-container>
    </div>
</template>
<script>
    import Pokemon from './Pokemon.vue'
    import PokemonData from '@/assets/pokemon_data.json'
    export default {
        name: "MyComponent1",
        components: {
            Pokemon
        },
        data() {
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