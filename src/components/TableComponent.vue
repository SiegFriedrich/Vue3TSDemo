<template>
    <el-table :data="dataList" stripe style="width: 100%">
        <el-table-column prop="id" label="ID" width="100" />

        <el-table-column prop="title" label="Title" width="180" />
        <el-table-column prop="company" label="Company" width="180" />
        <el-table-column prop="info" label="Introduction" />

    </el-table>
    <div class="example-pagination-block">
        <div class="demo-pagination-block">
            <el-pagination v-model:current-page="data.selectData.page" v-model:page-size="data.selectData.pageSize"
                layout="prev, pager, next, jumper" :total="data.list.length" @size-change="handleSizeChange"
                @current-change="handleCurrentChange" />
        </div>
    </div>
</template>
  
<script lang="ts" setup>
import { PropType, defineProps, toRefs, reactive, onMounted } from 'vue';
import { initData } from '../models/goods.model';
import { computed } from '@vue/reactivity';
import { stringUtil } from '@/util/string.util';
const props = defineProps({
    data: {
        required: true,
        type: Object as PropType<initData>,
    }
});
//You can use this kinda method/way to retrieve property from props!
const { data } = toRefs(props);

//comput the data for dataList once the page changed
const dataList = reactive(computed(() => {
    return data.value.list.slice((data.value.selectData.page - 1) * data.value.selectData.pageSize,
        (data.value.selectData.page * data.value.selectData.pageSize));
}));
const handleSizeChange = (pageSize: number) => {
    data.value.selectData.pageSize = pageSize;
}

const handleCurrentChange = (currentPage: number) => {
    data.value.selectData.page = currentPage;
}

</script>
  
<style scoped>
.example-pagination-block {
    margin-top: 20px;
    display: flex;
    justify-content: end;
}
</style>