<template>
    <header>
        <div class="content-wrap">
            <h1 class="stat-title flex flex--justify-start flex--align-items-center">
                <img class="avatar" :src="token">
                <div class="user-meta">
                    <p class="say-my-name">{{ user.name }}</p>
                    <p class="title">{{ user.description }}</p>
                </div>
            </h1>
        </div>
    </header>
</template>

<script>
let user;
let token;

export default {
    name: 'Header',
    data() {
        return {
            token,
            user
        }
    },
    created: function() {
        this.init();          
    },
    methods: {
        init: function() {
            this.userData(1).then(function(result){
                this.user = result;
            });
            this.fetchAvatar(42).then(function(result){
                this.token = result;
            });
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
        }
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
    }
</style>