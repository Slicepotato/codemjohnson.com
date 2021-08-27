<template>
    <div class="search-wrapper">
        <label for="episode-search">Search</label>
        <input id="episode-search" class="form-control" type="text" v-model="searchQuery" placeholder="Look up an episode..." />
    </div> 
</template>
<script>
export default {
    data () {
        return {
            searchQuery: null,
        }
    },
    computed: {
        resultQuery(){
            if(this.searchQuery){
                return this.items.filter((item)=>{
                    return this.searchQuery.toLowerCase().split(' ').every(v => item.title.toLowerCase().includes(v))
                })
            } else{
                return this.items;
            }
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