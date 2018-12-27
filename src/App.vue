<template>
  <div class="app">
    <nav-bar/>
    <router-view/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';

export default {
  name: 'App',
  components: {
    NavBar,
  },
};
</script>

<style>
.app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
</style>
