<template>
  <div id="app" :style="{ 'background-image':'url(' + pageBg +')'}">
    <div id="load-wrapper" class="load-wrapper" :class="[loading ? 'init' : '']">
      <div class="loading" v-if="loading">
        <h1>loading</h1>
        <p id="percent" ref="percent" class="loading-text">{{ percent }}</p>
        <span id="bar" ref="bar" class="loading-bar" :style="{ 'width':percent }"></span>
      </div>
    </div>
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
let percent;

export default {
  data () {
    return {
      footerBg,
      pageBg,
      loading: false,
      percent,
    }
  },
  components: {
    Footer,
    Header,
  },
  created: function() {
    this.init();    
    this.loading = true;
  }, 
  mounted: function() {    
    this.pageLoad();
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
    pageLoad() {
      let i = 0;     
      const self = this; 
      setInterval(function(){
        if(i === 101)  {
          clearInterval(this);
          setTimeout(function(){ 
            self.loading = false;
          }, 1000);
        } else {
          self.percent = i + '%';
          i++;
        }
      }, 25);
      
    }
  }
}
</script>

<style lang="scss">
  @import '@/assets/scss/utility/_variables.scss';

  .load-wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    
    width: 100vw;
    height: 100vh;
    z-index: 999;
    transition: all .25s ease-in-out;

    &.init {
      background-color: $blk;
    }
    
    .loading {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      max-width: $sm;
      width: 100%;
      text-align: center;
      padding: 1rem;

      h1 {
        font-weight: 300;
        color: $accent-orange;
        font-size: 3em;
        margin: 0;
        line-height: .25;
      }
      
      .loading-text {
        font-weight: 700;
        font-size: 5em;
        line-height: 1;
        margin: .25em 0 0;
        color: $grey-8;
      }
      
      .loading-bar {
        display: block;
        height: 2px;
        background-color: $accent-orange;
        width:0;
      }
    }
  }
</style>