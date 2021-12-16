import {createWebHistory, createRouter} from 'vue-router'

const routes = [{path: "/", redirect: '/home'},]
const router = createRouter({
    routes,
    history: createWebHistory()
})
export default router;