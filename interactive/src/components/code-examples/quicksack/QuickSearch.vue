<template>
    <div class="search-wrapper">
        <label for="episode-search">Search</label>
        <input id="episode-search" class="form-control" type="text" v-model="searchQuery" v-on:input="runSearch" placeholder="Look up an episode..." />
    </div> 
</template>
<script>
export default {
    props: {
        items: {
            type: Array,
        }
    },
    data () {
        return {
            searchQuery: '',
        }
    },
    methods: {
        runSearch: function() {
            this.$emit("search",this.searchQuery);
        }
    },
}
</script>
<style lang="scss" scoped>
    @import '@/assets/scss/utility/_variables.scss';
    @import '@/assets/scss/utility/_mixins.scss';

    .search-wrapper {
        padding: 1rem 0 2rem;

        input {
            width: 100%;
            padding: .5rem;
            font-size: 1.5rem;
            border: 3px solid $grey-8;
            border-radius: 5px;
        }
    }
</style>