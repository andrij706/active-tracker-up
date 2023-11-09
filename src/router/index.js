import { createRouter, createWebHistory } from 'vue-router';
import store from '../store/index.js';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Create from '../views/Create.vue';
import ViewWorkout from '../views/ViewWorkout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      meta: {
        title: 'Home',
        auth: false
      }
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
      meta: {
        title: 'Create',
        auth: false
      }
    },
    {
      path: "/register",
      name: "Register",
      component: Register,
      meta: {
        title: 'Register',
        auth: false
      }
    },
    {
      path: "/create",
      name: "Create",
      component: Create,
      meta: {
        title: 'Create',
        auth: true
      }
    },
    {
      path: "/view-workout/:workoutId",
      name: "View-Workout",
      component: ViewWorkout,
      meta: {
        title: 'View Workout',
        auth: false
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Active Tracker`
  next()
})

router.beforeEach((to, from, next) => {
  const user = store.state.user
  if (to.matched.some((res) => res.meta.auth)) {
    if (user) {
      next()
      return
    }
    next({name: 'Login'})
    return
  }
  next()
})

export default router
