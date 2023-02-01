<script>
  import Navbar from './shared/components/NavBar.vue'
export default {
  components : {
    Navbar
  }
}
</script>

<template>
  <Navbar/>
  <router-view></router-view>
</template>

<style scoped>

</style>
