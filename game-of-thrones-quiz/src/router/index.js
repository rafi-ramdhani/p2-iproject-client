import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    component: () => import("../views/GameBoard.vue"),
    children: [
      {
        path: "",
        component: () => import("../components/Collections.vue")
      },
      {
        path: "store",
        component: () => import("../components/Store.vue")
      }
    ]
  },
  {
    path: "/login",
    component: () => import("../views/LoginRegisterPage.vue"),
    children: [
      {
        path: "",
        component: () => import("../components/LoginForm.vue")
      }
    ]
  },
  {
    path: "/register",
    component: () => import("../views/LoginRegisterPage.vue"),
    children: [
      {
        path: "",
        component: () => import("../components/RegisterForm.vue")
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === "/" && !localStorage.access_token) {
    next("/login")
  } else {
    next()
  }

  if (to.path === "/login" && localStorage.access_token) {
    next("/")
  } else {
    next()
  }

  if (to.path === "/register" && localStorage.access_token) {
    next("/")
  } else {
    next()
  }
})

export default router
