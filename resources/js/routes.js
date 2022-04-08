import Vue from 'vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter)


import Home from './components/pages/Home.vue'
import PostDetail from './components/pages/PostDatail.vue'
import Contact from './components/pages/Contact.vue'



const router = new VueRouter({
    mode: 'history',
    linkExactActiveClass: 'active',
    routes: [
        { path: '/', component: Home },
        { path: '/posts/:slug', component: PostDatail, name: 'post-detail' },
        { path: '/about', component: Contact },
    ],
})

export default router;