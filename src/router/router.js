import Main from "@/pages/Main"
import PostPage from "@/pages/PostPage"
import UserPage from "@/pages/UserPage"
import About from "@/pages/About"
import PostItemPage from "@/pages/PostItemPage"
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
        path: '/posts',
        component: PostPage
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/posts/:id',
        component: PostItemPage
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;