// router.js
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  // Define your routes here
  {
    path: '/',
    component: Home, // Import and use the component for the home page
  },
  // Add more routes as needed
];

const router = new VueRouter({
  routes,
});

export default router;
