<template>
  <div class="home page-wrap">
   <div v-for="item in page" :key="item">
     <h1 class="stat-title">{{ user }}</h1>
     <div class="page-content" v-html="item.content.rendered"></div>
   </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    let user;
    
    return {
      slug: this.$route.name.replace(/\s+/g, '-').toLowerCase(),
      page: [],
      user
    }
  },
  components: {
    
  },
  created: function() {
    this.$http.get('wp/v2/pages?slug=' + this.slug).then(response => {
      for(let item in response.data){
        this.page.push(response.data[item]);
      }
      // console.log(response);
    }, error => { 
      alert(error) 
    });

    this.$http.get('wp/v2/users/1').then(response => {
        let userObj = response.data;
        this.user = userObj.name;
        // console.log(userObj);
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
