export class UserCmtRequest {
    objId!: number;
    content?: string | undefined;

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
export class CommentCommand extends UserCmtRequest {

    init(_data?: any) {
        super.init(_data);
    }

    static fromJS(data: any): CommentCommand {
        data = typeof data === 'object' ? data : {};
        let result = new CommentCommand();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        super.toJSON(data);
        return data; 
    }
}