import Vue from 'vue'
import Router from 'vue-router'
import SlotTest from '@/view/SlotTest'
import App from '@/App'
import Sudoku from '@/view/Sudoku'

import index from '@/view/Application.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/slot',
      name: 'SlotTest',
      component: SlotTest
    },
    {
      path: '/app',
      name: 'App',
      component: App
    },
    {
      path: '/sudoku',
      name: 'sudoku',
      component: Sudoku
    }
  ]
})
