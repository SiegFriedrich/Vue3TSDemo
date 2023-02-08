<template>
    <div class="login-box">
        <div class="header-title">
            <h1>Sieg Login Page</h1>
        </div>
        <div class="middle-content">
            <el-form 
            :label-position="labelPosition" 
            label-width="120px" 
            style="max-width: 460px" 
            ref="ruleFormRef"
            :model="ruleForm" 
            :rules="rules" 
            class="demo-ruleForm" 
            status-icon>
                <el-form-item label="Name / Email" prop="name">
                    <el-input v-model="ruleForm.name" />
                </el-form-item>
                <el-form-item label="Password" prop="password">
                    <el-input v-model="ruleForm.password" @keyup.enter="submitForm(ruleFormRef)" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm(ruleFormRef)">
                        Enter
                    </el-button>
                    <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
                </el-form-item>
            </el-form>
        </div>
        </div>
</template>

<script lang="ts">
// import router from '@/router'
import { FormRules } from 'element-plus/es/tokens/form'
import { defineComponent } from 'vue'
import { reactive, ref } from 'vue'
import { LoginData } from '../type/login';
import type { FormInstance } from 'element-plus'
import login from '../request/api'

export default defineComponent({
    setup() {
        // const submitForm = (form: LoginData) => {
        //     if (form.name === 'lex' && form.password === '123456') {
        //         // router.push('/blog-main-page');
        //         console.log(router);
        //     }
        //     console.log(form);
        // }
        const ruleFormRef = ref<FormInstance>();
        const resetForm = (value: FormInstance | undefined) => { console.log(value) }
        // const resetForm = (formEl: FormInstance | undefined) => {
        //     if (!formEl) return
        //     formEl.resetFields()
        // }
        const labelPosition = ref('right')
        const ruleForm = reactive(new LoginData());
        // const ruleForm = ref({
        //     name: '',
        //     password: ''
        // });
        const rules = reactive<FormRules>({
            name: [
                { required: true, message: 'Please input Username', trigger: 'blur' },
                { min: 3, max: 40, message: 'Length should be 3 to 40', trigger: 'blur' },
            ],
            password: [
                { required: true, message: 'Please input Password', trigger: 'blur' },
                { min: 6, max: 15, message: 'Length should be 6 to 15', trigger: 'blur' },
            ],
        });
     
        const onLogin =async () => {
            try{
                console.log('Success!');
                const res = await login(ruleForm);
                console.log(`Print the res of axios is ${res}`);
            } catch (err) {
                console.log(`Error --- ${err}`)
            }
            
                    
        }

        const submitForm = (formEl: FormInstance | undefined) => {
            if (!formEl) return
            console.log(formEl);
            formEl.validate((valid) => {
                if (valid) {
                    console.log('submit!!!') 
                    console.log(ruleForm);
                    onLogin();
                } else {
                    console.log('error submit!')
                    return false
                }
            })
        }

        const options = Array.from({ length: 10000 }).map((_, idx) => ({
            value: `${idx + 1}`,
            label: `${idx + 1}`,
        }))
        return { labelPosition, ruleForm, submitForm, resetForm, rules, ruleFormRef,onLogin,options}
    }
})
</script>

<style lang="scss" scoped>
.login-box {
    width: 100%;
    height: 100%;
    padding-top: 15%;
    background-image: url('../assets/cc_bg.jpg');
    .header-title {
            margin-bottom: 20px;
            display: flex;
            justify-content: center;
        }
}
.middle-content {
    display: flex;
    justify-content: center;
    margin-right: 30%;
    margin-left: 30%;
    padding: 35px 35px 15px 35px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 25px;

    el-form-item {
        color: rgb(255, 255, 255);
    }
    
}
</style>