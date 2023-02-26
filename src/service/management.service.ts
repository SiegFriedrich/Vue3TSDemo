import { Const } from "@/util/const.util";
import { csvUtil } from "../util/csv.util";
import { CSVFormatError } from "@/models";
import { stringUtil } from '../util/string.util';
type CheckActionName = 
    | 'userIdCheck'    
    | 'pocessionCheck'
    | 'constCheck';

type ChangeActionName = 
    | 'userIdChange'    
    | 'pocessionChange'
    | 'constChange';

const urlMap: any = {
    userId: '/management/user-update',
    pocession: '/management/pocession',
    const: '/management/const',
};

class ManagementService {
    public async sendCSVData(type: string){
        //read csvfile
        const lines = await csvUtil.readCsvFile();
        //check the count of lines if the total lines < 2 means only have header
        if(lines.length < 2){
            throw new CSVFormatError();
        }
        //reflect every item of header from Kanji to English Property( the column name of DB table)
        const headers = csvUtil.csvToArray(lines[0]).map((item) => stringUtil.filedNameMap[item]);
        //Check headers
        const checkActionName = `${type}Check` as CheckActionName;
        const changeActionName = `${type}Change` as ChangeActionName;
        const result = this[checkActionName](headers);
        if (!result){
            throw new CSVFormatError();
        }
        //Change the item content
        const checkedDataList:any[] = [];
        for (let i = 1; i < lines.length; i++){
            if (stringUtil.isBlank(lines[i])){
                continue;
            }
            const data = this[changeActionName](lines[i]);
            checkedDataList.push(data);
        }



    }



    private pocessionCheck(headers: string[]){
        if(Headers.length != 9){
            return false;
        }
        //will return a boolean
        return (
            headers[0] === 'username' &&
            headers[1] === 'fundId' &&
            headers[2] === 'contractId' &&
            headers[3] === 'totalAmount' &&
            headers[4] === 'signYYYYMMDD'
        );
    }

    private userIdCheck(headers: string[]){
        if(Headers.length != 3){
            return false;
        }
        //will return a boolean
        return (
            headers[0] === 'userId' &&
            headers[1] === 'fundName' &&
            headers[2] === 'bornYYYYMMDD'
        );
    }

    private constCheck(headers: string[]){
        if(Headers.length != 3){
            return false;
        }
        //will return a boolean
        return (
            headers[0] === 'userId' &&
            headers[1] === 'fundName' &&
            headers[2] === 'bornYYYYMMDD'
        );
    }

    //Check every item of one line
    private pocessionChange(line: string){
        const items = csvUtil.csvToArray(line);
        if (items.length != 9){
            throw new Error(Const.CSV_FORMAT_ERROR);
        }
        return {
            username : items[0],
            fundId : items[1],
            contractId : items[2],
            totalAmount : items[3],
            signYYYYMMDD : items[4],
        }
    }

    public userIdChange(line: string){
        const items = csvUtil.csvToArray(line);
        if (items.length != 9){
            throw new Error(Const.CSV_FORMAT_ERROR);
        }
        return {
            username : items[0],
            fundId : items[1],
            contractId : items[2],
            totalAmount : items[3],
            signYYYYMMDD : items[4],
        }
    }


    public constChange(line: string){
        const items = csvUtil.csvToArray(line);
        if (items.length != 9){
            throw new Error(Const.CSV_FORMAT_ERROR);
        }
        return {
            username : items[0],
            fundId : items[1],
            contractId : items[2],
            totalAmount : items[3],
            signYYYYMMDD : items[4],
        }
    }

}

export const managementService = new ManagementService();