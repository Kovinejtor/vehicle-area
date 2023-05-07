<template>
  <div class="app">
    <LandingPage />
  </div>
</template>

<script>
  import LandingPage from './components/LandingPage.vue'

  export default {
    name: 'App',
    components: {
      LandingPage
    }
    // your app logic here
  }
</script>

<style>
  .app {
    background-color: #7B7B7B !important;
  }
</style>
