<template>
    <article>
        <div class="card">
            <div class="card-body">
                <h5 class="card-tite">
                    <router-link :to="{ name: 'slug', params: { slug: post.slug } }">
                        {{ post.title }}
                    </router-link>
                </h5>
                <div class="card-text" v-html="post.excerpt"></div>
            </div>
        </div>
    </article>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    props: ['post'],
})
</script>

