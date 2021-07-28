<template>
    <div class="container">
        <h1 class="text-center">
            {{ post.title }}
        </h1>
        <article v-html="post.content">
        </article>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    computed: {
        post() {
            return {
                title: 'test post',
                slug: 'test-post',
                content: '<p>this is a test post</p>',
                excerpt: '<p>this is a test post</p>'
            }
        }
    }
})
</script>