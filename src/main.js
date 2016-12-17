import Vue from 'vue'
import $ from './lib/jquery.min.js'
import 'animate.css/animate.min.css';
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import Header from './components/header.vue'
import Home from './components/home.vue'
import Rightcontent from './components/rightcontent.vue'
import Out from './components/out.vue'
import Welcom from './components/welcom.vue'
import Admin from './components/admin.vue'
import NewPlayer from './components/newplayer.vue'
import JumpPlayer from './components/jumpplayer.vue'
import AlivePlayer from './components/aliveplayer.vue'
import PayPoint from './components/paypoint.vue'
import RemovePlayer from './components/removeplayer.vue'
import HowToPlay from './components/howtoplay.vue'
import OnlineExp from './components/onlineexp.vue'
import RmbPlayer from './components/rmbplayer.vue'
import LevelInfo from './components/levelinfo.vue'
import LevelPlace from './components/levelplace.vue'
import PlayerLevel from './components/playerlevel.vue'
import VituralMoney from './components/vituralmoney.vue'
import LikeBuy from './components/likebuy.vue'
import VituralPoint from './components/vituralpoint.vue'
import GetMoney from './components/getmoney.vue'
import PayData from './components/paydata.vue'
import PlayerToMoney from './components/playertomoney.vue'
import PayWay from './components/payway.vue'



Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(VueResource)

//手动VUEX
Event = new Vue();

//路由
const routes = [{
        path: '/home',
        components: {
            default: Header,
            homedex: Home

        },
        children: [{
            path: 'all',
            component: Rightcontent
        }, {
            path: '',
            component: Welcom
        }, {
            path: '*',
            component: Welcom
        }]
    },
    {
        path: '/out',
        components: {
            default: Out

        }
    },
    { path: '/', component: Admin },
    {
        path: '*',
        components: {
            default: Header,
            homedex: Home

        }
    },


]
router = new VueRouter({
        routes
    })
    // router.beforeEach(('', from, next) => {
    //     // ...
    // })
new Vue({
    router,
    el: '#app',
    render: h => h(App),
    mounted() {
        console.log(11111)
        this.$on('check', function() {
            checkLogin()
        })
    }
})

function checkLogin() {
    if (window.localStorage.getItem("anfanToken")) {
        router.push("/home")
    } else {
        router.push("/")
    }
}
setTimeout(checkLogin(), 0);