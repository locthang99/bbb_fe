import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import { Observable, throwError as _observableThrow, of as _observableOf } from 'rxjs';
import { Injectable, Inject, Optional, InjectionToken } from '@angular/core';

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');
export const HOST_API = 'http://localhost:5000'

export class SwaggerResponse<TResult> {
    status: number;
    headers: { [key: string]: any; };
    result: TResult;

    constructor(status: number, headers: { [key: string]: any; }, result: TResult)
    {
        this.status = status;
        this.headers = headers;
        this.result = result;
    }
}

export class SortParameter{
    index: number | undefined;
    pageSize: number | undefined;
    sortBy: string | null | undefined;
    sortASC: boolean | undefined;
    // constructor (index:number,pageSize:number,sortBy:string,sortASC:boolean)
    // {
    //     this.index = index,
    //     this.pageSize = pageSize,
    //     this.sortBy = sortBy,
    //     this.sortASC =sortASC
    // }
    init(_data?: any) {
        if (_data) {
            this.index = _data['index'],
            this.pageSize = _data['pageSize'],
            this.sortBy = _data['sortBy'],
            this.sortASC =_data['sortASC']
        }
    }

    // static fromJS(data: any): SortParameter {
    //     data = typeof data === 'object' ? data : {};
    //     let result = new SortParameter();
    //     result.init(data);
    //     return result;
    // }

    // toJSON(data?: any) {
    //     data = typeof data === 'object' ? data : {};
    //     data["objId"] = this.objId;
    //     data["content"] = this.content;
    //     return data; 
    // }
    
}

export interface FileParameter {
    data: any;
    fileName: string;
}

export interface FileResponse {
    data: Blob;
    status: number;
    fileName?: string;
    headers?: { [name: string]: any };
}

export class ApiException extends Error {
    message: string;
    status: number;
    response: string;
    headers: { [key: string]: any; };
    result: any;

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isApiException = true;

    static isApiException(obj: any): obj is ApiException {
        return obj.isApiException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): any {
    if (result !== null && result !== undefined)
        throw result;
    else
        throw new ApiException(message, status, response, headers, null);
}