export class UserCmtRequest implements IUserCmtRequest {
    objId!: number;
    content?: string | undefined;

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
    content?: string | undefined;
}
export class SongCloneRequest implements ISongCloneRequest {
    name?: string | undefined;
    description?: string | undefined;
    lyric?: string | undefined;
    totalListen!: number;
    duration!: number;
    thumbnail?: string | undefined;
    fileMusic?: string | undefined;
    singerClones?: SingerClone[] | undefined;

    constructor(data?: ISongCloneRequest) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.name = _data["name"];
            this.description = _data["description"];
            this.lyric = _data["lyric"];
            this.totalListen = _data["totalListen"];
            this.duration = _data["duration"];
            this.thumbnail = _data["thumbnail"];
            this.fileMusic = _data["fileMusic"];
            if (Array.isArray(_data["singerClones"])) {
                this.singerClones = [] as any;
                for (let item of _data["singerClones"])
                    this.singerClones!.push(SingerClone.fromJS(item));
            }
        }
    }

    static fromJS(data: any): SongCloneRequest {
        data = typeof data === 'object' ? data : {};
        let result = new SongCloneRequest();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["description"] = this.description;
        data["lyric"] = this.lyric;
        data["totalListen"] = this.totalListen;
        data["duration"] = this.duration;
        data["thumbnail"] = this.thumbnail;
        data["fileMusic"] = this.fileMusic;
        if (Array.isArray(this.singerClones)) {
            data["singerClones"] = [];
            for (let item of this.singerClones)
                data["singerClones"].push(item.toJSON());
        }
        return data; 
    }
}

export interface ISongCloneRequest {
    name?: string | undefined;
    description?: string | undefined;
    lyric?: string | undefined;
    totalListen: number;
    duration: number;
    thumbnail?: string | undefined;
    fileMusic?: string | undefined;
    singerClones?: SingerClone[] | undefined;
}

export class SingerClone implements ISingerClone {
    username?: string | undefined;
    name?: string | undefined;
    thumbnail?: string | undefined;

    constructor(data?: ISingerClone) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.username = _data["username"];
            this.name = _data["name"];
            this.thumbnail = _data["thumbnail"];
        }
    }

    static fromJS(data: any): SingerClone {
        data = typeof data === 'object' ? data : {};
        let result = new SingerClone();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["username"] = this.username;
        data["name"] = this.name;
        data["thumbnail"] = this.thumbnail;
        return data; 
    }
}

export interface ISingerClone {
    username?: string | undefined;
    name?: string | undefined;
    thumbnail?: string | undefined;
}
