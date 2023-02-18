<template>
    <el-table :data="data" stripe style="width: 100%">
        <el-table-column prop="title" label="Title" width="180" />
        <el-table-column prop="info" label="Introduction" />
        <el-table-column prop="company" label="Company" width="180" />
</el-table>
</template>
  
<script lang="ts" setup>
import { PropType, defineProps } from 'vue';
import { GoodsList } from '../models/goods.model';
defineProps({
    data: {
        required: true,
        type: Object as PropType<GoodsList>,
    }
});


</script>
  