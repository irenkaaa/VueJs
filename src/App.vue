<template>
  <div id="app">
    <Navigation />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navigation from './components/core/Navigation';
import Footer from './components/core/Footer';

export default {
  name: 'App',
  components: {
    Navigation,
    Footer
  }
}
</script>

<style>
</style>
