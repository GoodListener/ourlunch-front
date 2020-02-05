import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/login/Login'
import Join from '@/views/member/join/Join'
import JoinFam from '@/views/member/join/JoinFam'
import JoinComplete from '@/views/member/join/JoinComplete'
import StartFamily from '@/views/start/StartFamily'
import StartComplete from '@/views/start/StartComplete'
import Main from '@/views/Main'
import ChoiceLunch1 from '@/views/choice/Members'
import ChoiceLunch2 from '@/views/choice/Restaurants'
import ChoiceLunchLoading from '@/views/choice/Loading'
import ChoiceLunchResult from '@/views/choice/Result'
import Restaurant from '@/views/restaurant/add/Restaurant'
import FamMembers from '@/views/member/FamMembers'
import FamRestaurants from '@/views/restaurant/FamRestaurants'
import Lotto from '@/components/Lotto'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/join/:familyName',
      name: 'Join',
      component: Join
    },
    {
      path: '/joinFam/:familyName',
      name: 'JoinFam',
      component: JoinFam
    },
    {
      path: '/joinComplete/:familyName',
      name: 'JoinComplete',
      component: JoinComplete
    },
    {
      path: '/startFamily',
      name: 'StartFamily',
      component: StartFamily
    },
    {
      path: '/startComplete',
      name: 'StartComplete',
      component: StartComplete
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    },
    {
      path: '/choiceLunch1',
      name: 'ChoiceLunch1',
      component: ChoiceLunch1
    },
    {
      path: '/choiceLunch2',
      name: 'ChoiceLunch2',
      component: ChoiceLunch2
    },
    {
      path: '/choiceLunchLoading',
      name: 'ChoiceLunchLoading',
      component: ChoiceLunchLoading
    },
    {
      path: '/choiceLunchResult/:result',
      name: 'ChoiceLunchResult',
      component: ChoiceLunchResult
    },
    {
      path: '/restaurant',
      name: 'Restaurant',
      component: Restaurant
    },
    {
      path: '/famMembers',
      name: 'FamMembers',
      component: FamMembers
    },
    {
      path: '/famRestaurants',
      name: 'FamRestaurants',
      component: FamRestaurants
    },
    {
      path: '/lotto',
      name: 'Lotto',
      component: Lotto
    }
  ]
})
