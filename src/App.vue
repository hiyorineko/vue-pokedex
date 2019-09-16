<template>
  <div id="app">
    <MyHeader></MyHeader>
    <img alt="Vue logo" src="./assets/logo.jpg">
    <MyMain/>
    <MyComponent1 />
  </div>
</template>

<script>
import MyMain from './components/MyMain.vue'
import MyComponent1 from './components/MyComponent1.vue'
import MyHeader from './components/MyHeader.vue'

export default {
  name: 'app',
  components: {
    MyMain,
    MyComponent1,
    MyHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
