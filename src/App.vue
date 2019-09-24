<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vue-</span>
        <span class="font-weight-light">Pokedex</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        href="https://github.com/kotofurumiya/pokemon_data"
        target="_blank"
      >
        <span class="mr-2">datasource by kotofurumiya</span>
      </v-btn>
    </v-app-bar>
    <v-content>
      <MyMain/>
      <PokemonBuilder />
    </v-content>
    <v-footer app>
      <MyTabbar />
    </v-footer>
  </v-app>
</template>

<script>
  import MyMain from './components/MyMain.vue'
  import PokemonBuilder from './components/PokemonBuilder.vue'
  import MyTabbar from './components/MyTabbar.vue'
  export default {
    name: 'app',
    components: {
      MyMain,
      PokemonBuilder,
      MyTabbar
    }
  }
</script>