import Vue from 'vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter)



import PostDetail from './components/pages/PostDetail.vue'
import Contact from './components/pages/Contact.vue'



const router = new VueRouter({
    mode: 'history',
    linkExactActiveClass: 'active',
    routes: [

        { path: '/posts/:slug', component: PostDetail, name: 'post-detail' },
        { path: '/about', component: Contact },
    ],
})

export default router;