<template>
    <el-dialog v-model="isAlertDialog" :title="header" width="30%" align-center>
        <span>{{ message }}</span>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="isAlertDialog = false">Cancel</el-button>
                <el-button type="primary" @click="isAlertDialog = false">
                    Confirm
                </el-button>
            </span>
        </template>
    </el-dialog>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useGlobalStore } from '../store/global.store';
import { storeToRefs } from 'pinia';
const store = useGlobalStore();
const { isAlertDialog } = storeToRefs(store);
onMounted(() => {
    console.log(`isAlertDialog --------> ${isAlertDialog}`);
});
const props = defineProps({
    header: {
        required: true,
        type: String,
    },
    message: {
        required: true,
        type: String,
    }
});

</script>
<style scoped>
.dialog-footer button:first-child {
    margin-right: 10px;
}
</style>
  