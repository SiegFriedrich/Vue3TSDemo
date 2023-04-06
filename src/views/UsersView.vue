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
        <el-table :data="userSelectedList" stripe style="width: 100%">
          <el-table-column prop="id" label="ID" width="100" />
          <el-table-column prop="username" label="姓名" width="180" />
          <el-table-column prop="nickname" label="NICKNAME" width="180" />
          <el-table-column label="权限">
            <template #default="scope">
              <el-button v-for="item in scope.row.roles" :index="item.id" type="danger" :key="item.id"
                @click="editRole(item)">{{ item.rolename
                }}</el-button>
            </template>
          </el-table-column>
          <el-table-column label="EDIT">
            <template #default="scope">
              <el-button text @click="showActiveForm(scope)">
                Edit
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <UserTableComponent :data="userSelectedList"></UserTableComponent>
    </div>
    <div v-else>
      <EmptyTable :message="'Product'" />
    </div>


    <el-dialog v-model="isFormVisible" title="编辑信息">
      <el-form :model="activeForm">
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="activeForm.username" autocomplete="off" />
        </el-form-item>
        <el-form-item label="权限" :label-width="formLabelWidth">
          <!-- 注意    multiple一定要写在 el-select里 -->
          <el-select multiple v-model="activeForm.roles" placeholder="选择角色">
            <el-option v-for="item in roleList" :label="item.rolename" :value="item.id" :key="item.id" />
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="isFormVisible = false">Cancel</el-button>
          <el-button type="primary" @click="editActiveForm = false">
            Confirm
          </el-button>
        </span>
      </template>
    </el-dialog>

  </div>
</template>

<script lang="ts" setup>
import { initUserList, UserListInf, RoleInf, ActiveUser } from '@/models/user.model';
import EmptyTable from "@/components/EmptyTable.vue";
import { onMounted, reactive, ref, watch } from 'vue';
import { axiosUtil } from '@/util/axios.util';
import UserTableComponent from '@/components/UserTableComponent.vue';

// const store = useContractStore();
let userSelectedList: UserListInf[] = reactive([]);
let roleList: RoleInf[] = reactive([]);
const selectDataRef = reactive(new initUserList());
const isFormVisible = ref(false)
const formLabelWidth = '140px'
const activeForm: ActiveUser = reactive({
  userId: '',
  username: '',
  email: '',
  roles: []
})

const editRole = (role: any) => {
  console.log(`editRole --- ${role.ro}`);
}

const showActiveForm = (scope: any) => {
  console.log(`showActiveForm --- ${JSON.stringify(scope.row)}`);
  activeForm.userId = scope.row.id;
  activeForm.username = scope.row.username;
  activeForm.email = scope.row.email;
  // 注意  这里的roles保存的是 number数组 row.roles是object数组，要取出object里的id 所以用map返回每一个id
  activeForm.roles = scope.row.roles.map((el) => el.id);
  console.log(activeForm.roles);
  console.log(`editActiveForm --- ${scope.row}`);
  isFormVisible.value = true;

}

const editActiveForm = ref(false);

const getRoleList = async () => {
  const resp = await axiosUtil.get<any>('/role/all');
  console.log(`resp---${JSON.stringify(resp.data.value)}`);
  roleList = resp.data.value;
}

const getUserAllList = async () => {
  const resp = await axiosUtil.get<any>('/user/all');
  selectDataRef.userDataList = resp.data.value;
  userSelectedList = resp.data.value;
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
    if (selectDataRef.selectData.roleId) {
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
  userSelectedList = resultData;
  console.log(`selectDataRef.userDataList-------${JSON.stringify(selectDataRef.userDataList)}`);
};

const onDiscard = () => {
  selectDataRef.selectData.username = '';
  selectDataRef.selectData.roleId = 0;
  getUserAllList();
}

//如果 两个输入框有值更改 就自动重新刷新数据  ---> 再按查询按钮
//监听属性的例子 
watch([() => selectDataRef.selectData.username, () => selectDataRef.selectData.roleId], () => {
  if (selectDataRef.selectData.username == '' || selectDataRef.selectData.roleId == 0) {
    getUserAllList();
  }
});



</script>

<style lang="scss" scoped>
.button {
  background-color: #545c64;
  color: rgb(254, 209, 95);
}

.el-button--text {
  margin-right: 15px;
}

.el-select {
  width: 300px;
}

.el-input {
  width: 300px;
}

.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>