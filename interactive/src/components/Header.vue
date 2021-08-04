<template>
    <header>
        <div class="content-wrap">
            <h1 class="stat-title flex flex--justify-start flex--align-items-center">
                <img class="avatar" :src="token">
                <span>{{  }}</span>
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
            this.sayMyName(1).then(function(result){
                this.user = result;
            });
            this.fetchAvatar(42).then(function(result){
                this.token = result;
            });
        },
        sayMyName(uid){
            return this.$http.get('wp/v2/users/' + uid).then((response) => {
                return response.data.name;
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
        }
    }
</style>