<template>
    <div>
        <h3>Name:{{Pokemon.name}}</h3>

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
        }
    }
</script>

<style scoped>

</style>