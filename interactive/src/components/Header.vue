<template>
    <header v-if="showHeader($route.name)" :style="{ 'background-image': 'url(' + sectionBg + ')' }">
        <Nav />
        <div class="content-wrap">
            <h1 class="stat-title flex flex--justify-start flex--align-items-center">
                <router-link to="/"><img class="avatar" :src="token"></router-link>
                <div class="user-meta" v-for="(my, index) in user" :key="index">
                    <p class="say-my-name">{{ my.name }}</p>
                    <p class="title">{{ my.description }}</p>
                </div>
            </h1>
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
            this.fetchMedia('header-background').then(function(result){
                this.sectionBg = result;
            });
            this.userData(1).then(function(result){
                this.user.push(result);
            });
            this.fetchAvatar(42).then(function(result){
                this.token = result;
            });
        },
        showHeader: function(route){
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
    }
}
</script>

<style scoped lang="scss">
    @import '@/assets/scss/utility/_variables.scss';

    header {
        border-top: 10px solid $off-blk;

        h1 {
            margin: 0;

            .avatar {
                width: 4rem;
                margin-right: 1rem;
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

        .home & {
            height: 98vh;
            background-position: center;
            background-size: cover;
            position: relative;
            margin-bottom: 8vh;
        }
        
        &:after {
            content: '';
            /*
            position: absolute;
            bottom: -1px;
            height: 5vh;
            width: 100%;
            background-image: linear-gradient(to bottom, rgba(14, 14, 14, 0.75), rgba(255, 255, 255, 1));
            */
        }
    }
</style>