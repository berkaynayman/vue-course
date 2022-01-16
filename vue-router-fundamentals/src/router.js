import {createRouter, createWebHistory} from "vue-router"

const routes = [
    {
        name: "HomePage",
        path: "/",
        component : () => import("../views/Home.vue")
    },
    {
        name: "AboutPage",
        path: "/about",
        component : () => import("../views/About.vue")
    },
    {
        name: "DetailPage",
        path: "/detail/:id",
        component : () => import("../views/Details.vue")
    }    
];

const router = createRouter({
    routes,
    history: createWebHistory()
});

export default router;