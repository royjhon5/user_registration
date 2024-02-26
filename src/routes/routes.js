import { createRouter, createWebHistory } from "vue-router";

const routes = [
    { path: '/', redirect: '/register' },
    { path: '/register', component: () => import('@/components/RegistrationForm.vue') },
    { path: '/profile', component: () => import('@/components/UserProfile.vue') }
];


const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router