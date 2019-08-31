import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default  new Router({
  mode:'history',
  routes: [
  {
      path:'/home',
      redirect:'/home/shouye',
      component:()=>import('./views/home/home.vue'),
      children:[
        {
          path:'/home/shouye',
          name:'/home/shouye',
          component:()=>import('./views/home/shouye/shouye.vue')
        },
        {
          path:'/home/ranking',
          name:'/home/ranking',
          component:()=>import('./views/home/ranking/ranking.vue')
        },
        {
          path:'/home/classify',
          name:'/home/classify',
          component:()=>import('./views/home/classify/classify.vue')
        },
        {
          path:'/home/book',
          name:'/home/book',
          component:()=>import('./views/home/book/book.vue')
        }
      ]
  },
  {
    path:'/login',
    name:'/login',
    component:()=> import('./views/login/login.vue')
  },
  {
    path:'/details',
    name:'/details',
    component:()=>import('./views/details/details.vue')
  },
  {
    path:'*',
    redirect:'/home'
  }

  ]
})
