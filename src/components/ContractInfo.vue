import type { DefineComponent from 'vue';
<template>
    <div class="f-flex">
        <div class="img-box" v-if="icon">
            <img src="@/assets/sea-wave.jpeg" alt="/" />
        </div>
        <div class="flex">
            <Record v-if="policyNo" label="证券番号" :value="contractInfo?.policyNo" class="mt-6px" />
            <Record v-if="contractRange" label="保险期间" :value="contractRange" class="mt-6px" />
            <Record v-if="salesAgencyCode" label="营业代码" :value="salesAgencyCode" class="mt-6px" />
        </div>
        <CompanyLabel v-if="companyInfo" :companyName="contractInfo?.policyHolderName"
            :divisionName="contractInfo?.divisionName" />
    </div>
</template>

<script setup lang="ts">
import { defineProps, onMounted } from 'vue';
import { useContractStore } from '../store/contract.store';
import { storeToRefs } from 'pinia';
import { ContractInfoResp } from '../models/contract.model';
import { axiosUtil } from '@/util/axios.util';

const props = defineProps({
    infoId: {
        required: true,
        type: String
    },
    icon: Boolean,
    policyNo: Boolean,
    contractRange: Boolean,
    salesAgencyCode: Boolean,
    companyInfo: Boolean,
});
const store = useContractStore();
const { contractInfo } = storeToRefs(store);
onMounted(async () => {
    if (contractInfo.value?.policyId != props.infoId) {
        await axiosUtil.get<ContractInfoResp>(`/contrac/${props.infoId}`)
    }
});
</script>

<style lang="scss" scoped>
.f-flex {
    display: flex;
}
</style>