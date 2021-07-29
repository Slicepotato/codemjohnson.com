<template>
  <div id="app">
    <router-view/>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue';

export default {
  components: {
    appFooter: Footer,
  },
}
</script>

<style lang="scss">

</style>
