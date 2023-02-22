<template>
    <el-row>
        <el-col :span="8">
            <el-card class="el-card-box" shadow="hover">
                <div class="f-box">
                    <ContractInfo :infoId="infoId" icon policyNo contractRange salesAgencyCode companyInfo />
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
const infoId = ref('12345');

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
  