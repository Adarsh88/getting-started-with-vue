import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Error from '../views/Error.vue'
import Jobs from '../views/Jobs/Jobs.vue'
import JobsDetails from '../views/Jobs/JobDetails.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
   {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs
  },
  {
    path: '/jobs/:id',
    name: 'JobDetails',
    component: JobsDetails,
    props:true
  },
  // redirect
  {
    path:'/all-jobs',
    redirect:'/jobs'
  },
  // catch error 404
  {
    path: '/:catchAll(.*)',
    name: 'Error',
    component: Error
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
