<template>
    <div v-if="showLoader($route.name)" id="load-wrapper" class="load-wrapper" :class="[loading ? 'init' : '']">
      <div class="loading" v-if="loading">
        <h1>loading</h1>
        <p id="percent" ref="percent" class="loading-text">{{ percent }}</p>
        <span id="bar" ref="bar" class="loading-bar" :style="{ 'width':percent }"></span>
      </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            // loading: false,
            percent: null,
        }
    },
    created: function() {
        this.loading = true;
    },
    mounted: function() {    
        this.pageLoad();
    },
    methods: {
        showLoader: function(route){
            if (route == 'Home') { 
                return true;
            }
        },
        pageLoad() {
            let i = 0; 
            let k = 20;    
            const self = this; 
            setInterval(function(){
                if(i === 21)  {
                  clearInterval(this);
                  setTimeout(function(){ 
                    setInterval(function(){
                      if(k === 101)  {
                        clearInterval(this);
                        setTimeout(function(){ 
                        // self.loading = false;
                        }, 500);
                      } else {
                        self.percent = k + '%';
                        k++;
                      }
                    }, 10);
                  }, 500);
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
    &.init {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: 999;
      transition: all .25s ease-in-out;
      background-color: $blk;
      z-index: $z-index-8;
    }
  }
</style> 