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
        <el-option label="Apple" value="Apple" />
        <el-option label="Azure" value="Azure" />
        <el-option label="AWS" value="AWS" />
        <el-option label="ChatGPT" value="ChatGPT" />
        <el-option label="Sony" value="Sony" />
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="" class="button" @click="onSubmit">Query</el-button>
      <el-button type="" class="button" @click="onDiscard">Discard</el-button>
    </el-form-item>
  </el-form>
  <div>
    <TableComponent :data="selectDataRef"></TableComponent>
</div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, watch } from 'vue'
import { getAllGoods } from '../request/api';
import TableComponent from '@/components/TableComponent.vue'
import { initData, GoodsList } from '../models/goods.model';

const selectDataRef = reactive(new initData());
let resultData: GoodsList[] = [];
let initDataList: GoodsList[] = [];
const onGetAllGoods = async () => {
  const resp = await getAllGoods();
  initDataList = resp.data;
  selectDataRef.list = resp.data;
  console.log(resp.data)
}
const onDiscard = () => {
  selectDataRef.selectData.title = '';
  selectDataRef.selectData.company = '';
  onGetAllGoods();
}
onMounted(async () => {
  await onGetAllGoods();
})

//If i wanna delete query words, it could be refresh by itself
watch([() => selectDataRef.selectData.title, () => selectDataRef.selectData.company], () => {
  if (selectDataRef.selectData.title == '' && selectDataRef.selectData.company == '') {
    onGetAllGoods();
  }
});

const onSubmit = () => {
  //Before Submit we shall clear the data queried before
  // onGetAllGoods();
  resultData = [];
  selectDataRef.list = initDataList;
  console.log(selectDataRef.list)
  if (selectDataRef.selectData.title || selectDataRef.selectData.company) {
    if (selectDataRef.selectData.title) {
      resultData = selectDataRef.list.filter((el) => {
        return (el.title.indexOf(selectDataRef.selectData.title) !== -1)
      });
      console.log(resultData);
    }
    console.log(resultData);
    resultData.length == 0 ? resultData = selectDataRef.list : resultData;
    console.log(resultData);
    if (selectDataRef.selectData.company) {
      resultData = resultData.filter((el) => {
        console.log(selectDataRef.selectData.company);
        return (el.company.indexOf(selectDataRef.selectData.company) !== -1);
      });
      console.log(resultData);
    }
  } else {
    resultData = selectDataRef.list;
  }
  selectDataRef.list = resultData;
  console.log(selectDataRef.list);
  console.log('submit!')
}


</script>

<style lang="scss" scoped>
.button {
  background-color: #545c64;
  color: rgb(254, 209, 95);
}
</style>