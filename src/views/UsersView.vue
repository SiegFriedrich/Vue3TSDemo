<template>
  <div>
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

    <div v-if="selectDataRef.userDataList.length > 0">
      <UserTableComponent :data="selectDataRef"></UserTableComponent>
    </div>
    <div v-else>
      <EmptyTable :message="'Product'" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { initUserList, UserListInf } from '@/models/user.model';
import UserTableComponent from "@/components/UserTableComponent.vue";
import EmptyTable from "@/components/EmptyTable.vue";
import { onMounted, reactive, ref } from 'vue';
import { useContractStore } from '@/store/contract.store';
import { axiosUtil } from '@/util/axios.util';
const store = useContractStore();

const selectDataRef = reactive(new initUserList());
const dataList = reactive(selectDataRef.userDataList);
const getUserAllList = async () => {
  const resp = await axiosUtil.get<any>('/user/all');
  selectDataRef.userDataList = resp.data.value;
  console.log(`selectDataRef.userDataList-------${JSON.stringify(selectDataRef.userDataList)}`)
}

onMounted(async () => {
  await getUserAllList();
});



const onSubmit = () => { console.log(1) };
const onDiscard = () => { console.log(1) };
</script>

<style lang="scss" scoped>
.button {
  background-color: #545c64;
  color: rgb(254, 209, 95);
}
</style>