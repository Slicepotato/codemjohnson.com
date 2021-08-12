<template>
    <section class="page-content">
        <template v-for="(item, index) in page">
            <h2 class="stat-title stat-title--sm stat-title--divider" :key="index">
                {{ item.title.rendered }}
            </h2>
            <div v-html="item.content.rendered" :key="index"></div>
        </template>
    </section>
</template>

<script>
export default {
    name: 'About Me',
  data () {
    return {
      slug: this.$options.name.replace(/\s+/g, '-').toLowerCase(),
      page: [],
    }
  },
  created: function() {
      console.log(this.$options.name)
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
  }
}
</script>