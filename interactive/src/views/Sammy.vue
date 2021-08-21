<template>
    <div class="sammy content-wrap">
        <div class="page-content" v-for="(item, c) in page" :key="c">
            <h1 class="stat-title">{{ item.title.rendered }}</h1>
            <div v-html="item.content.rendered"></div>
            <h3 class="stat-title stat-title--sm stat-title--divider">{{ item.acf.code[0].block_name }}</h3>
            <code-highlight class="code-block" language="javascript">
                {{ item.acf.code[0].block }}
            </code-highlight>
            <h2 class="stat-title stat-title--divider">{{ item.acf.example_panel_label }}</h2>
            <IceCream />
            <ul class="tech-stack flex flex--justify-end flex--align-items-center">
            <li v-for="(tech, t) in item.acf.technologies" :key="t" > 
                <fa :icon="['fab',tech.tech_list]" />
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import IceCream from '@/components/sammy/IceCream.vue';
import CodeHighlight from "vue-code-highlight/src/CodeHighlight.vue";
import 'vue-code-highlight/themes/prism-twilight.css';

export default {
    name: 'IceCreamSammy',
    components: {
        IceCream,
        CodeHighlight
    },
    data() {
        return {
            slug: this.$route.name.replace(/\s+/g, '-').toLowerCase(),
            page: [],
        }
    },
    created: function() {
        this.init();
    },
    methods: {
        init: function(){
            this.getContentBlock(this.slug);
        },
        getAdditionalBlock(header){
            for(let content in this.page){
                let block = this.page[content].acf.additional_content_blocks.find(b => b.header === header);
                return block.content;
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