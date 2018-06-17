<template>
  <div id="app">
    <wife-to-do></wife-to-do>

    <mood></mood>
  </div>
</template>

<script>
import wifeToDo from './components/wifeToDo'
import mood from './components/mood'
import 'bootstrap/dist/css/bootstrap.min.css'

export default {
  name: 'app',
  components: {
      wifeToDo,
      mood
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
