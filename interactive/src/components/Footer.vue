<template>
    <footer>
        <div class="content-wrap flex flex--justify-between flex--align-items-start flex--column">
            <div id="signature">
				<h3>{{ user }}</h3>
			</div>
			<div class="footerMeta flex flex--justify-between flex--align-items-start flex--column">
                <ul class="flex flex--justify-between flex--align-items-start flex--column">
                    <li v-for="menu in stuffTitle" :key="menu"><h3>{{ menu.name }}</h3></li>
                    <li v-for="item in stuff" :key="item">
                        <h3>
                            <a :href="item.url" :target="item.target">{{ item.title }}</a>
                        </h3>
                    </li>
                </ul>
				<ul class="flex flex--justify-between flex--align-items-start flex--column">
					<li v-for="menu in contactTitle" :key="menu"><h3>{{ menu.name }}</h3></li>
					<li v-for="item in contact" :key="item">
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
        let user;
        
        return {
            slug: this.$route.name.replace(/\s+/g, '-').toLowerCase(),
            stuff: [],
            contact: [],
            menuTitle: [],
            user
        }
    },
    components: {
        
    },
    created: function() {
        this.$http.get('wp/v2/menu/').then(response => {
            for(let item in response.data){
                this.menuTitle.push(response.data[item]);
            }
            console.log(response);
        }, error => { 
            alert(error) 
        });

        this.$http.get('wp/v2/menu/2').then(response => {
            for(let item in response.data){
                this.stuff.push(response.data[item]);
            }
            // console.log(response);
        }, error => { 
            alert(error) 
        });

        this.$http.get('wp/v2/menu/3').then(response => {
            for(let item in response.data){
                this.contact.push(response.data[item]);
            }
            // console.log(response);
        }, error => { 
            alert(error) 
        });

        this.$http.get('wp/v2/users/1').then(response => {
            let userObj = response.data;
            this.user = userObj.name;
            // console.log(userObj);
        }, error => { 
            alert(error) 
        });
    },
    computed: {
        currentRouteName() {
            return this.$route.name;
        },
        stuffTitle: function () {
            return this.menuTitle.filter(i => i.term_id === 2)
        },
        contactTitle: function () {
            return this.menuTitle.filter(i => i.term_id === 3)
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