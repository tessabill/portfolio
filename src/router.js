import { createRouter, createWebHashHistory } from 'vue-router';
import About from '@/views/About.vue';
import CV from '@/views/CV.vue';
import Projects from '@/views/Projects.vue';
import Suprise from '@/views/Suprise.vue';
import NotFound from '@/views/NotFound.vue';

const routes = [
  { path: '/', redirect: '/about' },
  { path: '/about', component: About },
  { path: '/cv', component: CV },
  { path: '/projects', component: Projects },
  { path: '/suprise', component: Suprise },
  {
    path: '/:catchAll(.*)',  // Fängt alle nicht definierten Routen ab
    name: 'NotFound',
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHashHistory('/portfolio/'),
  routes,
});

export default router;
