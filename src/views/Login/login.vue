<template>
    <el-container id="login_page">
        <h2>Please Login</h2>
        <el-form :model="formInline" class="login_form" ref="logForm">
            <el-form-item label="userName" label-width="110px">
                <el-input v-model="formInline.userName" placeholder="Please enter your account number here"></el-input>
            </el-form-item>
            <el-form-item label="passwod" label-width="110px">
                <el-input v-model="formInline.password" type="password" autocomplete="off" placeholder="Please enter your password here" ></el-input>
            </el-form-item>
            <el-form-item>
                <el-button @click="logPlatform">Login</el-button>
            </el-form-item>
        </el-form>
    </el-container>
</template>

<script>
export default {
    name: "login.vue",
    data() {
        return {
            formInline: {
                userName: "",
                password: "",
            }
        }
    },
    methods: {
        logPlatform() {
            this.$refs[logForm].validate((valid) => {
                if (valid) {
                    
                }
            })
        }
    }
}
</script>

<style scoped>
    #login_page {
        flex-direction: column;
    }
</style>