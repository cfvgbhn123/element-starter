<template>
  <div  v-loading="loading2"
    element-loading-text="正在退出" class="outLoading">
      
  </div>
</template>

<script>
    export default {

        mounted() {
            // var timer;
            window.localStorage.removeItem("anfanToken");
            // if (!(window.localStorage.getItem("anfanToken"))) {
            //     clearInterval(timer);
            // }
            setTimeout(function() {
                window.location.reload();
            }, 1000)
        },
        data() {
            return {

                loading2: true
            };
        }
    };
</script>
<style scoped lang="sass">
    @import "../sass/out.scss";
</style>