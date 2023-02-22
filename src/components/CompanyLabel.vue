<template>
    <div>
        <div class="mb-10px">
            <span class="company-name">{{ companyName }}</span>
            <span class=""><br /></span>
        </div>
        <span class="division-name">{{ divisionName }}</span>
    </div>
</template>

<script setup lang="ts">
import { defineProps, toRefs } from 'vue';

const props = defineProps({
    companyName: {
        required: true,
        type: String
    },
    divisionName: {
        required: true,
        type: String
    }
});

const companyName = toRefs(props);
const divisionName = toRefs(props);
</script>

<style lang="scss" scoped></style>