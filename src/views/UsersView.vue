<template>
  <div>
    <el-form :inline="true" :model="selectDataRef.selectData" class="demo-form-inline">
      <el-form-item label="Username">
        <el-input v-model="selectDataRef.selectData.username" placeholder="example: wine" />
      </el-form-item>

      <el-form-item label="Authoriy">
        <el-select v-model="selectDataRef.selectData.roleId" placeholder="example: sony">
          <el-option label="全部" value="" />
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

let resultData: UserListInf[] = [];
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




const onSubmit = () => {
  console.log(1)
  resultData = [];
  // selectDataRef.userDataList = resultData;

  if (selectDataRef.selectData.username || selectDataRef.selectData.roleId) {
    if (selectDataRef.selectData.username) {
      console.log(2);
      resultData = selectDataRef.userDataList.filter((el) => {
        return (el.username.indexOf(selectDataRef.selectData.username) !== -1)
      });
      console.log(`resultData---${resultData}`);


      if (selectDataRef.selectData.roleId) {
        return resultData.filter((value) => { value.roles.find((el) => el.roleId === selectDataRef.selectData.roleId) });
      }
    }
    // resultData.length == 0 ? resultData = selectDataRef.userDataList : resultData;

  } else {
    resultData = selectDataRef.userDataList;
  }
  selectDataRef.userDataList = resultData;
};
const onDiscard = () => {
  selectDataRef.selectData.username = '';
  selectDataRef.selectData.roleId = 0;
  getUserAllList();
}
</script>

<style lang="scss" scoped>
.button {
  background-color: #545c64;
  color: rgb(254, 209, 95);
}
</style>