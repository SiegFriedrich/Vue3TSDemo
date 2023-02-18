<template>
    <el-table :data="data.list" stripe style="width: 100%">
        <el-table-column prop="title" label="Title" width="180" />
        <el-table-column prop="info" label="Introduction" />
        <el-table-column prop="company" label="Company" width="180" />
    </el-table>
    <div class="example-pagination-block">
        <el-pagination layout="prev, pager, next" :total="data.list.length" />
</div>
</template>
  
<script lang="ts" setup>
import { PropType, defineProps, toRefs } from 'vue';
import { initData } from '../models/goods.model';
const props = defineProps({
    data: {
        required: true,
        type: Object as PropType<initData>,
    }
});
//You can use this kinda method/way to retrieve property from props!
const { data } = toRefs(props);
data.value.list.length

</script>
  
<style scoped>
.example-pagination-block {
    margin-top: 20px;
    display: flex;
    justify-content: end;
}
</style>