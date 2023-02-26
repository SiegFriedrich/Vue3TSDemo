import { toRefs } from 'vue';
<template>
    <div class="d-flex">

        <h2>当該{{ message }}はありませんでした。</h2>
        条件を変更して再度絞り込みをしてください。
    </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';

const props = defineProps({
    message: {
        required: true,
        type: String,
    }
});
const { message } = toRefs(props);
</script>

<style lang="scss" scoped>
.d-flex {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>