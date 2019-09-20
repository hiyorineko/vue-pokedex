<template>
    <div>
        <v-container>
            <v-text-field
                    v-model="keyword"
                    label="ポケモンの名前を入れてね"
            ></v-text-field>
            <v-layout class="row" mt-5 px-3 py-3>
                <div v-for="Pokemon in filteredPokemonList" v-bind:key="Pokemon.index">
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
        name: "PokemonBuilder",
        components: {
            Pokemon
        },
        data() {
            return {
                keyword:"",
                originPokemonList: [],
            }
        },
        created () {
            this.originPokemonList = PokemonData;
        },
        computed: {
            filteredPokemonList: function() {
                let PokemonList = [];
                for (let i in this.originPokemonList) {
                    let p = this.originPokemonList[i];
                    if (p.name.indexOf(this.transHiraToKana(this.keyword)) !== -1) {
                        PokemonList.push(p);
                    }
                }
                return PokemonList;
            }
        },
        methods: {
            transHiraToKana: function (str) {
                return str.replace(/[\u3041-\u3096]/g, function(match) {
                    let chr = match.charCodeAt(0) + 0x60;
                    return String.fromCharCode(chr);
                });
            }
        },
    }
</script>

<style scoped>
</style>