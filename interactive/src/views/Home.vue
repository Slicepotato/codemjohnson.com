<template>
  <div class="home">
   <div v-for="item in page" :key="item">
     <h1>{{ item.title.rendered }}</h1>
     <div class="page-content" v-html="item.content.rendered"></div>
   </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      slug: this.$route.name.replace(/\s+/g, '-').toLowerCase(),
      page: []
    }
  },
  components: {
    
  },
  created: function() {
    this.$http.get('wp/v2/pages?slug=' + this.slug).then(response => {
      for(let item in response.data){
        this.page.push(response.data[item]);
      }
      console.log(response);
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
