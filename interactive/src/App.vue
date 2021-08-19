<template>
  <div id="app" :style="{ 'background-image':'url(' + pageBg +')'}">
    <PageLoad />
    <Header />
    <div class="page-wrap" :style="{ 'background-image':'url(' + footerBg +')'}">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import PageLoad from '@/components/PageLoad.vue';

let pageBg;
let footerBg;

export default {
  data () {
    return {
      footerBg,
      pageBg,
    }
  },
  components: {
    Footer,
    Header,
    PageLoad
  },
  created: function() {
    this.init();    
  }, 
  mounted: function() {    
  },
  methods: {
    init: function(){
			this.fetchMedia('footer-bg-codemj').then(function(result){
        this.footerBg = result
      });
      this.fetchMedia('background-texture').then(function(result){
        this.pageBg = result;
      });
		},
    fetchMedia(slug){
      return this.$http.get('wp/v2/media/?slug=' + slug).then((response) => {
          for(let media in response.data){
              return response.data[media].source_url;    
          } 
      }, error => { 
          alert(error) 
      });
    },
  }
}
</script>