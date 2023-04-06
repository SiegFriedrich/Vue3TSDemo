import { UserListInf } from '../models/user.model';
<template>
    <div>
        <el-table :data="data" stripe style=" width: 100%">›
            <el-table-column prop="id" label="ID" width="100">
            </el-table-column>
            <el-table-column prop="username" label="姓名" width="180" />
            <el-table-column prop="nickname" label="NICKNAME" width="180" />
            <el-table-column label="权限">
                <template #default="scope">
                    <el-button v-for="item in scope.row.roles" :index="item.id" type="danger" size="small" :key="item.id"
                        @click="editRole(item)">{{ item.rolename
                        }}</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script setup lang="ts">
import { UserListInf } from '@/models';
import { PropType, defineProps, ref, reactive, onUpdated, toRefs } from 'vue';

const editRole = (item: any) => {
    console.log(item);
}


const props = defineProps({
    data: {
        required: true,
        type: Array as PropType<UserListInf[]>,
    }
});

const { data } = toRefs(props);

onUpdated(() => {
    console.log(`props.data----update-----${JSON.stringify(props.data)}`);
})
</script>

<style scoped></style>