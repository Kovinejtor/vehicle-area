import Vue from 'vue';
import Router from 'vue-router';
import LandingPage from '@/views/LandingPage.vue';
import MainPage from '@/views/MainPage.vue';
import SignUp from '@/views/SignUp.vue';

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
      path: '/create',
      name: 'create',
      component: MainPage
    }
  ]
});
