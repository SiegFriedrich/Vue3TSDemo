export class Const{
    public static readonly userNameCountLimit = 40;
    public static readonly tableColumnIndex = 10;

    //ROLE
    public static readonly ROLE_ADMIN = 'admin';
    public static readonly ROLE_MAP:any = {
        admin: '管理者',
        sales:'営業',
        manager:'経理',
    };

    //ERROR MESSAGE
    public static readonly CUMMUNICATION_ERROR_HEADER = '通信エラー';
    public static readonly CSV_FORMAT_ERROR = 'CSVファイルフォーマットエラーが発生しており、アップロードできませんでした。';

    public static readonly PAGE_NOT_FOUND = 
    'ファイルは見つかりません<br/> 申し訳ございません。';

    //STATUS
    public static readonly BEFORE_APPLY = 1;
    public static readonly APPLIED = 2;
    public static readonly UNDER_EXAMINATION = 3;
    public static readonly APPLICATION_PENDING = 4;
    public static readonly APPLICATION_PERMITTED = 5;

    //CSV file Header
    public static readonly CSV_HEADER_MAP = {
        policy:{
            managementType:'処理区分',
            policyId:'証券ID'
        },
        pocession:{
            managementType:'処理区分',
            fundNo: 'ファンド番号',
        }
    };







}

