export class UserCmtRequest implements IUserCmtRequest {
    objId!: number;
    content!: string | undefined;

    constructor(data?: IUserCmtRequest) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.objId = _data["objId"];
            this.content = _data["content"];
        }
    }

    static fromJS(data: any): UserCmtRequest {
        data = typeof data === 'object' ? data : {};
        let result = new UserCmtRequest();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["objId"] = this.objId;
        data["content"] = this.content;
        return data;
    }
}

export interface IUserCmtRequest {
    objId: number;
    content: string | undefined;
}
