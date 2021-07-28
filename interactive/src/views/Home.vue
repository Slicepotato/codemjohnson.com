<template>
  <div class="home">
    <div class="container">
      <div>
        <h1 class="text-center">Michael Johnson</h1>
        <div class="container">
          <div class="row">
            <PostCard v-for="post in posts" :key="post.slug" :post="post" />
            <div>
              <div v-if="pageInfo.hasNextPage">
                <router-link :to="{ query: { after: pageInfo.enCursor } }">
                  <span>Next Page</span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { PostsState } from '~/store/posts'

const pageCount = 5

export default Vue.extend({
  computed: {
    posts() {
      return (this.$store.state.posts as PostsState).nodes
    },
    pageInfo() {
      return (this.$store.state.posts as PostsState).pageInfo
    },
  },
  watch: {
    async $route() {
      await this.$nuxt.refresh()
      window.scrollTo(0, 0)
    },
  },
  async asyncData({ store, query }) {
    await store.dispatch('posts/getPosts', {
      after: query.after,
      before: query.before,
      first: query.before ? undefined : pageCount,
      last: query.before ? pageCount : undefined,
    })
  },
})
</script>
