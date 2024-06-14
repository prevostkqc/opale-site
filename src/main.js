import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import './assets/main.scss';
import { createHead } from '@vueuse/head';

const routes = [
  { path: '/', component: Home }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App);

const head = createHead();

app.use(router);
app.use(head);
app.mount('#app');