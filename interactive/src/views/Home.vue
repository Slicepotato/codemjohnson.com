<template>
  <div class="home content-wrap">
    <div class="page-content" v-html="item.content.rendered" v-for="(item, index) in page" :key="index"></div>
    <Background />
    <About />
    <CodeExamples />  
    <Design />  
    <Elsewise />
  </div>
</template>

<script>
import About from '@/components/About.vue';
import Elsewise from '@/components/Elsewise.vue';
import CodeExamples from '@/components/CodeExamples.vue';
import Background from '@/components/Background.vue';
import Design from '@/components/Design.vue';

export default {
  name: 'Home',
  data () {
    return {
      slug: this.$route.name.replace(/\s+/g, '-').toLowerCase(),
      page: [],
    }
  },
  components: {
    About,
    Elsewise,
    CodeExamples,
    Background,
    Design
  },
  created: function() {
    this.getContentBlock(this.slug);
  },
  mounted: function() {
    if( this.$router.currentRoute['hash'] ) {
      let id = this.$router.currentRoute['hash'].replace("#", "");
      this.scrollTo(id);
    }
  },
  methods: {
    scrollTo: function(id) {
      setTimeout(function() {
        const el = document.getElementById(id);
        const yOffset = -50;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({top: y, behavior: 'smooth'});
      }, 500);
    },
    getContentBlock(slug) {
      // Fetch | Page Data
      this.$http.get('wp/v2/pages?slug=' + slug).then(response => {
        for(let item in response.data){
          this.page.push(response.data[item]);
        }
        // console.log(response);
      }, error => { 
        alert(error) 
      });
    },
  },
  computed: {
    currentRouteName() {
        return this.$route.name;
    },
  }
}
</script>

<style lang="scss">
  @import '@/assets/scss/utility/_variables.scss';
  @import '@/assets/scss/utility/_mixins.scss';

  .example-grid {
    a {
      display: block;
    }
    img {
      width: 340px;
      margin: .75rem 1rem;
      border-radius: .5rem;
      opacity: .5;
      transition: .25s all ease-in-out;

      &:hover, &:focus {
        opacity: 1;
      }
    }
  }
</style>
