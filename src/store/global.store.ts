import { defineStore } from 'pinia';
import { ref } from 'vue';
export const useGlobalStore = defineStore(
    'global',
    ()=>{
        //Would be used in multiple pages
        const loading = ref(false);
        const maintenanceData = ref('');

        // Just are used in single pages no need to persist
        const isAlertDialog = ref(false);
        const alertHeader = ref('');
        const alertMessage = ref('');

        const reset = ()=>{
            loading.value = false;
            isAlertDialog.value = false;
            alertHeader.value = '';
            alertMessage.value = '';
        }

        return {loading, isAlertDialog, alertHeader, alertMessage, reset, maintenanceData};

        
    },
    {
        persist:{
            storage: sessionStorage,
            paths:['loading'],
        }
    }
    );