import { createRouter, createWebHistory } from "vue-router";
import Home from './pages/Home.vue';
import EqualityDemand from './pages/equalitydemand/EqualityDemand.vue';
import CreateEqualityDemand from './pages/equalitydemand/CreateEqualityDemand.vue';
import JobsIndex from './pages/jobsforwomen/JobsIndex.vue';
import CreateJobs from './pages/jobsforwomen/CreateJobs.vue';

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
        },
        {
            path: '/jobs-for-women',
            name: 'jobs index',
            component: JobsIndex
        },
        {
            path: '/jobs-for-women/create',
            name: 'post jobs',
            component: CreateJobs
        },
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