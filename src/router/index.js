import { createRouter, createWebHashHistory } from 'vue-router'
import Main from '../components/Main.vue'
export const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: Main
        },
        {
            name: 'preview',
            path: '/preview/:id',
            component: () => import('../components/Preview.vue')
        }
    ]
})