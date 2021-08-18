import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Quicksack from "@/views/Quicksack.vue";
import Episode from "@/components/quicksack/Episode.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: "/quicksack",
    name: "Quicksack",
    component: Quicksack,
  },
  {
    path: "/quicksack/:episodeId",  // <-- notice the colon
    name: "Details",
    component: Episode,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
