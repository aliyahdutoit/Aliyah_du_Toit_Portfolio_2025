import { createRouter, createWebHistory } from 'vue-router'
// We will create these components in the next step
import HomeView from '../views/HomeView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import AboutView from '@/views/AboutView.vue'
import EducationView from '@/views/EducationView.vue'
import ContactView from '@/views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },    
    { path: '/about', name: 'about', component: AboutView },
    { path: '/education', name: 'education', component: EducationView },
    { path: '/projects', name: 'projects', component: ProjectsView },
    { path: '/contact', name: 'contact', component: ContactView }
    ]
})

export default router