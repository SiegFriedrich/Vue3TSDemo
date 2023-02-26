import { useGlobalStore } from '@/store/global.store';
class StoreUtil {
    showAlertDialog(header: string, message: string) {
        const store = useGlobalStore();
        store.isAlertDialog = true;
        store.alertHeader = header;
        store.alertMessage = message;
    }

}

export const storeUitl = new StoreUtil();