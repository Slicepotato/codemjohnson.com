import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import QuickSack from "@/views/QuickSack.vue";
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
      },
      {
        path: "/color-bars",
        name: "ColorBars"
      },
      {
        path: "/canvas-dots",
        name: "CanvasDots"
      },
      {
        path: "/lcars-ui",
        name: "LCARS"
      },
    ]
  },
  {
    path: "/quicksack",
    name: "Quicksack",
    component: QuickSack,
    children: [
      {
        path: "/quicksack/:episodeId",  // <-- notice the colon
        name: "Details",
      },
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
