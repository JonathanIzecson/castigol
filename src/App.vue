<template>
  <div>
    <navigation/>
  </div>
  <router-view/>
</template>

<script>
import Navigation from './views/partials/Navigation';
export default{
  components: {
    Navigation,
  }
}
</script>

<style>
</style>
