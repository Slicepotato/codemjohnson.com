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

<script>
import Vue from 'vue'
import PostCard from '@/components/PostCard.vue'

export default Vue.extend({
  components: { PostCard },
  computed: {
    posts() {
      return [
        {
          title: 'test post',
          slug: 'test-post',
          content: '<p>this is a test post</p>',
          excerpt: '<p>this is a test post</p>'
        },
      ]
    },
    pageInfo() {
      return {
        endCursor: '',
        hasNextPage: false,
        hasPreviousPage: false,
        startCursor: '',
      }
    }
  }
})
</script>
