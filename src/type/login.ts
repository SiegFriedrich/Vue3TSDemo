export interface LoginFormInf {
  name: string;
  password: string;
}

export class LoginData implements LoginFormInf {
  name: string;
  password: string;
  constructor() {
    this.name = "";
    this.password = "";
  }
}
