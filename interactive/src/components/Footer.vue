<template>
    <footer>
        <div class="content-wrap flex flex--justify-between flex--align-items-start flex--column">
            <div id="signature">
				<h3>{{ getUser('wp_x5xwdr') }}</h3>
			</div>
			<div class="footerMeta flex flex--justify-between flex--align-items-start flex--column">
                <ul class="flex flex--justify-between flex--align-items-start flex--column">
                    <li><h3>{{ getMenuTitle(2) }}</h3></li>
                    {{getMenu(2)}}
                    <li v-for="item in getMenu(2)" :key="item">
                        <h3>
                            <a :href="item.url" :target="item.target">{{ item }}</a>
                        </h3>
                    </li>
                </ul>
				<ul class="flex flex--justify-between flex--align-items-start flex--column">
					<li><h3>{{ getMenuTitle(3) }}</h3></li>
					<li v-for="item in getMenu(3)" :key="item">
                        <h3>
                            <a :href="item.url" :target="item.target">{{ item.title }}</a>
                        </h3>
                    </li>
				</ul>
			</div>
        </div>
    </footer>
</template>

<script>    
export default {
    name: 'Footer',
    data () {     
        return {
            slug: this.$route.name.replace(/\s+/g, '-').toLowerCase(),
            menuTitles: [],
            menuItems: [],
            userData: []
        }
    },
    components: {
        
    },
    created: function() {
        this.$http.get('wp/v2/menu/').then(response => {
            for(let title in response.data){
                this.menuTitles.push(response.data[title]);
                this.getMenuItems(response.data[title].term_id);
                // console.log(this.menuItems);
            }        
        }, error => { 
            alert(error) 
        });

        this.$http.get('wp/v2/users/').then(response => {
            this.userData = response.data;
        }, error => { 
            alert(error) 
        });
    },
    mounted() {
        
    },
    computed: {
        currentRouteName() {
            return this.$route.name;
        },        
    },
    methods: {
        getMenuTitle(menuId) {
            let menuName = this.menuTitles.find(i => i.term_id === menuId);
            return menuName.name;
        },
        getUser(userId) {
            if(this.userData) {
                let targetUser = this.userData.find(user => user.slug == userId);
                return targetUser.name;
            }
        },
        getMenuItems(menuId) {
            let menuList = this.$http.get('wp/v2/menu/' + menuId ).then(response => {
                let menu = [];
                let menuIdTerm = {
                    'term_id': menuId
                }
                menu.push(menuIdTerm)
                menu.push(response.data);
                this.menuItems.push(menu);                   
            }, error => { 
                alert(error) 
            });
        },
        getMenu(menuId) {
            let menu = this.menuItems.filter(i => i[0].term_id == menuId);
            console.log(innerMenu)

            return this.menuItems.find(i => i.term_id === menuId);
        }
    }
}
</script>

<style lang="scss">
    @import '@/assets/scss/utility/_variables.scss';
    @import '@/assets/scss/utility/_mixins.scss';

    footer {
        background-color: $off-blk;
        position: absolute;
        bottom: 0;
        width: 100%;

        h3 {
            font-family: $roboto-slab;
            font-size: .6rem;
            font-weight: 400;
            color: $grey-4;
            text-transform: uppercase;
            padding: .5rem;
            letter-spacing: 1px;

            a {
                color: $grey-8;
                border-bottom: 1px solid $grey-4;
                text-decoration: none;
                transition: .15s;

                &:hover, &:focus {
                    border-bottom: 1px solid $grey-8;
                }
            }
        }

        .footerMeta {
            ul {
                &:first-of-type {
                    margin-right: 3rem;
                    padding-bottom: 1rem
                }
            }

            @include at-least($xs) {
                ul {
                    &:first-of-type {
                        padding: 0;
                    }
                }
            }
            @include at-least($sm) {
                @include flex-direction(row);

                ul {
                    @include flex-direction(row);
                }
            }
        }
    }
</style>