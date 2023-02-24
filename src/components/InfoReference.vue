<template>
    <el-row>
        <el-col :span="8">
            <el-card class="el-card-box" shadow="hover">
                <div class="f-box">
                    <ContractInfo :contractInfoId="infoId" icon policyNo contractRange salesAgencyCode companyInfo />
                    <div style="padding: 14px">
                        <span>Yummy hamburger</span>
                        <div class="bottom">
                            <time class="time">{{ currentDate }}</time>
                            <el-button text class="button">Operating</el-button>
                        </div>
                    </div>
                </div>
            </el-card>
        </el-col>
    </el-row>
</template>
  
<script lang="ts" setup>
import { ref } from 'vue'
import ContractInfo from './ContractInfo.vue';
/**
 *  父子组件数据传递时， 不用ref or reactive
 * 只有页面呈现数据时，才会用响应式的ref reactive
 */
const infoId = '100001';

const currentDate = ref(new Date())
</script>
  
<style lang="scss" scoped>
.time {
    font-size: 12px;
    color: #999;
}

.f-box {
    display: flex;
}

.el-card-box {
    width: 1200px;
    margin-bottom: 40px;
}

.bottom {
    margin-top: 13px;
    line-height: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.button {
    padding: 0;
    min-height: auto;
}

.image {
    width: 400px;
    display: block;
}
</style>
  