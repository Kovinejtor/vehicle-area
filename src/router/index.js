import Vue from 'vue';
import Router from 'vue-router';
import LandingPage from '@/views/LandingPage.vue';
import MainPage from '@/views/MainPage.vue';
import SignUp from '@/views/SignUp.vue';
import Buy from '@/views/Buy.vue';
import Sell from '@/views/Sell.vue';
import MyAccount from '@/views/MyAccount.vue';
import Rent from '@/views/Rent.vue';
import AllCategories from '@/views/AllCategories.vue';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: LandingPage
    },
    {
      path: '/main-page',
      name: 'main-page',
      component: MainPage
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    },
    {
      path: '/buy',
      name: 'buy',
      component: Buy
    },
    {
      path: '/sell',
      name: 'sell',
      component: Sell
    },
    {
      path: '/my-account',
      name: 'my-account',
      component: MyAccount
    },
    {
      path: '/rent',
      name: 'rent',
      component: Rent
    },
    {
      path: '/all-categories',
      name: 'all-categories',
      component: AllCategories
    }
  ]
});

