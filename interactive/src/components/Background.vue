<template>
    <section class="page-content">
        <div class="inner" v-for="(item, index) in page" :key="index">
            <h2 id="experience" class="stat-title stat-title--sm stat-title--divider">
                {{ item.title.rendered }}
            </h2>
            <div v-html="item.content.rendered"></div>
        </div>
        <Experience />
    </section>
</template>

<script>
import Experience from '@/components/Experience.vue';

export default {
    name: 'Background',
    data () {
        return {
            slug: this.$options.name.replace(/\s+/g, '-').toLowerCase(),
            page: [],
        }
    },
    components: {
        Experience,
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
            }, error => { 
                alert(error) 
            });
        },
    },
}
</script>