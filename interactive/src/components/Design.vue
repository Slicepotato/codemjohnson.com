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
    </section>
</template>

<script>
export default {
    name: 'Design',
    data () {
        return {
            slug: this.$options.name.replace(/\s+/g, '-').toLowerCase(),
            page: [],
        }
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

<style lang="scss">
    @import '@/assets/scss/utility/_variables.scss';
    @import '@/assets/scss/utility/_mixins.scss';

    .blocks-gallery-grid {
        @include flexbox;
        @include justify-content(center);
        @include flex-wrap(wrap);

        .blocks-gallery-item {
            margin: 1rem;

            figure {
                width: 340px;
                height: 100%;
                border-radius: .5rem;
                @include flexbox;
                @include justify-content(flex-start);
                @include align-items(flex-end);

                img {
                    height: 100%;
                    width: 100%;
                    display: block;
                    max-width: 100%;
                    flex: 1;
                    object-fit: cover;
                }
            }
        }
    }
</style>