<template>
    <div class="">
        <v-flex xs4>
        <v-card min-width="300px" height="100%" @click.stop="dialog = true">
            <v-card-title>{{Pokemon.no}}:{{Pokemon.name}}</v-card-title>
            <v-divider></v-divider>
            <v-card-text height="300px">{{Pokemon.form}}</v-card-text>
            <v-card-text height="300px">タイプ1:{{Pokemon.types[0]}}</v-card-text>
            <v-card-text height="300px">タイプ2:{{Pokemon.types[1]}}</v-card-text>
        </v-card>
            </v-flex>
        <v-dialog v-model="dialog" scrollable max-width="80%">
            <v-card>
                <v-card-title>{{Pokemon.no}}:{{Pokemon.name}}</v-card-title>
                <v-divider></v-divider>
                <v-card-text height="300px">{{Pokemon.form}}</v-card-text>
                <v-card-text height="300px">タイプ1:{{Pokemon.types[0]}}</v-card-text>
                <v-card-text height="300px">タイプ2:{{Pokemon.types[1]}}</v-card-text>
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
                dialog: false
            }
        }
    }
</script>

<style scoped>

</style>