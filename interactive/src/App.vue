<template>
  <div id="app" :style="{ 'background-image':'url(' + pageBg +')'}" :class="$route.name.toLowerCase()">  
    <Header />
      <div class="page-wrap" :style="{ 'background-image':'url(' + footerBg +')'}">
        <router-view ref="slug" />
      </div>
    <Footer />
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
      footerBg,
      pageBg,
    }
  },
  components: {
    Footer,
    Header,
  },
  created: function() {
    this.init(); 
  }, 
  mounted: function() {    
  },
  methods: {
    init: function(){
      this.fetchMedia('background-texture').then(function(result){
        this.pageBg = result;
      });
			this.fetchMedia('footer-bg-codemj').then(function(result){
        this.footerBg = result;
        console.log(this.$refs.slug);
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

<style lang="scss" scoped>
  #app {
    background-color: #ffffff;
  }
</style>