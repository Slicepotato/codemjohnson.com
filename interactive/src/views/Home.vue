<template>
  <div class="home content-wrap">
    <div class="page-content" v-html="item.content.rendered" v-for="(item, index) in page" :key="index"></div>
    <Experience />
    <About />
    <section class="page-content">
      <h2 class="stat-title stat-title--sm stat-title--divider">
        Examples
      </h2>
      <p class="content">
        <router-link to="/quicksack">Quicksack</router-link>
        <router-link to="/light-dots">Light Dots</router-link>
        <router-link to="/ice-cream-sammitch">Perfect Purples</router-link>
        <router-link to="/color-pop">Color Pop</router-link>
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
    }
  },
  components: {
    Experience,
    About,
    Elsewise
  },
  created: function() {
    this.getContentBlock(this.slug);
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
    }
  },
  computed: {
    currentRouteName() {
        return this.$route.name;
    },
  }
}
</script>

<style lang="scss">

</style>
