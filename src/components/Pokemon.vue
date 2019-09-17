<template>
    <div>
        <v-flex xs4>
        <v-card min-width="300px" height="100%" @click.stop="dialog = true">
            <v-card-title v-bind:style=styleObject>{{Pokemon.no}}:{{Pokemon.name}}</v-card-title>
            <v-divider></v-divider>
            <v-card-text height="300px">
                <span v-if="Pokemon.form">{{Pokemon.form}}</span>
                <span v-else>-</span>
            </v-card-text>
        </v-card>
            </v-flex>
        <v-dialog v-model="dialog" scrollable max-width="80%">
            <v-card>
                <v-card-title>{{Pokemon.no}}:{{Pokemon.name}}</v-card-title>
                <v-divider></v-divider>
                <v-card-text height="300px">
                    <div v-for="param in Pokemon" v-bind:key="param.index">{{param}}</div>
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>
<script>
    export default {
        name: "Pokemon",
        props: {
            Pokemon: {
                no: Number,
                name: String,
                form: String,
                isMegaEvolution: Boolean,
                evolutions: [],
                types: [],
                abilities: [],
                hiddenAbilities: [],
                stats: {
                    hp: Number,
                    attack: Number,
                    defence: Number,
                    spAttack: Number,
                    spDefence: Number,
                    speed: Number
                }
            }
        },
        data(){
            return {
                dialog: false,
                typeColor: new Map([
                    ['ノーマル','#FFF'],
                    ['ほのお','#ff6347'],
                    ['みず','#00ffff'],
                    ['でんき','#ffff00'],
                    ['くさ','#7fff00'],
                    ['こおり','#e0ffff'],
                    ['かくとう','#f4a460'],
                    ['どく','#8a2be2'],
                    ['じめん','#8b4513'],
                    ['ひこう','#87ceeb'],
                    ['エスパー','#ba55d3'],
                    ['むし','#808000'],
                    ['いわ','#bc8f8f'],
                    ['ゴースト','#483d8b'],
                    ['ドラゴン','#ff7f50'],
                    ['あく','#2f4f4f'],
                    ['はがね','#778899'],
                    ['フェアリー','#ff1493'],
                    ]),
                styleObject:{
                    "backgroundColor": '#FFFFFF'
                },
                created() {
                    this.$set(this.styleObject, "backgroundColor", this.typeColor.get(this.Pokemon.types[0]))
                    this.$set(this.styleObject, "backgroundColor", "#ff1493")
                }
            }
        }
    }
</script>

<style scoped>
</style>