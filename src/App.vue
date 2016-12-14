<template>
  <div>
    <h1>{{ msg }}</h1>
    <el-button @click.native="startHacking">Let's do it</el-button>
     <el-radio class="radio" v-model="radio" label="1">还好还好</el-radio>
  <el-radio class="radio" v-model="radio" label="2">无可奉告</el-radio>
    <hello></hello>
  </div>
</template>

<script>
    import hello from './components/hello.vue'
    export default {
        data() {
            return {
                msg: 'VUE 2.0 好不好哇',
                radio: '2'
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
            hello
        }
    }
</script>

<style lang="sass">
    @mixin transform($bc) {
        transform: $bc
    }
    
    body {
        font-family: Helvetica, sans-serif;
    }
</style>