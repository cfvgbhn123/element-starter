<template>
    <div class="navBar">
          <el-menu theme="dark" default-active="1" v-bind:router="true" class="el-menu-demo" mode="horizontal" >
            <el-menu-item index="/aboutus" >关于我们</el-menu-item>
            
            <el-menu-item index="/download"  >游戏下载</el-menu-item>
            <el-menu-item index="/gameInfo" >游戏攻略</el-menu-item>
            <el-menu-item index="/family" >讨论区</el-menu-item>
            <el-menu-item index="/home"  >首页</el-menu-item>

        </el-menu>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                msg: 'VUE 2.0 测试项目',
                aboutus: "aboutus",
                download: "download",
                home: "home",
                family: "family",
                gameInfo: "aboutus",

            }
        },

        methods: {
            _target_blank(target) {

                window.location.href = window.location.href.split("#")[0] + "#/" + target
            }
        }
    }
</script>