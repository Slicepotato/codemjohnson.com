<template>
  <div class="home content-wrap">
    <template v-for="item in page">
      <div class="page-content" :key="item" v-html="item.content.rendered"></div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      slug: this.$route.name.replace(/\s+/g, '-').toLowerCase(),
      page: [],
    }
  },
  components: {
    
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
