export class SongTypeUpdateRequest implements ISongTypeUpdateRequest {
    name!: string | undefined;
    description!: string | undefined;

    constructor(data?: ISongTypeUpdateRequest) {
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
        }
    }

    static fromJS(data: any): SongTypeUpdateRequest {
        data = typeof data === 'object' ? data : {};
        let result = new SongTypeUpdateRequest();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["description"] = this.description;
        return data;
    }
}

export interface ISongTypeUpdateRequest {
    name: string | undefined;
    description: string | undefined;
}