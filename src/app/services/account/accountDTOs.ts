export class UserLoginRequest {
    username?: string | undefined;
    password?: string | undefined;
    rememberMe!: boolean;

    init(_data?: any) {
        if (_data) {
            this.username = _data["username"];
            this.password = _data["password"];
            this.rememberMe = _data["rememberMe"];
        }
    }

    static fromJS(data: any): UserLoginRequest {
        data = typeof data === 'object' ? data : {};
        let result = new UserLoginRequest();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["username"] = this.username;
        data["password"] = this.password;
        data["rememberMe"] = this.rememberMe;
        return data; 
    }
}

export class LoginCommand extends UserLoginRequest {

    init(_data?: any) {
        super.init(_data);
    }

    static fromJS(data: any): LoginCommand {
        data = typeof data === 'object' ? data : {};
        let result = new LoginCommand();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        super.toJSON(data);
        return data; 
    }
}
export class ChangePasswordRequest {
    oldPassword?: string | undefined;
    newPassword?: string | undefined;
    confirmNewPassword?: string | undefined;

    init(_data?: any) {
        if (_data) {
            this.oldPassword = _data["oldPassword"];
            this.newPassword = _data["newPassword"];
            this.confirmNewPassword = _data["confirmNewPassword"];
        }
    }

    static fromJS(data: any): ChangePasswordRequest {
        data = typeof data === 'object' ? data : {};
        let result = new ChangePasswordRequest();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["oldPassword"] = this.oldPassword;
        data["newPassword"] = this.newPassword;
        data["confirmNewPassword"] = this.confirmNewPassword;
        return data; 
    }
}

export class ChangePasswordCommand extends ChangePasswordRequest {

    init(_data?: any) {
        super.init(_data);
    }

    static fromJS(data: any): ChangePasswordCommand {
        data = typeof data === 'object' ? data : {};
        let result = new ChangePasswordCommand();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        super.toJSON(data);
        return data; 
    }
}

export class SendCodeResetPasswordCommand {
    email?: string | undefined;

    init(_data?: any) {
        if (_data) {
            this.email = _data["email"];
        }
    }

    static fromJS(data: any): SendCodeResetPasswordCommand {
        data = typeof data === 'object' ? data : {};
        let result = new SendCodeResetPasswordCommand();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["email"] = this.email;
        return data; 
    }
}

export class ResetPasswordRequest {
    email?: string | undefined;
    resetCode?: string | undefined;
    newPassword?: string | undefined;
    confirmNewPassword?: string | undefined;

    init(_data?: any) {
        if (_data) {
            this.email = _data["email"];
            this.resetCode = _data["resetCode"];
            this.newPassword = _data["newPassword"];
            this.confirmNewPassword = _data["confirmNewPassword"];
        }
    }

    static fromJS(data: any): ResetPasswordRequest {
        data = typeof data === 'object' ? data : {};
        let result = new ResetPasswordRequest();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["email"] = this.email;
        data["resetCode"] = this.resetCode;
        data["newPassword"] = this.newPassword;
        data["confirmNewPassword"] = this.confirmNewPassword;
        return data; 
    }
}

export class ResetPasswordCommand extends ResetPasswordRequest {

    init(_data?: any) {
        super.init(_data);
    }

    static fromJS(data: any): ResetPasswordCommand {
        data = typeof data === 'object' ? data : {};
        let result = new ResetPasswordCommand();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        super.toJSON(data);
        return data; 
    }
}