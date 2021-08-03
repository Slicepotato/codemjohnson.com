<template>
  <div id="app" :style="{ 'background-image':'url(' + pageBg +')'}">
    <Header/>
    <div class="page-wrap" :style="{ 'background-image':'url(' + footerBg +')'}">
      <router-view/>
    </div>
    <Footer/>
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
    Footer,
    Header,
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