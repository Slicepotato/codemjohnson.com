<template>
    <section class="page-content">
        <template v-for="(item, index) in page">
          <div class="inner" :key="index">
            <h2 id="examples" class="stat-title stat-title--sm stat-title--divider">
                {{ item.title.rendered }}
            </h2>
            <div v-html="item.content.rendered"></div>
          </div>
        </template>

        <ul class="example-grid flex flex--justify-center flex--wrap">
          <li v-for="(ex, index) in media" :key="index">
            <router-link :to="ex.acf.slug">
              <img :src="ex.featured_image_src" />
            </router-link>
          </li>
        </ul>
    </section>
</template>

<script>
export default {
    name: 'CodeExamples',
    data () {
        return {
            slug: this.$options.name.replace(/\s+/g, '-').toLowerCase(),
            page: [],
            media: []
        }
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
}
</script>

<style lang="scss">

</style>