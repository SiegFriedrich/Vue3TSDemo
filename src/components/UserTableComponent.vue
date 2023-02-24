<template>
    <el-table :data="dataList" stripe style="width: 100%">
        <el-table-column prop="userId" label="ID" width="100" />

        <el-table-column prop="username" label="Title" width="180" />
        <el-table-column prop="email" label="Company" width="180" />
        <el-table-column prop="roles" label="Introduction" />

    </el-table>
</template>

<script setup lang="ts">
import { PropType, reactive, defineProps, toRefs } from 'vue';
import { InitUserList, UserListInf } from '../models/user.model';

// IMPORTANT!! ATTENTION
// MUST REMENBER HOW TO DEFINE PROPS IN VUE!!!!
const props = defineProps({
    data: {
        required: true,
        type: Object as PropType<InitUserList>,
    }
});
const { data } = toRefs(props);
const dataList = reactive(data);
</script>

<style scoped></style>