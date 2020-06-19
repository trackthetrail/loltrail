import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/views/Dashboard'
import NewChampion from '@/views/NewChampion'
import ViewChampion from '@/views/ViewChampion'
import EditChampion from '@/views/EditChampion'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/new',
      name: 'new-champion',
      component: NewChampion
    },
    {
      path: '/edit/:champion_id',
      name: 'edit-champion',
      component: EditChampion
    },
    {
      path: '/:champion_id',
      name: 'view-champion',
      component: ViewChampion
    },


  ]
})
