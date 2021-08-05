<template>
  <div class="home content-wrap">
    <div class="page-content" v-html="item.content.rendered" v-for="(item, index) in page" :key="index"></div>
    <Experience/>
  </div>
</template>

<script>
import Experience from '@/components/Experience.vue';

export default {
  name: 'Home',
  data () {
    return {
      slug: this.$route.name.replace(/\s+/g, '-').toLowerCase(),
      page: [],
    }
  },
  components: {
    Experience
  },
  created: function() {
    // Fetch | Page Data
    this.$http.get('wp/v2/pages?slug=' + this.slug).then(response => {
      for(let item in response.data){
        this.page.push(response.data[item]);
      }
      // console.log(response);
    }, error => { 
      alert(error) 
    });
  },
  computed: {
    currentRouteName() {
        return this.$route.name;
    }
  }
}
</script>

<style lang="scss">

</style>
