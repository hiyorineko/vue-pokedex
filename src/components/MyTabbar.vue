<template>
    <v-container fluid>
        <v-layout class="row">
            <div v-for="type in types" v-bind:key="type.index">
                <v-btn @click="selectType=type">{{type}}</v-btn>
            </div>
        </v-layout>
        <v-text-field
                v-model="keyword"
                label="ポケモンの名前を入れてね"
        ></v-text-field>
    </v-container>
</template>

<script>
    export default {
        name: "MyTabbar",
        data() {
            return {
                keyword:"",
                selectType:"すべて",
                types:[
                    "すべて",
                    "ノーマル",
                    "ほのお",
                    "みず",
                    "でんき",
                    "くさ",
                    "こおり",
                    "かくとう",
                    "どく",
                    "じめん",
                    "ひこう",
                    "エスパー",
                    "むし",
                    "いわ",
                    "ゴースト",
                    "ドラゴン",
                    "あく",
                    "はがね",
                    "フェアリー"
                ],
            }
        },
    }
</script>

<style scoped>

</style>