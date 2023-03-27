<template>
    <div class="center-title">
        <span>SKILLS FIELD</span>
    </div>
    <div class="main-box">
        <div v-for="ellist in mainList" class="section-box">
            <el-row :gutter="12" class="card-row">
                <el-col class="card" v-for="item in ellist" :span="4">
                    <el-card shadow="always"> {{ item }} </el-card>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
  

<script setup lang="ts">
//Todo
/**
 * Todo
    1)如何调整 这个卡片的布局？
    2)Category 需要整理一下

    # 户外运动品牌
    # Raised by wolves 商品Shopping spaceX
    # Oil painting Introduction

    #AWS 各个知识点梳理


    ### array find的用法
*/



const listAWS = ['AWS Developer', 'AWS Architect', 'Networking From Top to Bottom'];
const listReactVue = ['Axios', 'Pinia', 'react', 'Next.js', 'Nuxt.js', 'MyBlog Demo', 'Formal Demo Financial ESG Project',]
const listFlutter = ['Vue', 'React', 'React Native', 'Flutter', 'Fitness Management App Flutter'];
const listPython = ['Python', 'AI Machine Learning', 'Deep Learning', 'Flask', 'Django', 'Django Rest Framework',];
const listJava = ['Spring', 'Spring Boot', 'Spring Boot3']
const listUIUX = ['Figma', 'SCSS'];
const listOther = ['zsh', 'D3js', 'Selenium', 'Shopping Platform', 'JWT',];
const mainList = [listAWS, listReactVue, listFlutter, listPython, listJava, listUIUX, listOther];

</script>

<style lang="scss" scoped>
.center-title {
    span {
        font-size: 30px;
        font-weight: bolder;
    }

    margin: 20px;
    box-shadow: 5px 5px 5px 3px #BDC3C7;
    height: 5vw;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
}

.main-box {
    margin: 20px;
}

.section-box {
    padding: 20px 20px 0 20px;
    box-shadow: 5px 5px 5px 3px #BDC3C7;
    border-radius: 20px;
    margin-bottom: 20px;
}

.card {
    margin-bottom: 20px;
    margin: 1vm !important;
}
</style>