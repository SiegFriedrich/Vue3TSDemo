export interface UserListInf {
  userId: string;
  username: string;
  email: string;
  roles: RoleInf[];
}

export interface RoleInf {
  id: number;
  rolename: string;
}

// include the query bar infomation definition
interface SeletDataInf {
  username: string;
  email: string;
  roleId: number;
}

// initial data when page initializes
//我要死啦 我要死啦
//这里 这里 这里， 数组在定义的时候不要定义具体数值
//直接[]就好啦 搞了我几个小时
//虽然我不理解这是为什么
export class initUserList {
  selectData: SeletDataInf = {
    username: "",
    email: "",
    roleId: 0,
  };
  userDataList: UserListInf[] = [];
  roleDataList: RoleInf[] = [];
}

export type userType = { 
  userId: number;
  username: string;
  email: string;
  roles: RoleInf[];
}

export class initUserType { 
  userId = 0;
  username= '';
  email='';
  roles:RoleInf[] = [];
}