import type { DefineComponent from 'vue';
<template>
    <div class="f-flex">
        <div class="img-box" v-if="icon">
            <img class="img-width" src="@/assets/sea-wave.jpeg" alt="/" />
        </div>
        <div class="f-flex">
            <!-- <Record v-if="policyNo" label="证券番号" :value="contractInfo?.policyNo" class="mt-6px" /> -->
            <Record v-if="contractRange" label="保险期间" :value="contractRangeValue" class="mt-6px" />
            <Record v-if="salesAgencyCode" label="营业代码" :value="salesAgencyCodeValue" class="mt-6px" />
        </div>
    <!-- <CompanyLabel v-if="companyInfo" :companyName="contractInfo?.policyHolderName"
                :divisionName="contractInfo?.divisionName" /> -->
    </div>
</template>

<script setup lang="ts">
import { defineProps, onMounted, ref, toRefs } from 'vue';
import { useContractStore } from '../store/contract.store';
import { storeToRefs } from 'pinia';
import { ContractInfoResp } from '../models/contract.model';
import { axiosUtil } from '@/util/axios.util';
import Record from '@/components/Record.vue';
import CompanyLabel from '@/components/CompanyLabel.vue';

const props = defineProps({
    contractInfoId: {
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
const { contractInfoId } = toRefs(props);
const contractRangeValue = ref('2022/12 ~ 2023/12');
const salesAgencyCodeValue = ref('DEP00089');
onMounted(async () => {
    if (contractInfo.value?.policyId != props.contractInfoId) {
        console.log(`contractInfoId = ${props.contractInfoId}`);
        const resp = await axiosUtil.get<ContractInfoResp>(`/contract/${props.contractInfoId}`);
        console.log(`JSON parse result --->  ${JSON.stringify(resp)}`);
        contractInfo.value = JSON.parse(JSON.stringify(resp));
        console.log(`CONTRACT INFO value == ${contractInfo.value}`)
        console.log(`CONTRACT INFO == ${contractInfo}`)
        console.log(`resp ===》 ${resp}`);
    }
});
</script>

<style lang="scss" scoped>
.f-flex {
    display: flex;
}

.img-width {
    width: 400px;
}
</style>