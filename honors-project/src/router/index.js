import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SignUp from '../views/SignUp.vue'
import LogIn from '../views/LogIn.vue'
import ResumeUpload from '../views/ResumeUpload.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/logIn",
    name: "LogIn",
    component: LogIn,
  },
  {
    path: "/resumeUpload",
    name: "ResumeUpload",
    component: ResumeUpload,
  },
]

const router = new VueRouter({
  routes
})

export default router
