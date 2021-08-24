import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Quicksack from "@/views/Quicksack.vue";
import Episode from "@/components/quicksack/Episode.vue";
import LightDots from "@/views/LiteBrite.vue";
import Sammy from "@/views/Sammy.vue";
import NotFound from '@/views/NotFound.vue';

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
  {
    path: "/light-dots",
    name: "LightDots",
    component: LightDots,
  },
  {
    path: "/ice-cream-sammitch",
    name: "ice-cream-sammitch",
    component: Sammy,
  },
  {
    path: '*',
    name: 'Not Found',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
