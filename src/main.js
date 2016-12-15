import Vue from 'vue'
import $ from './lib/jquery-1.9.0.min.js'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import HEADER from './components/header.vue'
import HOME from './components/HOME.vue'
import RIGHTCONTENT from './components/RIGHTCONTENT.vue'
import superTable from './components/superTable.vue'
import email from './components/email.vue'

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(VueResource)




//路由
const routes = [{
        path: '/home',
        components: {
            default: HEADER,
            homedex: HOME

        },
        children: [{
                // 当 /user/:id/profile 匹配成功，
                // UserProfile 会被渲染在 User 的 <router-view> 中
                path: 'back1',
                component: RIGHTCONTENT
            },
            {
                // 当 /user/:id/posts 匹配成功
                // UserPosts 会被渲染在 User 的 <router-view> 中
                path: 'back2',
                component: superTable
            },
            {
                // 当 /user/:id/posts 匹配成功
                // UserPosts 会被渲染在 User 的 <router-view> 中
                path: 'password',
                component: superTable
            },
            {
                // 当 /user/:id/posts 匹配成功
                // UserPosts 会被渲染在 User 的 <router-view> 中
                path: 'email',
                component: email
            }
        ]
    },

    { path: '/', component: HEADER }

]
const router = new VueRouter({
    routes
})

new Vue({
    router,
    el: '#app',
    render: h => h(App)
})