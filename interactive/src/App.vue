<template>
  <div id="app">
    <div v-for="item in img" :key="item" :style="{ 'background-image':''}">
      <router-view/>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
// url(${item.source_url})
import Footer from '@/components/Footer.vue';

export default {
  data () {
    return {
      slug: 'parchment',
      img: []
    }
  },
  components: {
    appFooter: Footer,
  },
  created: function() {
    this.$http.get('wp/v2/media?slug=' + this.slug).then(response => {
      for(let item in response.data){
        this.img.push(response.data[item]);
      }
      console.log(response);
    }, error => { 
      alert(error) 
    });
  },
}
</script>

<style lang="scss">

</style>