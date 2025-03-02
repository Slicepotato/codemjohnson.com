<template>
    <nav>
        <button type="button" v-on:click="menu"><fa :icon="['fas', 'bars']" class="icon" /></button>
        <ul class="content-wrap" :class="open">
            <li>
                <span v-if="isHome($route.name)" v-on:click="scrollTop">Home</span>
                <router-link v-else to="/">Home</router-link>
            </li>
            <li>
                <span v-if="isHome($route.name)" v-on:click="scrollTo('experience')">Experience</span>
                <router-link v-else :to="{ path: '/', hash: 'experience' }">Experience</router-link>
            </li>
            <li>
                <span v-if="isHome($route.name)" v-on:click="scrollTo('examples')">Examples</span>
                <router-link v-else :to="{ path: '/', hash: 'examples' }">Examples</router-link>
            </li>
            <li>
                <span v-if="isHome($route.name)" v-on:click="scrollTo('design')">Design</span>
                <router-link v-else :to="{ path: '/', hash: 'design' }">Design</router-link>
            </li>
            <li><a target="_blank" :href="resume" download>Resume <fa :icon="['fas', 'file-download']" class="icon" /></a></li>
        </ul>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            open: null,
            resume: null
        }
    },
    created: function() {
        this.init(); 
    },
    methods: {
        init: function() {
            this.fetchMedia(255).then(function(result){
                this.resume = result;
            });
        },
        menu: function() {
            if(!this.open) {
                this.open = 'open';
            } else {
                this.open = null;
            }
        },
        isHome: function(route) {
            if (route == 'Home') { 
                return true;
            }
        },
        scrollTo: function(id) {
            const el = document.getElementById(id);
            const yOffset = -50;
            const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({top: y, behavior: 'smooth'});
        },
        scrollTop: function() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        },
        fetchMedia(id){
            return this.$http.get('wp/v2/media/' + id).then((response) => {
                return response.data.source_url; 
            }, error => { 
                alert(error) 
            });
        },
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/utility/_variables.scss';
    @import '@/assets/scss/utility/_mixins.scss';

    nav {
        width: 100%;
        text-align: right;
        position: fixed;
        top: 0;
        background-color: $off-blk;
        z-index: $z-index-7;

        button {
            color: $wht;
            background-color: transparent;
            border: none;
            outline: none;
            padding: .5rem 1rem;
            font-size: 1.5rem;
            position: relative;
            z-index: $z-index-1;
        }

        ul {
            position: absolute;
            left: 101vw;
            width: 100vw;
            top: 0;
            padding-top: 3rem;
            text-align: left;
            background-color: $off-blk;

            li {
                a, span {
                    color: $wht;
                    padding: 1rem .25rem;
                    font-family: $roboto-slab;
                    display: block;
                    text-decoration: none;
                    border-bottom: 1px solid $grey-2;

                    &:hover,&:focus {
                        cursor: pointer;
                    }
                }

                &:last-child {
                    a {
                        border: none;
                    }
                }
            }

            &.open {
                transition: .25s all ease-in-out;
                left: 0;
            }
        }

        @include at-least($sm) {
            button {
                display: none;
            }

            ul {
                position: initial;
                @include flexbox;
                @include justify-content(flex-end);
                width: auto;
                padding: 0;
                transition: none;

                li {
                    padding: .75rem 1rem;

                    a, span {
                        border: none;
                        padding: 0;
                        border-bottom: 1px solid $grey-4;
                        transition: .15s;

                        &:hover, &:focus {
                            border-bottom: 1px solid $grey-8;
                        }
                    }
                }
            }
        }
    }
</style>