<template>
  <div id="app">
    <transition  enter-active-class="animated bounceOutRight" leave-active-class="animated bounceOutRight">
        <router-view ></router-view>
    </transition> 
        <router-view name='homedex'  ></router-view>
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

        },
        components: {
            hello,
            stable,
            kakaka

        },
        mounted() {

        }
    }
</script>

<style lang="sass">
    @import "./sass/app.scss";
</style>