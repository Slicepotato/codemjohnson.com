<template>
    <header>
        <div class="content-wrap">
            <h1 class="stat-title flex flex--justify-start flex--align-items-center">
                <img class="avatar" :src="token">
                <span>{{ user }}</span>
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
        // Fetch | My User Full Nane
        this.$http.get('wp/v2/users/1').then(response => {
            let userObj = response.data;
            this.user = userObj.name;
        }, error => { 
            alert(error) 
        });

        // Fetch | Media -- me-token
        this.$http.get('wp/v2/media/42').then(response => {
            this.token = response.data.source_url;   
        }, error => { 
            alert(error) 
        });
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