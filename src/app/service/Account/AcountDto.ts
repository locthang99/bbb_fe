import { FileParameter } from "../serviceBase";
export class UserLoginRequest implements IUserLoginRequest {
  user!: string | undefined;
  password!: string | undefined;
  rememberMe!: boolean;

  constructor(data?: IUserLoginRequest) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.user = _data["user"];
      this.password = _data["password"];
      this.rememberMe = _data["rememberMe"];
    }
  }

  static fromJS(data: any): UserLoginRequest {
    data = typeof data === "object" ? data : {};
    let result = new UserLoginRequest();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    data["user"] = this.user;
    data["password"] = this.password;
    data["rememberMe"] = this.rememberMe;
    return data;
  }
}

export interface IUserLoginRequest {
  user: string | undefined;
  password: string | undefined;
  rememberMe: boolean;
}

export class Account {
  firstName: string;
  lastName: string;
  dob: Date;
  email: string;
  phoneNumber: string;
  user: string;
  password: string;
  confirmPassword: string;
  thumbnail: FileParameter;
}
