<template>
  
    <div class="contentMain">
          <div id="dataAll">
            <div class="data-left">
                数据总览
            </div>
            <div class="data-right">
                <el-breadcrumb separator="">
  <el-breadcrumb-item :to="{ path: '/home' }">首页<i class='el-icon-caret-right'></i></el-breadcrumb-item>
  
  <el-breadcrumb-item>活动管理<i class='el-icon-caret-right'></i></el-breadcrumb-item>
  <el-breadcrumb-item>活动列表<i class='el-icon-caret-right'></i></el-breadcrumb-item>
  <el-breadcrumb-item>活动详情</el-breadcrumb-item>
</el-breadcrumb>
            </div>
        </div>
        <div id="menuAll">
            <div class="leftmenu">
                <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
        </div>
</div>

<div class="rightcontent">
    <router-view></router-view>
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
        },
        date() {
            return data[{
                label: '一级 1',
                children: [{
                    label: '二级 1-1'
                }]
            }, {
                label: '一级 2',
                children: [{
                    label: '二级 2-1'
                }, {
                    label: '二级 2-2'
                }]
            }, {
                label: '一级 3',
                children: [{
                    label: '二级 3-1'
                }, {
                    label: '二级 3-2'
                }]
            }]
        },
        defaultProps: {
            children: 'children',
            label: 'label'
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