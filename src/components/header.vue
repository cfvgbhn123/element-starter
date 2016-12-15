<template>
    <div class="navBar">
          <el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal" >
            <el-menu-item index="/aboutus" router="true" @click.native=_target_blank(aboutus)>关于我们</el-menu-item>
            
            <el-menu-item index="/download" router="true" @click.native=_target_blank(download)>游戏下载</el-menu-item>
            <el-menu-item index="/gameInfo" router="true" @click.native=_target_blank(gameInfo)>游戏攻略</el-menu-item>
            <el-menu-item index="/family" router="true" @click.native=_target_blank(family)>讨论区</el-menu-item>
            <el-menu-item index="/home" router="true" @click.native=_target_blank(home)>首页</el-menu-item>

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