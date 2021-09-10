<template>
    <section class="page-content">
        <template v-for="(item, index) in page">
          <div class="inner" :key="index">
            <h2 class="stat-title stat-title--sm stat-title--divider">
                {{ item.title.rendered }}
            </h2>
            <div v-html="item.content.rendered"></div>
          </div>
        </template>
    </section>
</template>

<script>
export default {
    name: 'Contact',
    data () {
        return {
            slug: this.$options.name.replace(/\s+/g, '-').toLowerCase(),
            page: [],
            form: {
                fullname: '',
                email: '',
                subject: '',
                message: ''
            }
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
        sendForm() {
            this.$http.post('/wp-json/contact-form-7/v1/contact-forms', this.form {
                headers: {
                    'Authorization': `Bearer ${res.data.token}`,
                    'Content-Type': 'multipart/form-data; charset="utf-8"',
                    ...formData.getHeaders()
                }
            })
            .then(response => {
                console.log('Success --> ' + response.data)
            })
            .catch(error => {
                console.log('Error --> ' + error)
            })
        }
    },
}
</script>

<style lang="scss">
    @import '@/assets/scss/utility/_variables.scss';
    @import '@/assets/scss/utility/_mixins.scss';

</style>