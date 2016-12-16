<template>
  
    <div class="contentMain">
          <div id="dataAll">
            <div class="data-left">
                 <router-link to="/home/all">数据总览</router-link>
            </div>
            <div class="data-right">
                <el-breadcrumb separator="">
  <el-breadcrumb-item :to="{ path: '/home' }">首页<i class='el-icon-caret-right'></i></el-breadcrumb-item>
  
  <el-breadcrumb-item>活动管理<i class='el-icon-caret-right'></i></el-breadcrumb-item>
  <el-breadcrumb-item>活动列表<i class='el-icon-caret-right'></i></el-breadcrumb-item>
  <el-breadcrumb-item>{{gameName}}</el-breadcrumb-item>
</el-breadcrumb>
           
            </div>
        </div>
        <div id="menuAll">
            <div class="leftmenu">
                <el-menu default-active="2" class="el-menu-vertical-demo" v-bind:router="true" @open="handleOpen" @close="handleClose">
<el-submenu index="1">
    <template slot="title"><i class="el-icon-message"></i>导航一</template>
<el-menu-item index="选项1">选项1</el-menu-item>
<el-menu-item index="选项2">选项2</el-menu-item>
<el-menu-item index="选项3">选项3</el-menu-item>
</el-submenu>
<el-submenu index="2">
    <template slot="title"><i class="el-icon-view"></i>导航二</template>
    <el-menu-item index="选项4">选项4</el-menu-item>
    <el-menu-item index="选项5">选项5</el-menu-item>
    <el-menu-item index="选项6">选项6</el-menu-item>
</el-submenu>
<el-submenu index="3">
    <template slot="title"><i class="el-icon-document"></i>导航三</template>
    <el-menu-item index="选项7">选项7</el-menu-item>
    <el-menu-item index="选项8">选项8</el-menu-item>
    <el-menu-item index="选项9">选项9</el-menu-item>
</el-submenu>
<el-submenu index="4">
    <template slot="title"><i class="el-icon-upload2"></i>导航四</template>
    <el-menu-item index="选项10">选项10</el-menu-item>
    <el-menu-item index="选项11">选项11</el-menu-item>
    <el-menu-item index="选项12">选项12</el-menu-item>
</el-submenu>
</el-menu>
</div>
<div class="rightcontent">
    <router-view></router-view>
</div>
</div>


</div>
</template>

<script>
    export default {
        mounted() {
            if (window.localStorage.getItem("anfanToken")) {

            } else {
                location.reload();
            }


            this.$on("chooseGame", function(game) {
                this.gameName = game;
                console.log(this.gameName);
            })
            console.log(this.gameName);

        },
        data() {
            return {
                gameName: "所有游戏"
            }
        },
        methods: {
            handleNodeClick(data) {
                console.log(data);
            },
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