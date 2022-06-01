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
      // 柱状图
      {
        path: 'barchart/base',
        component: () => import('../views/barChart/baseBarChart.vue')
      },
      {
        path: 'barchart/package',
        component: () => import('../views/barChart/secondPackage.vue')
      },
      // 折线图
      {
        path: 'linechart/base',
        component: () => import('../views/lineChart/baseLineChart.vue')
      },
      {
        path: 'linechart/package',
        component: () => import('../views/lineChart/secondPackage.vue')
      },
      // 饼图
      {
        path: 'piechart/base',
        component: () => import('../views/pieChart/basePieChart.vue')
      },
      {
        path: 'piechart/package',
        component: () => import('../views/pieChart/secondPackage.vue')
      },
      // 散点图
      {
        path: 'scatterchart/base',
        component: () => import('../views/scatterChart/baseScatterChart.vue')
      },
      {
        path: 'scatterchart/package',
        component: () => import('../views/scatterChart/secondPackage.vue')
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
