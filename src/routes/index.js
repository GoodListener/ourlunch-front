import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/Login'
import FamilyContainer from '@/views/family/Container'
import FamilyStartContainer from '@/views/family/start/Container'
import FamilyStartStep01 from '@/views/family/start/step/Step01'
import FamilyStartStep02 from '@/views/family/start/step/Step02'
import FamilyStartComplete from '@/views/family/start/step/Complete'
import FamilyJoinContainer from '@/views/family/join/Container'
import FamilyJoinStep01 from '@/views/family/join/step/Step01'
import FamilyJoinStep02 from '@/views/family/join/step/Step02'
import FamilyJoinComplete from '@/views/family/join/step/Complete'
import Main from '@/views/Main'
import RestaurantContainer from '@/views/restaurant/Container'
import RestaurantList from '@/views/restaurant/List'
import RestaurantAddContainer from '@/views/restaurant/add/Container'
import RestaurantAddStep01 from '@/views/restaurant/add/step/Step01'
import RestaurantAddStep02 from '@/views/restaurant/add/step/Step02'
import RestaurantAddStep03 from '@/views/restaurant/add/step/Step03'
import ChoiceLunch1 from '@/views/choice/Members'
import ChoiceLunch2 from '@/views/choice/Restaurants'
import ChoiceLunchLoading from '@/views/choice/Loading'
import ChoiceLunchResult from '@/views/choice/Result'
import FamMembers from '@/views/member/FamMembers'
import DevLoginProxy from '@/dev/LoginProxy'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/dev/login',
      component: DevLoginProxy
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    },
    {
      path: '/family',
      component: FamilyContainer,
      children: [
        {
          path: 'start',
          component: FamilyStartContainer,
          children: [
            {
              path: '1',
              name: 'FamilyStartStep01',
              component: FamilyStartStep01
            },
            {
              path: '2',
              name: 'FamilyStartStep02',
              component: FamilyStartStep02
            },
            {
              path: 'complete',
              name: 'FamilyStartComplete',
              component: FamilyStartComplete
            }
          ]
        },
        {
          path: 'join',
          component: FamilyJoinContainer,
          children: [
            {
              path: '1',
              name: 'FamilyJoinStep01',
              component: FamilyJoinStep01
            },
            {
              path: '2',
              name: 'FamilyJoinStep02',
              component: FamilyJoinStep02
            },
            {
              path: 'complete',
              name: 'FamilyJoinComplete',
              component: FamilyJoinComplete
            }
          ]
        }
      ]
    },
    {
      path: '/restaurant',
      component: RestaurantContainer,
      children: [
        {
          path: 'list',
          name: 'RestaurantList',
          component: RestaurantList
        },
        {
          path: 'add',
          component: RestaurantAddContainer,
          children: [
            {
              path: '1',
              name: 'RestaurantAddStep01',
              component: RestaurantAddStep01
            },
            {
              path: '2',
              name: 'RestaurantAddStep02',
              component: RestaurantAddStep02
            },
            {
              path: '3',
              name: 'RestaurantAddStep03',
              component: RestaurantAddStep03
            }
          ]
        }
      ]
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
      path: '/famMembers',
      name: 'FamMembers',
      component: FamMembers
    }
  ]
})
