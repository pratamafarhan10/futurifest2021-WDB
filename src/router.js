import { createRouter, createWebHistory } from "vue-router";
import Home from './pages/Home.vue';
import EqualityDemand from './pages/EqualityDemand/EqualityDemand.vue';
import CreateEqualityDemand from './pages/EqualityDemand/CreateEqualityDemand.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/equality-demand',
            name: 'equality demand',
            component: EqualityDemand
        },
        {
            path: '/equality-demand/create',
            name: 'create equality demand',
            component: CreateEqualityDemand
        }
    ],
    linkActiveClass: 'active',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }

        return {
            top: 0,
            left: 0
        }
    }
});

export default router;