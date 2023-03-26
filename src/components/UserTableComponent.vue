<template>
    <div>
        <el-table :data="dataList" stripe style="width: 100%">
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
</template>

<script setup lang="ts">
import { PropType, reactive, defineProps, toRefs, onMounted } from 'vue';
import { initUserList, UserListInf } from '../models/user.model';

// IMPORTANT!! ATTENTION
// MUST REMENBER HOW TO DEFINE PROPS IN VUE!!!!
const props = defineProps({
    data: {
        required: true,
        type: Object as PropType<initUserList>,
    }
});
const { data } = toRefs(props);
const dataList = reactive(data.value.userDataList);
// console.log(dataList);
onMounted(() => {
    console.log(`tableData--------------------------------${JSON.stringify(dataList)}`);
});
</script>

<style lang="scss" scoped></style>