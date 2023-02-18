<template>
  <el-form :inline="true" :model="selectDataRef.selectData" class="demo-form-inline">
    <el-form-item label="Title">
      <el-input v-model="selectDataRef.selectData.title" placeholder="example: wine" />
    </el-form-item>
    <el-form-item label="Info">
      <el-input v-model="selectDataRef.selectData.introduction" placeholder="example: apple" />
    </el-form-item>
    <el-form-item label="Company">
      <el-select v-model="selectDataRef.selectData.company" placeholder="example: sony">
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
  <div>
    <TableComponent :data="selectDataRef"></TableComponent>
</div>
</template>

<script lang="ts" setup>
import { onMounted, reactive } from 'vue'
import { getAllGoods } from '../request/api';
import TableComponent from '@/components/TableComponent.vue'
import { initData } from '../models/goods.model';

const selectDataRef = reactive(new initData());
const onGetAllGoods = async () => {
  const resp = await getAllGoods();
  selectDataRef.list = resp.data;
  console.log(resp.data)
}

onMounted(async () => {
  await onGetAllGoods();
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