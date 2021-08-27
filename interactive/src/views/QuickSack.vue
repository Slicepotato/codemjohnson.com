<template>
    <div class="sack">
        <header>
            <h1>
                <router-link to="/quicksack">FilmSack</router-link>
            </h1>
            <p class="subtitle">/QuickSack</p>
            <p class="site-desc">Looking to see if <b>FilmSack</b> has already covered a film? You can search here to find when they talked about it and listen to the fun.</p>
        </header>
        <UpNext />
        <QuickSearch />
        <Episode /> 
        <button 
            @click="scrollTop()" 
            id="return" 
            class="scroll-to-top"
            title="Go to top"
            v-show="top"
        >
            <fa :icon="['fas', 'angle-up']" />
        </button>
    </div>
</template>

<script>
import axios from 'axios';
import UpNext from '@/components/code-examples/quicksack/UpNext.vue';
import Episode from '@/components/code-examples/quicksack/Episode.vue';
import QuickSearch from '@/components/code-examples/quicksack/QuickSearch.vue';

const feedParser = "https://api.rss2json.com/v1/api.json";

export default {
    name: "EpisodeList",
    components: {
        QuickSearch,
        Episode,
        UpNext
    },
    data () {
        return {
            top: false,
            items: [],
            recents: {
                title: "Recents",
                items: [],
                feedUrl: "http://feeds.frogpants.com/filmsack_feed.xml"
            },
            archive: {
                title: "Archive",
                items: [],
                feedUrl: "http://feeds.frogpants.com/filmsack_feed_old.xml"
            },
        }
    },
    methods: {
        scrollTop() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        },
        onScroll(e) {
            if (typeof window === 'undefined') return
            const top = window.pageYOffset ||   e.target.scrollTop || 0
            this.top = top > 50
        },
        recentFeed() {
            return axios.get(feedParser, {
                params: {
                    rss_url: this.recents.feedUrl,
                    api_key: 'pwgv1pkesdnf8nxq84azuasbprpspqbccbiqqhd4',
                    count: 1000,
                }
            })
        },
        archiveFeed() {
            return axios.get(feedParser, {
                params: {
                    rss_url: this.archive.feedUrl,
                    api_key: 'pwgv1pkesdnf8nxq84azuasbprpspqbccbiqqhd4',
                    count: 1000,
                }
            })
        },
    },
    mounted: function() {
        axios.all([
            this.recentFeed(),
            this.archiveFeed()
        ])
        .then(axios.spread((recent, archive) => {
            this.recents.items = recent.data.items;
            this.archive.items = archive.data.items;
            this.items = recent.data.items.concat(archive.data.items);
        }))
    },
    created () {
        window.addEventListener('scroll', this.onScroll);
    },
    unmounted () {
        window.removeEventListener('scroll', this.onScroll);
    },
}
</script>
<style lang="scss" scoped>
    @import '@/assets/scss/utility/_variables.scss';
    @import '@/assets/scss/utility/_mixins.scss';

    header {
        padding-top: .5rem;
    }

    .site-desc {
        line-height: 1.25rem;
    }
</style>