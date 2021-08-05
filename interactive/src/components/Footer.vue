<template>
    <footer>
        <div class="content-wrap flex flex--justify-between flex--align-items-start">
            <div id="signature">
				<h3>{{ user }}</h3>
			</div>
			<div class="footerMeta flex flex--justify-between flex--align-items-start flex--column">
                <ul class="flex flex--justify-start flex--align-items-start flex--column">
                    <li><h3>{{ menuStuff.name }}</h3></li>
                    <li v-for="(stuff, index) in menuStuff.menu" :key="index">
                        <h3>
                            <a :href="stuff.url" :target="stuff.target">{{ stuff.title }}</a>
                        </h3>
                    </li>
                </ul>
				<ul class="flex flex--justify-start flex--align-items-start flex--column">
					<li><h3>{{ menuContact.name }}</h3></li>
					<li v-for="(contact,index) in menuContact.menu" :key="index">
                        <h3>
                            <a :href="contact.url" :target="contact.target">{{ contact.title }}</a>
                        </h3>
                    </li>
				</ul>
			</div>
        </div>
    </footer>
</template>

<script>    
let user;

export default {
    name: 'Footer',
    data () {     
        return {
            slug: this.$route.name.replace(/\s+/g, '-').toLowerCase(),
            user,
            menuContact: [],
            menuStuff: [],
        }
    },
    components: {
        
    },
    created: function() {
        this.init();          
    },
    mounted() {
        
    },
    computed: {
        currentRouteName() {
            return this.$route.name;
        },        
    },
    methods: {
        init: function(){
            this.getStuffIDid(2).then(function(menu){
                this.getMenuTitles().then(function(title){
                    let menuName = title.find(i => i.term_id === 2);
                    this.menuStuff['name'] = menuName.name;
                });
                this.menuStuff['menu'] = menu;
            });
            this.getContactInfo(3).then(function(menu){
                this.getMenuTitles().then(function(title){
                    let menuName = title.find(i => i.term_id === 3);
                    this.menuContact['name'] = menuName.name;
                });
                this.menuContact['menu'] = menu;
            });
            this.sayMyName(1).then(function(result){
                this.user = result;
            });
        },
        getMenuTitles() {
            return this.$http.get('wp/v2/menu').then(response => {
                return response.data;       
            }, error => { 
                alert(error) 
            });
        },
        getStuffIDid(id){
            return this.$http.get('wp/v2/menu/' + id).then(response => {
                return response.data;       
            }, error => { 
                alert(error) 
            });
        },
        getContactInfo(id){
            return this.$http.get('wp/v2/menu/' + id).then(response => {
                return response.data;        
            }, error => { 
                alert(error) 
            }); 
        },
        sayMyName(uid){
            return this.$http.get('wp/v2/users/' + uid).then((response) => {
                return response.data.name;
            }, error => { 
                alert(error) 
            });
        },
    }
}
</script>

<style scoped lang="scss">
    @import '@/assets/scss/utility/_variables.scss';
    @import '@/assets/scss/utility/_mixins.scss';

    footer {
        width: 100%;
        background-color: $off-blk;

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

        .content-wrap {
            @include flex-direction(column);

            @include at-least($md) {
                @include flex-direction(row);
            }
        }

        .footerMeta {
            @include flex-wrap(wrap);

            ul {
                @include flex-wrap(wrap);

                &:first-of-type {
                    margin-right: 3rem;
                    padding-bottom: 1rem
                }
            }

            @include at-least($xs) {
                @include flex-direction(row);

                ul {
                    @include flex-direction(row);
                    &:first-of-type {
                        padding: 0;
                    }
                }
            }
        }
    }
</style>