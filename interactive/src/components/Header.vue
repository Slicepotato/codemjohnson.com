<template>
    <header v-if="isHome($route.name)" :style="{ 'background-image': 'url(' + sectionBg + ')' }">
        <Nav />
        <div class="content-wrap content-wrap--sm headline">
            <div class="headline-inner">
                <h1 class="stat-title flex flex--justify-center flex--align-items-center">
                    <router-link to="/"><img class="avatar" :src="token"></router-link>
                    <div class="user-meta" v-for="(my, index) in user" :key="index">
                        <p class="say-my-name">{{ my.name }}</p>
                        <p class="title">{{ my.description }}</p>
                    </div>
                </h1>
                <div class="button-wrapper">
                    <button type="button" class="border-gradient" id="lookie" v-on:click="scrollTo('examples')">
                        <span class="fg">View Work <fa :icon="['fas', 'chevron-down']" class="icon" /></span>
                        <span class="bg"></span>
                    </button>
                </div>
            </div>
        </div>
    </header>
    <header v-else>
        <Nav />
    </header>
</template>

<script>
import Nav from '@/components/Nav.vue';
export default {
    name: 'Header',
    data() {
        return {
            token: null,
            sectionBg: null,
            user: []
        }
    },
    components: {
        Nav,
    },
    created: function() {
        this.init();          
    },
    methods: {
        init: function() {
            this.fetchMedia('cmj-02').then(function(result){
                this.sectionBg = result;
            });
            this.userData(1).then(function(result){
                this.user.push(result);
            });
            this.fetchAvatar(42).then(function(result){
                this.token = result;
            });
        },
        isHome: function(route){
            if (route == 'Home') { 
                return true;
            }
        },
        userData(uid){
            return this.$http.get('wp/v2/users/' + uid).then((response) => {
                return response.data;
            }, error => { 
                alert(error) 
            });
        },
        fetchAvatar(id){
            return this.$http.get('wp/v2/media/' + id).then((response) => {
                return response.data.source_url; 
            }, error => { 
                alert(error) 
            });
        },
        fetchMedia(slug){
            return this.$http.get('wp/v2/media/?slug=' + slug).then((response) => {
                for(let media in response.data){
                    return response.data[media].source_url;    
                } 
            }, error => { 
                alert(error) 
            });
        },
        scrollTo: function(id) {
            const el = document.getElementById(id);
            const yOffset = -50;
            const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({top: y, behavior: 'smooth'});
        }
    }
}
</script>

<style scoped lang="scss">
    @import '@/assets/scss/utility/_variables.scss';
    @import '@/assets/scss/utility/_mixins.scss';

    header {        
        .headline {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            width: calc(100% - 2rem);
            // background-color: rgba($off-blk,.75);
            padding: .5rem;
            // margin: 0 1rem;
            border: 3px solid $accent-orange;
            background: repeating-linear-gradient(45deg,
                $off-blk,
                $off-blk 1rem,
                $grey-1 1rem,
                $grey-1 2rem
            );

            .headline-inner {
                position: relative;
                border: 2px solid $accent-orange;
                padding: 1.5rem;

                &:before, &:after {
                    content: "•";
                    font-size: 2rem;
                    line-height: 1.15rem;
                    position: absolute;
                    width: 1rem;
                    height: 1rem;
                    color: $accent-orange;
                    border: 2px solid $accent-orange;
                    bottom: -2px;
                    text-align: center;
                }
                &:before {
                    left: -2px;
                }
                &:after {
                    right: -2px;
                }
            }

            &:before, &:after {
                content: "•";
                font-size: 2rem;
                line-height: 1.15rem;
                position: absolute;
                width: 1rem;
                height: 1rem;
                color: $accent-orange;
                border: 2px solid $accent-orange;
                top: .5rem;
                text-align: center;
            }
            &:before {
                left: .5rem;
            }
            &:after {
                right: .5rem;
            }
        }

        h1 {
            flex-direction: column;
            text-align: center;

            .avatar {
                width: 8rem;
            }

            .user-meta {
                .title {
                    font-size: 1rem;
                    font-family: $roboto-slab;
                    color: $grey-4;
                    font-weight: 500;;
                }
            }
        }

        .button-wrapper {
            text-align: center;

            button {
                position: relative;
                border: none;

                &.border-gradient {
                    background-image: linear-gradient(33deg,$chocolate-drk,$chocolate-drkr);
                    background-color: $chocolate-drk;
                    background-position: 100%;
                    color: $wht;
                    padding: 0 3rem;
                    transition: color .3s cubic-bezier(0.455,.03,.515,.955);
                    width: 100%;
                    max-width: 460px;

                    .fg {
                        font-size: 1rem;
                        font-family: $roboto-slab;
                        line-height: 3rem;
                        position: relative;
                        z-index: 1;
                        pointer-events: none;

                        svg {
                            margin-left: .25rem;
                        }
                    }

                    .bg {
                        left: 50%;
                        position: absolute;
                        top: 50%;
                        -ms-transform: translateX(-50%) translateY(-50%);
                        transform: translateX(-50%) translateY(-50%);
                        height: calc(100% - 4px);
                        overflow: hidden;
                        width: calc(100% - 4px);
                        
                        &:before {
                            background: $title-red;
                            clip: rect(0 500px 500px 0);
                            content: '';
                            display: block;
                            height: 500px;
                            left: 50%;
                            position: absolute;
                            top: 50%;
                            -ms-transform: translate(-50%,-50%) rotate(38deg);
                            transform: translate(-50%,-50%) rotate(38deg);
                            transition: clip .25s cubic-bezier(0.455,.03,.515,.955);
                            width: 500px;
                        }
                    }

                    &:hover, &:focus {
                        color: $wht;
                        cursor: pointer;

                        .bg {
                            &:before {
                                clip: rect(0px 200px 200px 200px);
                            }
                        }
                    }
                }
            }
        }

        .home & {
            height: 90vh;
            background-position: center;
            background-size: cover;
            position: relative;
            margin-top: 1.5rem;

            h1 {
                .user-meta {
                    .say-my-name {
                        color: $wht;
                        letter-spacing: 2px;
                        @include stroke(5,$off-blk);
                    }
                    .title {
                        margin-top: .5rem;
                        color: $grey-8;
                        letter-spacing: 1px;
                        @include stroke(2,$off-blk);
                    }
                }
            }            

            @include at-least($sm) {
                h1 {
                    flex-direction: row;
                    text-align: left;

                    .avatar {
                        width: 4rem;
                        margin-right: 1rem;
                    }
                }
            }
        }
    }
</style>