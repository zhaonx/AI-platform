import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Group from '../views/Group.vue'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/group',
        name: 'Group',
        component: Group
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router