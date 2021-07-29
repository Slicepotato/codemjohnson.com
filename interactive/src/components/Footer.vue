<template>
    
</template>

<script>
export default {
    name: 'Footer',
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
}
</script>