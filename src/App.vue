<template>
  <div id="app">

    <wife-to-do></wife-to-do>
  </div>
</template>

<script>
import wifeToDo from './components/wifeToDo'

export default {
  name: 'app',
  components: {
      wifeToDo
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
