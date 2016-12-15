<template>
  <div id="app">

    
        <el-row>
            <el-col :span="24">
               
                <div class="grid-content bg-purple-dark">
                    <kakaka></kakaka>

                    
                </div>
            </el-col>
        </el-row>
        <el-row>
             <el-col :span="4">
                        
                </el-col>
        </el-row>
    <hello></hello>
    
  </div>
</template>

<script>
    import hello from './components/hello.vue'
    import stable from './components/superTable.vue'
    import kakaka from './components/menu.vue'


    export default {
        data() {
            return {
                msg: 'VUE 2.0 测试项目'

            }
        },

        methods: {
            startHacking() {
                this.$notify({
                    title: '续一秒',
                    message: 'We have laid the groundwork for you. Now it\'s your time to build something +1S!',
                    duration: 1000
                })
            },
            houwa() {
                this.$message({
                    type: 'success',
                    message: '-1S'
                })
            }
        },
        components: {
            hello,
            stable,
            kakaka

        }
    }
</script>

<style lang="sass">
    @mixin transform($bc) {
        transform: $bc
    }
    
    body {
        font-family: Helvetica, sans-serif;
        .el-row {
            &:last-child {
                margin-bottom: 0;
            }
        }
        .el-col {
            border-radius: 4px;
        }
        .bg-purple-dark {
            background: #99a9bf;
        }
        .bg-purple {
            background: #d3dce6;
        }
        .bg-purple-light {
            background: #e5e9f2;
        }
        .grid-content {
            border-radius: 4px;
            min-height: 50px;
        }
        .row-bg {
            padding: 10px 0;
            background-color: #f9fafc;
        }
    }
</style>