<template>
    <div class="login-box">
        <div>
            <h1>Login Page</h1>
        </div>
        <div class="middle-content">
            <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign" style="max-width: 460px">
                <el-form-item label="Name / Email">
                    <el-input v-model="formLabelAlign.name" />
                </el-form-item>
                <el-form-item label="Password">
                    <el-input v-model="formLabelAlign.region" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm(ruleFormRef)">
                        Create
                    </el-button>
                </el-form-item>
            </el-form>
        </div>
        </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { reactive, ref } from 'vue'

export default defineComponent({
    setup() {
        const submitForm = (form: string) => {
            console.log(form);
        }
        const ruleFormRef = ref('');
        const labelPosition = ref('right')

        const formLabelAlign = reactive({
            name: '',
            region: '',
            type: '',
        })

        return { labelPosition, formLabelAlign, submitForm, ruleFormRef }
    }
})
</script>

<style lang="scss" scoped>
.login-box {
    width: 100%;
    height: 100%;
    background-image: url('../assets/cc_bg.jpg');
}
.middle-content {
    display: flex;
    justify-content: center;
    margin-right: 30%;
    margin-left: 30%;
    padding: 35px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 25px;

    el-form-item {
        color: rgb(255, 255, 255);
    }
    
}
</style>