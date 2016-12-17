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
            component: Rightcontent//所有数据
        }, {
            path: '',
            component: Welcom//欢迎界面
        }, {
            path: '*',
            component: NewPlayer//新玩家
        }, {
            path: '*',
            component: JumpPlayer//活跃玩家
        }, {
            path: '*',
            component: AlivePlayer//
        }, {
            path: '*',
            component: PayPoint//付费转化
        }, {
            path: '*',
            component: RemovePlayer//玩家流失
        }, {
            path: '*',
            component: HowToPlay//设备相关
        }, {
            path: '*',
            component: OnlineExp//在线分析
        }, {
            path: '*',
            component: RmbPlayer//大R玩家
        }, {
            path: '*',
            component: LevelInfo//等级详解
        }, {
            path: '*',
            component: LevelPlace//等级分布
        }, {
            path: '*',
            component: PlayerLevel//新玩家进度
        }, {
            path: '*',
            component: VituralMoney//虚拟货币
        }, {
            path: '*',
            component: LikeBuy//消费偏好
        }, {
            path: '*',
            component: VituralPoint//消费点
        }, {
            path: '*',
            component: GetMoney//收入数据
        }, {
            path: '*',
            component: PayData//付费渗透
        }, {
            path: '*',
            component: PlayerToMoney//新玩家价值
        },{
            path: '*',
            component: PayWay//付费习惯
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