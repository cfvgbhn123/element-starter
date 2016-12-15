<template>
    <div class="contentMain">
        <div class="leftmenu">
            <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" v-bind:router="true">
                <el-submenu index="1">
                    <template slot="title"><i class="el-icon-message"></i>个人信息</template>
<el-menu-item-group>
    <template slot="title">安全</template>
    <el-menu-item index="/home/password">修改密码</el-menu-item>
    <el-menu-item index="/home/email">修改邮箱</el-menu-item>
</el-menu-item-group>
<el-menu-item-group title="退出">
    <el-menu-item index="" @click.native="rush">退出登录</el-menu-item>
</el-menu-item-group>
</el-submenu>
<el-menu-item index="/home/back1"><i class="el-icon-menu"></i>备选方案</el-menu-item>
<el-menu-item index="/home/back2"><i class="el-icon-setting"></i>备选方案</el-menu-item>
</el-menu>
</div>
<div class="rightcontent">
    <router-view></router-view>

</div>
</div>
</template>
<script>
    export default {
        data() {
            return {
                msg: "aaaaaa"
            }
        },
        methods: {
            handleOpen() {
                console.log("open")
            },
            handleClose() {
                console.log("close")
            },
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
<style lang=sass scoped>
    @import "../sass/home.scss";
</style>