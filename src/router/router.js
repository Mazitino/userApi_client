import Main from "@/pages/Main"
import UserPage from "@/pages/UserPage"
import About from "@/pages/About"
import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/users',
        component: UserPage
    },
    {
        path: '/about',
        component: About
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;