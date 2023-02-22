import { defineStore } from "pinia";
import { ref } from "vue";
import { ContractInfoResp } from "../models/contract.model";
export const useContractStore = defineStore("contract", () => {
  const contractInfo = ref<ContractInfoResp>();
  const reset = () => {
    contractInfo.value = undefined;
  };
  return { contractInfo, reset };
});
