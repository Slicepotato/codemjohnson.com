import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
//import Quicksack from "@/views/Quicksack.vue";
import Episode from "@/components/quicksack/Episode.vue";
// import LightDots from "@/views/LiteBrite.vue";
// import Sammy from "@/views/Sammy.vue";
//import ColorPop from "@/views/ColorPop.vue";
import CodeExamples from "@/views/CodeExamples.vue";
import NotFound from '@/views/NotFound.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/code-examples',
    name: 'CodeExamples',
    component: CodeExamples,
    children: [
      {
        path: "/quicksack",
        name: "Quicksack",
      },
      {
        path: "/quicksack/:episodeId",  // <-- notice the colon
        name: "Details",
        component: Episode,
      },
      {
        path: "/light-dots",
        name: "LightDots",
      },
      {
        path: "/ice-cream-sammitch",
        name: "IceCreamSammitch",
      },
      {
        path: "/color-pop",
        name: "ColorPop",
      }
    ]
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
