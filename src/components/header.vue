<template>
    <div class="navBar">
          <el-menu theme="dark" default-active="1" :router="true" class="el-menu-demo" mode="horizontal" >
              <div id="anfanLogo">

              </div>
            <el-submenu index="/home">
                
                <template slot="title">系统</template>
<el-menu-item index="/myInfo">我的信息</el-menu-item>
<el-menu-item index="/out">退出登陆</el-menu-item>
</el-submenu>
<el-menu-item index="/aboutus">晨晨</el-menu-item>
<el-submenu index="#" id="gameList">

    <template slot="title">游戏列表</template>
    <el-menu-item :index=game v-for="game in gameList">{{game}}</el-menu-item>
</el-submenu>
</el-menu>

</div>
</template>
<script>
    export default {
        data() {
            return {
                msg: 'VUE 2.0 测试项目',
                gameList: [
                    "九阴真经",
                    "星际争霸",
                    "炉石传说",
                    "上古卷轴",
                    "盟军敢死队",
                    "红色警戒",
                    "仙剑奇侠",
                    "轩辕剑",
                    "金庸群侠传",
                    "剑侠情缘",
                    "帝国时代"
                ]

            }
        },

        methods: {
            rush() {
                this.$confirm("确定退出登录吗,并跳转到登录前页面?", "提示", {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    setTimeout(function() {
                        location.href = location.href.split("#")[0]
                    }, 1000)
                    this.$message({
                        type: "success",
                        message: "即将退出",
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: "已取消操作"
                    })
                })
            }
        }
    }
</script>
<style scoped lang="sass">
    @import "../sass/header.scss";
</style>