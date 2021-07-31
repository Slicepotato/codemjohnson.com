<template>
  <div id="app" :style="{ 'background-image':'url(' + pageBg +')'}">
    <app-header></app-header>
    <div class="page-wrap" :style="{ 'background-image':'url(' + footerBg +')'}">
      <router-view/>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

let pageBg;
let footerBg;

export default {
  data () {
    return {
      footerBgSlug: 'footer-bg-codemj',
      pageBgSlug: 'background-texture',
      footerBg,
      pageBg,
      img: [],
    }
  },
  components: {
    appFooter: Footer,
    appHeader: Header,
  },
  created: function() {
    // Fetch | Media -- Footer
    this.$http.get('wp/v2/media/?slug=' + this.footerBgSlug).then(response => {
        for(let media in response.data){
            this.footerBg = response.data[media].source_url;    
        } 
    }, error => { 
        alert(error) 
    });

    // Fetch | Media -- Page BG
    this.$http.get('wp/v2/media/?slug=' + this.pageBgSlug).then(response => {
        for(let media in response.data){
            this.pageBg = response.data[media].source_url;    
        } 
    }, error => { 
        alert(error) 
    });
  },
}
</script>

<style lang="scss">

</style>