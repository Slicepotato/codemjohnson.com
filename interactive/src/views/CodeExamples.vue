<template>
    <div class="content-wrap" :class="slug">
        <div class="page-content" v-for="(item, c) in page" :key="c">
            <h1 class="stat-title">{{ item.title.rendered }}</h1>
            <div v-html="item.content.rendered"></div>

            <template v-if="item.acf.code">
                <h3 class="stat-title stat-title--sm stat-title--divider">{{ item.acf.code[0].block_name }}</h3>
                <code-highlight class="code-block" :language="item.acf.code[0].block_lang">
                    {{ item.acf.code[0].block }}
                </code-highlight>
            </template>

            <p class="content">{{ getAdditionalBlock('reflection') }}</p>
            <h2 class="stat-title stat-title--divider">{{ item.acf.example_panel_label }}</h2>

            <component :is="getComponent" />
            
            <ul class="tech-stack flex flex--justify-end flex--align-items-center">
            <li v-for="(tech, t) in item.acf.technologies" :key="t" > 
                <fa :icon="['fab',tech.tech_list]" />
                </li>
            </ul>
        </div>
    </div>    
</template>

<script>
import CodeHighlight from "vue-code-highlight/src/CodeHighlight.vue";
import 'vue-code-highlight/themes/prism-twilight.css';

export default {
    name: 'CodeExamples',
    components: {
        CodeHighlight
    },
    data() {
        return {
            slug: this.$route.path.replace(/\s+/g, '-').replace(/\//g, '').toLowerCase(),
            page: [],
        }
    },
    created: function() {
        this.init();
    },
    computed: {
        getComponent() {
            // console.log(this.$route.name)
            return () => import(`@/components/code-examples/${this.$route.name}.vue`);
        }
    },
    methods: {
        init: function(){
            this.getContentBlock(this.slug);
        },
        getAdditionalBlock(header){
            for(let content in this.page){
                if(this.page[content].acf.additional_content_blocks){
                    let block = this.page[content].acf.additional_content_blocks.find(b => b.header === header);
                    return block.content;
                }
            }
        },
        getContentBlock(slug) {
            // Fetch | Page Data            
            this.$http.get('wp/v2/code_example?slug=' + slug).then(response => {
                for(let item in response.data){
                this.page.push(response.data[item]);
                }
            }, error => { 
                alert(error) 
            });
        },
    }
}
</script>

<style lang="scss" scoped>

</style>