import Vue from 'vue'
import $ from './lib/jquery-1.9.0.min.js'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(VueResource)


new Vue({
    el: '#app',
    render: h => h(App)
})