import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import { Observable, throwError as _observableThrow, of as _observableOf } from 'rxjs';
import { Injectable, Inject, Optional, InjectionToken } from '@angular/core';
import {SortParameter}  from "./dto-base" 
import { HttpClient } from "@angular/common/http";
export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');
//export const HOST_API = 'http://localhost:5000'
export const HOST_API = 'http://103.92.29.98'

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

@Injectable({
    providedIn: 'root',
    })
export class ServiceBaseHttpClient{
        public http: HttpClient;
        public nameObj:String;
        public basePrefix:string;
        protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;
    
        constructor(@Inject(HttpClient) http: HttpClient,@Optional() @Inject(String) nameObj?:String) {
            this.http = http;
            this.nameObj = nameObj;
            this.basePrefix = HOST_API+"/api/v1/"+nameObj;
        }
    
        public get(sortParameter :SortParameter): Promise<any> {
            let url_ = this.basePrefix+"?"
            if (sortParameter.index !== undefined)
                url_ += "Index=" + encodeURIComponent("" + sortParameter.index) + "&";
            if (sortParameter.pageSize !== undefined)
                url_ += "PageSize=" + encodeURIComponent("" + sortParameter.pageSize) + "&";
            if (sortParameter.sortBy !== undefined && sortParameter.sortBy !== null)
                url_ += "SortBy=" + encodeURIComponent("" + sortParameter.sortBy) + "&";
            if (sortParameter.sortASC !== undefined)
                url_ += "SortASC=" + encodeURIComponent("" + sortParameter.sortASC) + "&";
            url_ = url_.replace(/[?&]$/, "");
    
            let options_ = {
                method: "GET",
                headers: {
                    "Accept": "application/json"
                }
            };
            
            return this.http.get(url_,options_).toPromise()
        }   
    

    
        delete(id: number | undefined): Promise<any> {
            let url_ = this.basePrefix + "?"
            if (id === null)
                throw new Error("The parameter 'id' cannot be null.");
            else if (id !== undefined)
                url_ += "Id=" + encodeURIComponent("" + id) + "&";
            url_ = url_.replace(/[?&]$/, "");
    
            let options_ = {
                method: "DELETE",
                headers: {
                    "Accept": "application/json"
                }
            };
    
            return this.http.delete(url_,options_).toPromise()
        }

        unDelete(id: number | undefined): Promise<any> {
            let url_ = this.basePrefix + "/UnDelete?"
            if (id === null)
                throw new Error("The parameter 'id' cannot be null.");
            else if (id !== undefined)
                url_ += "Id=" + encodeURIComponent("" + id) + "&";
            url_ = url_.replace(/[?&]$/, "");
    
            let options_ = {
                method: "PUT",
                headers: {
                    "Accept": "application/json"
                }
            };
    
            return this.http.request('put',url_,options_).toPromise()
        }

        strongDelete(id: number | undefined): Promise<any> {
            let url_ = this.basePrefix + "/StrongDelete?"
            if (id === null)
                throw new Error("The parameter 'id' cannot be null.");
            else if (id !== undefined)
                url_ += "Id=" + encodeURIComponent("" + id) + "&";
            url_ = url_.replace(/[?&]$/, "");
    
            let options_ = {
                method: "DELETE",
                headers: {
                    "Accept": "application/json"
                }
            };
    
            return this.http.request('delete',url_,options_).toPromise()
        }
    
        getById(id: number | undefined): Promise<any> {
            let url_ = this.basePrefix + "/ById?";
            if (id === null)
                throw new Error("The parameter 'id' cannot be null.");
            else if (id !== undefined)
                url_ += "Id=" + encodeURIComponent("" + id) + "&";
            url_ = url_.replace(/[?&]$/, "");
    
            let options_ = {
                method: "GET",
                headers: {
                    "Accept": "application/json"
                }
            };
    
            return fetch(url_, options_).then(_response => _response.json())
        }

    
        getByListId(listId: number[] | null | undefined, sortParameter :SortParameter): Promise<any> {
            let url_ = this.basePrefix + "/ByListId?";
            if (listId !== undefined && listId !== null)
                listId && listId.forEach(item => { url_ += "listId=" + encodeURIComponent("" + item) + "&"; });
             if (sortParameter.index !== undefined)
                url_ += "Index=" + encodeURIComponent("" + sortParameter.index) + "&";
            if (sortParameter.pageSize !== undefined)
                url_ += "PageSize=" + encodeURIComponent("" + sortParameter.pageSize) + "&";
            if (sortParameter.sortBy !== undefined && sortParameter.sortBy !== null)
                url_ += "SortBy=" + encodeURIComponent("" + sortParameter.sortBy) + "&";
            if (sortParameter.sortASC !== undefined)
                url_ += "SortASC=" + encodeURIComponent("" + sortParameter.sortASC) + "&";
            url_ = url_.replace(/[?&]$/, "");
    
            let options_ = {
                method: "GET",
                headers: {
                    "Accept": "application/json"
                }
            };
    
            return fetch(url_, options_).then(_response => _response.json())
        }
    
    
        getByName(name: string | null | undefined, sortParameter :SortParameter): Promise<any> {
            let url_ = this.basePrefix + "/ByName?";
            if (name !== undefined && name !== null)
                url_ += "Name=" + encodeURIComponent("" + name) + "&";
             if (sortParameter.index !== undefined)
                url_ += "Index=" + encodeURIComponent("" + sortParameter.index) + "&";
            if (sortParameter.pageSize !== undefined)
                url_ += "PageSize=" + encodeURIComponent("" + sortParameter.pageSize) + "&";
            if (sortParameter.sortBy !== undefined && sortParameter.sortBy !== null)
                url_ += "SortBy=" + encodeURIComponent("" + sortParameter.sortBy) + "&";
            if (sortParameter.sortASC !== undefined)
                url_ += "SortASC=" + encodeURIComponent("" + sortParameter.sortASC) + "&";
            url_ = url_.replace(/[?&]$/, "");
    
            let options_ = {
                method: "GET",
                headers: {
                    "Accept": "application/json"
                }
            };
    
            return fetch(url_, options_).then(_response => _response.json())
        }

        getListDeleted(name: string | null | undefined, sortParameter :SortParameter): Promise<any> {
            let url_ = this.basePrefix + "/ListDeleted?";
            if (name !== undefined && name !== null)
                url_ += "Name=" + encodeURIComponent("" + name) + "&";
             if (sortParameter.index !== undefined)
                url_ += "Index=" + encodeURIComponent("" + sortParameter.index) + "&";
            if (sortParameter.pageSize !== undefined)
                url_ += "PageSize=" + encodeURIComponent("" + sortParameter.pageSize) + "&";
            if (sortParameter.sortBy !== undefined && sortParameter.sortBy !== null)
                url_ += "SortBy=" + encodeURIComponent("" + sortParameter.sortBy) + "&";
            if (sortParameter.sortASC !== undefined)
                url_ += "SortASC=" + encodeURIComponent("" + sortParameter.sortASC) + "&";
            url_ = url_.replace(/[?&]$/, "");
    
            let options_ = {
                method: "GET",
                headers: {
                    "Accept": "application/json"
                }
            };
    
            return fetch(url_, options_).then(_response => _response.json())
        }
}