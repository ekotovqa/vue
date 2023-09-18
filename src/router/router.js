import {createRouter, createWebHistory} from "vue-router";
import Main from "@/pages/Main.vue";
import PostsPage from "@/pages/PostsPage.vue";
import About from "@/pages/About.vue";
import PostIdPage from "@/pages/PostIdPage.vue";
import LikesPage from "@/pages/LikesPage.vue";
import PostPageWithStore from "@/pages/PostPageWithStore.vue";
import StoreLikes from "@/pages/StoreLikes.vue";
import PostPageCompositionApi from "@/pages/PostPageCompositionApi.vue";

const routes= [
    {
        path: '/',
        component: Main
    },
    {
        path: '/posts',
        component: PostsPage
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/likes',
        component: LikesPage
    },
    {
        path: '/posts/:id',
        component: PostIdPage
    },
    {
        path: '/store',
        component: PostPageWithStore
    },
    {
        path: '/storeLikes',
        component: StoreLikes
    },
    {
        path: '/composition',
        component: PostPageCompositionApi
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;