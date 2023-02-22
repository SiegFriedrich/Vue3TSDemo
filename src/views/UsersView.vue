import { reactive } from 'vue';
import { UserListInf } from '../models/user.model';
<template>
  <el-form :inline="true" :model="selectDataRef.selectData" class="demo-form-inline">
    <el-form-item label="Username">
      <el-input v-model="selectDataRef.selectData.username" placeholder="example: wine" />
    </el-form-item>
    <el-form-item label="Email">
      <el-input v-model="selectDataRef.selectData.email" placeholder="example: apple" />
    </el-form-item>
    <el-form-item label="Authoriy">
      <el-select v-model="selectDataRef.selectData.role" placeholder="example: sony">
        <el-option label="---" value="" />
        <el-option label="Admin" value="1" />
        <el-option label="semiAdmin" value="2" />
        <el-option label="Manager" value="3" />
        <el-option label="Salesman" value="4" />
        <el-option label="Customer" value="5" />
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="" class="button" @click="onSubmit">Query</el-button>
      <el-button type="" class="button" @click="onDiscard">Discard</el-button>
    </el-form-item>
  </el-form>
<UserTableComponent :data="userList"></UserTableComponent>
</template>

<script lang="ts" setup>
import { InitUserList, UserListInf } from '@/models/user.model';
import { reactive } from 'vue';

const selectDataRef = reactive(new InitUserList());
const onSubmit = () => { console.log(1) };
const onDiscard = () => { console.log(1) };
const userList: UserListInf[] = [];
</script>

<style lang="scss" scoped>
.button {
  background-color: #545c64;
  color: rgb(254, 209, 95);
}
</style>