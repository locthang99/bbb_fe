export class SortParameter{
    index: number | undefined;
    pageSize: number | undefined;
    sortBy: string | null | undefined;
    sortASC: boolean | undefined;
    constructor()
    {
        this.index = 0;
        this.pageSize = 10;
        this.sortASC = true;
        this.sortBy = "Id"
    }
    init(_data?: any) {
        if (_data) {
            this.index = _data['index'],
            this.pageSize = _data['pageSize'],
            this.sortBy = _data['sortBy'],
            this.sortASC =_data['sortASC']
        }
    } 
}

export class PagedSortResponse{
    index: number | undefined;
    pageSize: number | undefined;
    totalItem: number | undefined;
    data:[]
    constructor ()
    {
        this.index = 0;
        this.pageSize = 0;
        this.totalItem = 0;
        this.data=[]
    }
    init(_data?: any) {
        if (_data) {
            this.index = _data['index'],
            this.pageSize = _data['pageSize'],
            this.totalItem = _data['totalItem']
        }
    } 
}