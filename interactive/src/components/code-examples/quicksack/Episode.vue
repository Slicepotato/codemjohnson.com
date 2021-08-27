<template>
    <div class="card-wrapper">
        <template v-if="episode">
            <div v-for="(single, index) in episode" :key="index" class="card">
                <h3 class="ep-number">
                    <button @click="copyToClipboard($route.path)" class="copy-link">
                        <fa :icon="['fas', 'link']" />
                    </button>
                    <span>{{episodeNumber(single.title)}}</span>
                </h3>
                <h3 class="title">
                    <span>{{ formatTitle(single.title) }}</span>
                </h3>
                <p class="pubdate">{{ formatDate(single.pubdate) }}</p>
                <p class="desc">{{ single.description }}</p>
                <AudioPlayer 
                    :url="single.enclosure.link" 
                    :type="single.enclosure.type"
                    :objectid="single.guid"
                />
            </div>
        </template>
        <template v-else-if="items.length">
            <div v-for="(episode, index) in items" :key="index" class="card">
                <h3 class="ep-number">
                    <button @click="copyToClipboard($route.path)" class="copy-link">
                        <fa :icon="['fas', 'link']" />
                    </button>
                    <span>{{episodeNumber(episode.title)}}</span>
                </h3>
                <h3 class="title">
                    <router-link 
                        class="episode-link" 
                        v-if="$route.name !== 'Details'"
                        :to="{ 
                        name: 'Details', 
                        params: { 
                            episodeId: formatLink(episode.title),
                            title: formatTitle(episode.title),
                            epNum: episodeNumber(episode.title),
                            pubdate: formatDate(episode.pubDate),
                            desc: episode.description,
                            url: episode.enclosure.link,
                            type: episode.enclosure.type,
                            objectid: episode.guid,
                        }}">
                        <span>{{ formatTitle(episode.title) }}</span>
                        <fa :icon="['fas', 'external-link-alt']" />
                    </router-link>
                    <span v-else>{{ formatTitle(episode.title) }}</span>
                </h3>
                <p class="pubdate">{{ formatDate(episode.pubdate) }}</p>
                <p class="desc">{{ episode.description }}</p>
                <AudioPlayer 
                    :url="episode.enclosure.link" 
                    :type="episode.enclosure.type"
                    :objectid="episode.guid"
                />
            </div>
        </template>
        <template v-else>
            <p class="empty">No results found...</p>
        </template>
    </div>
</template>

<script>
import moment from 'moment';
import AudioPlayer from '@/components/code-examples/quicksack/AudioPlayer.vue';

export default {
    props: {
        items: {
            type: Array,
        }
    },
    components: {
        AudioPlayer,
    },
    data() {
        return {
            episode: null
        }
    },
    created: function() {
        if(this.$route.params.episodeId) {
            this.episode = this.items.filter((item)=>{
                return this.$route.params.episodeId.toLowerCase().split(' ').every(v => this.formatLink(item.title).includes(v));
            })  
        } else {
            return this.searchQuery ? this.searchQuery : this.items
        }
    },
    methods: {
        formatDate(date) {
            return moment(date).format('MMMM Do YYYY');
        },
        formatLink(episode) {
            if (episode.indexOf(':') !== -1) {
                let title = episode.split(/:(.+)/)[1];
                title = title.replace(/[^\w\s]/gi, '')
                title = title.trim();
                title = title.replace(/\s+/g, '-').toLowerCase();
                
                return title;
            } else {
                let title = episode.replace(/[^\w\s]/gi, '')
                title = title.trim();
                title = title.replace(/\s+/g, '-').toLowerCase();

                return title;
            }
        },
        episodeNumber(title) {
            if(title.substring(0, title.indexOf(":"))){
                let epNum = title.substring(0, title.indexOf(":"));
                let episodeNumber = epNum.replace(/\D/g, "");
                episodeNumber = episodeNumber.substring(0, 3);

                return '#' + episodeNumber;
            } else {
                return 'Special'
            }
        },
        formatTitle(title) {
            if (title.lastIndexOf(':') !== -1) {
                let prettyName = title.split(/:(.+)/)[1];
                prettyName = prettyName.trim();
                
                return prettyName;
            } else {
                return title;
            }
        },
        async copyToClipboard(route) {
            let link = window.location.origin + route;
            await navigator.clipboard.writeText(link);
            alert(link + ' copied!');
        },
    },
    watch: {
        $route: function(to,from) {
            if(to.params.episodeId) {
                this.episode = this.items.filter((item)=>{
                    return to.params.episodeId.toLowerCase().split(' ').every(v => this.formatLink(item.title).includes(v));
                })  
            }

            if(from.params.episodeId) {
                this.episode = null;
            }

            console.log(from);
            console.log(this.episode);
        }
    }
}
</script>
<style lang="scss" scoped>
    @import '@/assets/scss/utility/_variables.scss';
    @import '@/assets/scss/utility/_mixins.scss';

    .empty {
        text-align: center;
    }

    .ep-number {
        justify-content: flex-end;
    }

    .card-wrapper {
        @include at-least($sm) {
            display: grid;
            column-gap: 2rem;
            justify-content: center;
            grid-template-columns: repeat(auto-fit,$col3);
        }
    }

    .card {
        margin-bottom: 2em;
        padding: 0;
        border: 4px solid $grey-8;
        border-radius: 1rem;
        position: relative;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    
        .ep-number {
            font-weight: 700;
            font-size: 3rem;
            padding: .5rem 1rem;
            background-color: $riv-blue;
            display: flex;
            justify-content: space-between;
            align-items: center;
          
            > span {
                font-family: $roboto-slab;
                font-style: italic;
                -webkit-text-stroke: 1px $blk;
                color: $wht;
                text-shadow:
                    3px 3px 0 $blk,
                    -1px -1px 0 $blk,  
                    1px -1px 0 $blk,
                    -1px 1px 0 $blk,
                    1px 1px 0 $blk;
            }
        }

        .episode-link {
            text-decoration: none;
            color: $blk;
            display: flex;
            justify-content: flex-start;
            align-items: center;

            svg {
                font-size: 1.25rem;
                margin-left: 1rem;
            }

            &:hover, &:focus {
                text-decoration: underline;
            }
        }
        
        .title {
            font-size: 1.5rem;
            font-family: $roboto-slab;
            font-weight: 700;
            padding: 1rem 1rem 0;
            margin-bottom: .25rem;
            display: flex;
            justify-content: flex-start;
            align-items: center;
        }
        
        .pubdate {
            border-bottom: 1px solid $grey-4;
            padding: 0 0 .5rem;
            font-style: italic;
            font-weight: 300;
            margin: 0 1rem .5rem;
        }
        
        .desc {
            margin-bottom: 1rem;
            padding: 0 1rem;
            line-height: 1.5rem;
        }
        
        .copy-link {
            color: $wht;
            font-size: 2rem;
            background-color: transparent;
            outline: none;
            border: none;
        
            @include at-least('small') {
                opacity: .5;
                transition: .25s all;
        
                &:hover, &:focus {
                    opacity: 1;
                }
            }
        }
    }
</style>