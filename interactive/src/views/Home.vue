<template>
  <div class="home content-wrap">
    <div class="page-content" v-html="item.content.rendered" v-for="(item, index) in page" :key="index"></div>
    <Experience />
    <About />
    <section class="page-content">
      <h2 class="stat-title stat-title--sm stat-title--divider">
        Examples
      </h2>
      <p>
        <ul class="example-grid flex flex--justify-center flex--wrap">
          <li v-for="(ex, index) in media" :key="index">
            <router-link :to="ex.acf.slug">
              <img :src="ex.featured_image_src" />
            </router-link>
          </li>
        </ul>
      </p>
    </section>
    <Elsewise />
  </div>
</template>

<script>
import Experience from '@/components/Experience.vue';
import About from '@/components/About.vue';
import Elsewise from '@/components/Elsewise.vue';

export default {
  name: 'Home',
  data () {
    return {
      slug: this.$route.name.replace(/\s+/g, '-').toLowerCase(),
      page: [],
      media: []
    }
  },
  components: {
    Experience,
    About,
    Elsewise
  },
  created: function() {
    this.getContentBlock(this.slug);
    this.getCodeMedia();
  },
  methods: {
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
    getCodeMedia() {
      // Fetch | Page Media
      this.$http.get('wp/v2/code_example').then(response => {
        for(let item in response.data){
          this.media.push(response.data[item]);
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
