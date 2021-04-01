<template>
  <div id="app">
    <Navigation />
    <router-view />
  </div>
</template>

<script>
import Navigation from './components/core/Navigation';

export default {
  name: 'App',
  components: {
    Navigation,
  }
}
</script>

<style>
</style>
