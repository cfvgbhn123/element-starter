<template>
  <div>
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <el-button @click.native="startHacking">Let's do it</el-button>
    <hello></hello>
  </div>
</template>

<script>
    import hello from './components/hello.vue'
    export default {
        data() {
            return {
                msg: 'Use Vue 2.0 Today!'
            }
        },

        methods: {
            startHacking() {
                this.$notify({
                    title: 'It Works',
                    message: 'We have laid the groundwork for you. Now it\'s your time to build something epic!',
                    duration: 6000
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