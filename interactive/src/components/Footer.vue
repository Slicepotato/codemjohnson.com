<template>
    <footer>
        <div class="content-wrap flex flex--justify-between flex--align-items-start flex--column">
            <div id="signature">
				<h3>{{ userData.name }}</h3>
			</div>
			<div class="footerMeta flex flex--justify-between flex--align-items-start flex--column">
                <ul class="flex flex--justify-between flex--align-items-start flex--column">
                    <li><h3>{{ menuTitles[1].name }}</h3></li>
                    <li v-for="item in menuStuff" :key="item">
                        <h3>
                            <a :href="item.url" :target="item.target">{{ item.title }}</a>
                        </h3>
                    </li>
                </ul>
				<ul class="flex flex--justify-between flex--align-items-start flex--column">
					<li><h3>{{ menuTitles[0].name }}</h3></li>
					<li v-for="item in menuContact" :key="item">
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
            userData: [],
            menuTitles: [],
            menuContact: [],
            menuStuff: [],
        }
    },
    components: {
        
    },
    created: function() {
        // Fetch | Menu Collection
        this.$http.get('wp/v2/menu/').then(response => {
            for(let title in response.data){
                this.menuTitles.push(response.data[title]);
            }        
        }, error => { 
            alert(error) 
        });

        // Fetch | Stuff I did Menu
        this.$http.get('wp/v2/menu/2').then(response => {
            for(let stuff in response.data){
                this.menuStuff.push(response.data[stuff]);
            }        
        }, error => { 
            alert(error) 
        });

        // Fetch | Contact Menu
        this.$http.get('wp/v2/menu/3').then(response => {
            for(let contact in response.data){
                this.menuContact.push(response.data[contact]);
            }        
        }, error => { 
            alert(error) 
        });

        // Fetch | User => Me
        this.$http.get('wp/v2/users/1').then(response => {
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