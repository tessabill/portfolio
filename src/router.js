import { createRouter, createWebHashHistory } from 'vue-router';
import About from '@/views/About.vue';
import CV from '@/views/CV.vue';
import Projects from '@/views/Projects.vue';
import Suprise from '@/views/Suprise.vue';

const routes = [
  { path: '/', redirect: '/about' },
  { path: '/about', component: About },
  { path: '/cv', component: CV },
  { path: '/projects', component: Projects },
  { path: '/suprise', component: Suprise },
];

const router = createRouter({
  history: createWebHashHistory('/portfolio/'),
  routes,
});

export default router;
