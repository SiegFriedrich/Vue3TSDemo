import { AxiosError } from "axios";
import { storeUitl } from "./store.util"
import { useGlobalStore } from '../store/global.store';
import router from "@/router";
import { Const } from "./const.util";
import { AuthError } from '../models/error.model';

export const errorHandler = (err:any) => {
    console.log(err);
    console.log(err.code);
    console.log(err.response);

    // 1 タイムアウトエラー
    if(err.code && err.code === 'ECONNABORTED'){
        storeUitl.showAlertDialog('エラー','タイムアウトしました、もう一回試してください。')
    } else if (err instanceof AxiosError) {
       const {status, data} = err.response!;
       if( status == 404) {
        const messageList = data.error.map((errorInfo:any) => errorInfo.message).join('<br/>');
        storeUitl.showAlertDialog('エラー',messageList);
       } else if ( status == 401 || status == 403){
        const store = useGlobalStore();
        store.reset();
        router.push('/');
        storeUitl.showAlertDialog('エラー',data.error);
       } else if ( status == 503){
        const store = useGlobalStore();
        store.maintenanceData = data;
        router.replace('maintenance');
       } else {
        storeUitl.showAlertDialog(Const.CUMMUNICATION_ERROR_HEADER, err.message);
       }
    } else if ( err instanceof AuthError){
        router.replace('/');
    } else {
        console.error(err);
    }
    // 2 Axios Error

    // 3 Authentication Error

    // 4 other Error
}