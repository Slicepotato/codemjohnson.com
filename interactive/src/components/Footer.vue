<template>
    <footer>
        <div class="content-wrap">
            <div id="signature">
				<h3>{{ user }}</h3>
			</div>
			<div class="footerMeta">
                <ul>
                    <li v-for="menu in stuffTitle" :key="menu"><h3>{{ menu.name }}</h3></li>
                    <li v-for="item in stuff" :key="item"><a :href="item.url" :target="item.target">{{ item.title }}</a></li>
                </ul>
				<ul>
					<li v-for="menu in contactTitle" :key="menu"><h3>{{ menu.name }}</h3></li>
					<li v-for="item in contact" :key="item"><a :href="item.url" :target="item.target">{{ item.title }}</a></li>
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