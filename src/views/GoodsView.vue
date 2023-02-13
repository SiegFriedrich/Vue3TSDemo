<template>
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="Title">
      <el-input v-model="formInline.user" placeholder="example: wine" />
    </el-form-item>
    <el-form-item label="Info">
      <el-input v-model="formInline.user" placeholder="example: apple" />
    </el-form-item>
    <el-form-item label="Company">
      <el-select v-model="formInline.region" placeholder="example: sony">
        <el-option label="Apple" value="1" />
        <el-option label="Azure" value="2" />
        <el-option label="AWS" value="3" />
        <el-option label="ChatGPT" value="4" />
        <el-option label="Sony" value="5" />
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="" class="button" @click="onSubmit">Query</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const formInline = reactive({
  user: '',
  region: '',
})

const onSubmit = () => {
  console.log('submit!')
}
</script>

<style lang="scss" scoped>
.button {
  background-color: #545c64;
  color: rgb(254, 209, 95);
}
</style>