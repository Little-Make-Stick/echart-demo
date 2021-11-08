import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: 'barchart/base',
    children:[
      {
        path: 'barchart/base',
        component: () => import('../views/barChart/baseBarChart.vue')
      },
      {
        path: 'linechart/base',
        component: () => import('../views/lineChart/baseLineChart.vue')
      },
      {
        path: 'piechart/base',
        component: () => import('../views/pieChart/basePieChart.vue')
      },
      {
        path: 'scatterchart/base',
        component: () => import('../views/scatterChart/baseScatterChart.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
