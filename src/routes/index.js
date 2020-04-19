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
import ChoiceLunch1 from '@/views/choice/Members'
import ChoiceLunch2 from '@/views/choice/Restaurants'
import ChoiceLunchLoading from '@/views/choice/Loading'
import ChoiceLunchResult from '@/views/choice/Result'
import Restaurant from '@/views/restaurant/add/Restaurant'
import Search from '@/views/restaurant/add/Search'
import Preview from '@/views/restaurant/add/Preview'
import Pick from '@/views/restaurant/add/Pick'
import FamMembers from '@/views/member/FamMembers'
import FamRestaurants from '@/views/restaurant/FamRestaurants'
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
      redirect: '/restaurant/search',
      name: 'Restaurant',
      component: Restaurant,
      children: [
        {
          path: 'search',
          name: 'search',
          component: Search
        },
        {
          path: 'preview',
          name: 'preview',
          component: Preview
        },
        {
          path: 'pick',
          name: 'pick',
          component: Pick
        }
      ]
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

  ]
})
