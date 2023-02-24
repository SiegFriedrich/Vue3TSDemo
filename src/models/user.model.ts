export interface UserListInf {
  userId: number;
  username: string;
  email: string;
  roles: RoleInf[];
}

interface RoleInf {
  id: number;
  roleId: number;
  roleName: string;
}

// include the query bar infomation definition
interface SeletDataInf {
  username: string;
  email: string;
  role: string;
}

// initial data when page initializes
export class InitUserList {
  selectData: SeletDataInf = {
    username: "",
    email: "",
    role: "",
  };
  userDataList: UserListInf[] = [{
    userId: 1234,
    username: 'string',
    email: 'string',
    roles: [{
      id: 1234567,
      roleId: 2,
      roleName: 'Admin',
    }],
  }];
}
