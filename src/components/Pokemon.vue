<template>
    <div>
        <v-flex xs4>
        <v-card min-width="300px" height="100%" @click.stop="dialog = true">
            <v-card-title :class="titleClass">{{Pokemon.no}}:{{Pokemon.name}}</v-card-title>
            <v-divider></v-divider>
            <v-card-text :class="textClass" height="300px">
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
        data() {
            return {
                dialog: false,
                titleClass: "",
                textClass: "",
            }
        },
        created() {
            switch (this.Pokemon.types[0]) {
                case "ノーマル":
                    this.titleClass = "normal_bg";
                    break;
                case "ほのお":
                    this.titleClass = "fire_bg";
                    break;
                case "みず":
                    this.titleClass = "water_bg";
                    break;
                case "でんき":
                    this.titleClass = "electric_bg";
                    break;
                case "くさ":
                    this.titleClass = "grass_bg";
                    break;
                case "こおり":
                    this.titleClass = "ice_bg";
                    break;
                case "かくとう":
                    this.titleClass = "fighting_bg";
                    break;
                case "どく":
                    this.titleClass = "poison_bg";
                    break;
                case "じめん":
                    this.titleClass = "ground_bg";
                    break;
                case "ひこう":
                    this.titleClass = "flying_bg";
                    break;
                case "エスパー":
                    this.titleClass = "psychic_bg";
                    break;
                case "むし":
                    this.titleClass = "bug_bg";
                    break;
                case "いわ":
                    this.titleClass = "rock_bg";
                    break;
                case "ゴースト":
                    this.titleClass = "ghost_bg";
                    break;
                case "ドラゴン":
                    this.titleClass = "dragon_bg";
                    break;
                case "あく":
                    this.titleClass = "dark_bg";
                    break;
                case "はがね":
                    this.titleClass = "steel_bg";
                    break;
                case "フェアリー":
                    this.titleClass = "fairy_bg";
                    break;
            }
            switch (this.Pokemon.types[1]) {
                case "ノーマル":
                    this.textClass = "normal_bg";
                    break;
                case "ほのお":
                    this.textClass = "fire_bg";
                    break;
                case "みず":
                    this.textClass = "water_bg";
                    break;
                case "でんき":
                    this.textClass = "electric_bg";
                    break;
                case "くさ":
                    this.textClass = "grass_bg";
                    break;
                case "こおり":
                    this.textClass = "ice_bg";
                    break;
                case "かくとう":
                    this.textClass = "fighting_bg";
                    break;
                case "どく":
                    this.textClass = "poison_bg";
                    break;
                case "じめん":
                    this.textClass = "ground_bg";
                    break;
                case "ひこう":
                    this.textClass = "flying_bg";
                    break;
                case "エスパー":
                    this.textClass = "psychic_bg";
                    break;
                case "むし":
                    this.textClass = "bug_bg";
                    break;
                case "いわ":
                    this.textClass = "rock_bg";
                    break;
                case "ゴースト":
                    this.textClass = "ghost_bg";
                    break;
                case "ドラゴン":
                    this.textClass = "dragon_bg";
                    break;
                case "あく":
                    this.textClass = "dark_bg";
                    break;
                case "はがね":
                    this.textClass = "steel_bg";
                    break;
                case "フェアリー":
                    this.textClass = "fairy_bg";
                    break;
            }
        }
    }
</script>

<style scoped>
    .normal_bg {
        background:linear-gradient(to bottom right,#FFF, #FFF);
    }
    .fire_bg {
        background:linear-gradient(to bottom right,#ff6347, #FFF);
    }
    .water_bg {
        background:linear-gradient(to bottom right,#00ffff, #FFF);
    }
    .electric_bg {
        background:linear-gradient(to bottom right,#ffff00, #FFF);
    }
    .grass_bg {
        background:linear-gradient(to bottom right,#7fff00, #FFF);
    }
    .ice_bg {
        background:linear-gradient(to bottom right,#e0ffff, #FFF);
    }
    .fighting_bg {
        background:linear-gradient(to bottom right,#f4a460, #FFF);
    }
    .poison_bg {
        background:linear-gradient(to bottom right,#8a2be2, #FFF);
    }
    .ground_bg {
        background:linear-gradient(to bottom right,#8b4513, #FFF);
    }
    .flying_bg {
        background:linear-gradient(to bottom right,#87ceeb, #FFF);
    }
    .psychic_bg {
        background:linear-gradient(to bottom right,#ba55d3, #FFF);
    }
    .bug_bg {
        background:linear-gradient(to bottom right,#808000, #FFF);
    }
    .rock_bg {
        background:linear-gradient(to bottom right,#bc8f8f, #FFF);
    }
    .ghost_bg {
        background:linear-gradient(to bottom right,#483d8b, #FFF);
    }
    .dragon_bg {
        background:linear-gradient(to bottom right,#ff7f50, #FFF);
    }
    .dark_bg {
        background:linear-gradient(to bottom right,#2f4f4f, #FFF);
    }
    .steel_bg {
        background:linear-gradient(to bottom right,#778899, #FFF);
    }
    .fairy_bg {
        background:linear-gradient(to bottom right,#ff1493, #FFF);
    }
</style>