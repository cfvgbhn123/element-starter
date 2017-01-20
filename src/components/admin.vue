<template>
    <div class="wrap" >
        <div id="logo"></div>
        <div id="loginbox">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm"  class="demo-ruleForm" >
            <br>

                <el-form-item  prop="userName">
                    <el-input v-model="ruleForm.userName" placeholder="请输入用户名" @keydown.27.native=handleReset @keydown.13.native="handleSubmit($event)">
                        <template slot="prepend">用户名</template>
</el-input>
</el-form-item>
<el-form-item prop="pass">
    <el-input v-model="ruleForm.pass" type="password" placeholder="请输入密码" @keydown.13.native="handleSubmit($event)" @keydown.27.native=handleReset>
        <template slot="prepend">密　码</template>
    </el-input>
</el-form-item>

<el-form-item prop="type">
    <el-checkbox-group v-model="ruleForm.type">
        <el-checkbox label="下次登陆记住我" name="type"></el-checkbox>
    </el-checkbox-group>
</el-form-item>


<el-form-item label-width="120px">
    <el-button type="success" @click="handleSubmit">登陆</el-button>
    <el-button @click="handleReset" type="warning">重置</el-button>
</el-form-item>
</el-form>
</div>
</div>
</template>
<style scoped lang="sass">
    @import "../sass/admin.scss";
</style>
<script>
    export default {
        mounted() {
            console.log("login");
            // this.$emit('check');
            if (window.localStorage.getItem("anfanToken")) {
                // router.push("/home")
                router.push('/home');

            }

        },
        data() {
            return {
                ruleForm: {
                    pass: '',
                    userName: '',
                    type: true,
                    resource: '',
                    desc: ''
                },
                rules: {
                    pass: [{
                        required: true,
                        message: '请输入密码',
                        trigger: 'blur'
                    }],
                    userName: [{
                        required: true,
                        message: '请输入用户名',
                        trigger: 'blur'
                    }]
                }
            };
        },
        methods: {
            handleReset() {
                this.$refs.ruleForm.resetFields();

            },
            handleSubmit(ev) {

                this.$refs.ruleForm.validate((valid) => {
                    if (valid) {
                        window.localStorage.setItem("anfanToken", this.ruleForm.userName + "?" + this.ruleForm.pass);
                        router.push("/home");
                    } else {
                        event.preventDefault();
                        this.$alert('用户名或密码未输入', '出错了', {
                            cancelButtonText: '确定',
                            type: 'error'

                        });

                        return false;
                    }
                });
            }
        }
    }
</script>