import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Join from '@/views/member/join/Join'
import JoinFam from '@/views/member/join/JoinFam'
import JoinComplete from '@/views/member/join/JoinComplete'
import StartFamily from '@/views/start/StartFamily'
import MyInfo from '@/views/start/MyInfo'
import FamilyInfo from '@/views/start/FamilyInfo'
import StartComplete from '@/views/start/StartComplete'
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
      redirect: '/startFamily/myInfo',
      name: 'StartFamily',
      component: StartFamily,
      children: [
        {
          path: 'myInfo',
          name: 'myInfo',
          component: MyInfo
        },
        {
          path: 'familyInfo',
          name: 'familyInfo',
          component: FamilyInfo
        }
      ]
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
    }
  ]
})
