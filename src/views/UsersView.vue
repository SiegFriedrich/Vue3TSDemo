<template>
  <div>
    <el-form :inline="true" :model="selectDataRef.selectData" class="demo-form-inline">
      <el-form-item label="Username">
        <el-input v-model="selectDataRef.selectData.username" placeholder="example: wine" />
      </el-form-item>

      <el-form-item label="Authoriy">
        <el-select v-model="selectDataRef.selectData.roleId" placeholder="example: sony">
          <el-option label="全部" :value="0" />
          <el-option v-for="item in roleList" :label="item.rolename" :value="item.id" :key="item.id" />

        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="" class="button" @click="onSubmit">Query</el-button>
        <el-button type="" class="button" @click="onDiscard">Discard</el-button>
      </el-form-item>
    </el-form>

    <div v-if="selectDataRef.userDataList.length > 0">
      <div>
        <el-table :data="selectDataRef.userDataList" stripe style="width: 100%">
          <el-table-column prop="id" label="ID" width="100" />
          <el-table-column prop="username" label="姓名" width="180" />
          <el-table-column prop="nickname" label="NICKNAME" width="180" />
          <el-table-column label="权限">
            <template #default="scope">
              <el-button v-for="item in scope.row.roles" :index="item.id" type="danger" size="small">{{ item.rolename
              }}</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div v-else>
      <EmptyTable :message="'Product'" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { initUserList, UserListInf, RoleInf } from '@/models/user.model';
import EmptyTable from "@/components/EmptyTable.vue";
import { onMounted, reactive, ref } from 'vue';
// import { useContractStore } from '@/store/contract.store';
import { axiosUtil } from '@/util/axios.util';

// const store = useContractStore();

let roleList: RoleInf[] = [];
const getRoleList = async () => {
  const resp = await axiosUtil.get<any>('/role/all');
  console.log(`resp---${JSON.stringify(resp.data.value)}`);
  roleList = resp.data.value;
}

const selectDataRef = reactive(new initUserList());
const getUserAllList = async () => {
  const resp = await axiosUtil.get<any>('/user/all');
  selectDataRef.userDataList = resp.data.value;
  console.log(`selectDataRef.userDataList-------${JSON.stringify(selectDataRef.userDataList)}`)
}

onMounted(async () => {
  await getUserAllList();
  await getRoleList();
});

const onSubmit = () => {
  console.log(`selectDataRef.selectData.roleId--111--${selectDataRef.selectData.roleId}`);

  let resultData: UserListInf[] = [];
  console.log(JSON.stringify(selectDataRef.selectData))
  if (selectDataRef.selectData.username || selectDataRef.selectData.roleId) {
    if (selectDataRef.selectData.username) {
      console.log(2);
      resultData = selectDataRef.userDataList.filter((el) => {
        return (el.username.indexOf(selectDataRef.selectData.username) !== -1)
      });
      console.log(`resultData---${resultData}`);
    }

    if (selectDataRef.selectData.roleId != 1) {
      console.log(`selectDataRef.selectData.roleId--2222--${selectDataRef.selectData.roleId}`);

      resultData = (selectDataRef.selectData.username ? resultData : selectDataRef.userDataList).filter((value) => {

        console.log(`value.roles----${JSON.stringify(value.roles)}`);
        return value.roles.find((el) => el.id === selectDataRef.selectData.roleId)
      });

      console.log(`resultData---${resultData}`);
    }

  } else {
    resultData = selectDataRef.userDataList;
  }
  selectDataRef.userDataList = resultData;
  console.log(`selectDataRef.userDataList-------${JSON.stringify(selectDataRef.userDataList)}`);
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