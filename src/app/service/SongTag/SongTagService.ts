import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import { Observable, throwError as _observableThrow, of as _observableOf } from 'rxjs';
import { Injectable, Inject, Optional, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';
import{FileResponse,blobToText,throwException,HOST_API,FileParameter} from '../serviceBase'
import {TagUpdateRequest} from './SongTagDto'

import * as moment from 'moment';

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');
@Injectable({
    providedIn: 'root',
  })
  export class SongTagsClient {
    private http: HttpClient;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : HOST_API;
    }

    getTagById(id: number | undefined): Observable<FileResponse | null> {
        let url_ = this.baseUrl + "/api/Tag/ById?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "Id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "json",
            headers: new HttpHeaders({
                "Accept": "application/json",
                "Authorization": "Bearer "+ localStorage.getItem('token')
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetTagById(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetTagById(<any>response_);
                } catch (e) {
                    return <Observable<FileResponse | null>><any>_observableThrow(e);
                }
            } else
                return <Observable<FileResponse | null>><any>_observableThrow(response_);
        }));
    }

    protected processGetTagById(response: HttpResponseBase): Observable<FileResponse | null> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        const contentDisposition = response.headers ? response.headers.get("content-disposition") : undefined;
            const fileNameMatch = contentDisposition ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition) : undefined;
            const fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[1] : undefined;
            return _observableOf({ fileName: fileName, data: <any>responseBlob, status: status, headers: _headers });
    }

    getAll(index: number | undefined, pageSize: number | undefined): Observable<FileResponse | null> {
        let url_ = this.baseUrl + "/api/Tag?";
        if (index === null)
            throw new Error("The parameter 'index' cannot be null.");
        else if (index !== undefined)
            url_ += "Index=" + encodeURIComponent("" + index) + "&";
        if (pageSize === null)
            throw new Error("The parameter 'pageSize' cannot be null.");
        else if (pageSize !== undefined)
            url_ += "PageSize=" + encodeURIComponent("" + pageSize) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "json",
            headers: new HttpHeaders({
                "Accept": "application/json",
                "Authorization": "Bearer "+ localStorage.getItem('token')
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetAll(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetAll(<any>response_);
                } catch (e) {
                    return <Observable<FileResponse | null>><any>_observableThrow(e);
                }
            } else
                return <Observable<FileResponse | null>><any>_observableThrow(response_);
        }));
    }

    protected processGetAll(response: HttpResponseBase): Observable<FileResponse | null> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        const contentDisposition = response.headers ? response.headers.get("content-disposition") : undefined;
            const fileNameMatch = contentDisposition ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition) : undefined;
            const fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[1] : undefined;
            return _observableOf({ fileName: fileName, data: <any>responseBlob, status: status, headers: _headers });
    }

    create(name: string | null | undefined, description: string | null | undefined): Observable<FileResponse | null> {
        let url_ = this.baseUrl + "/api/Tag";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = new FormData();
        if (name !== null && name !== undefined)
            content_.append("Name", name.toString());
        if (description !== null && description !== undefined)
            content_.append("Description", description.toString());

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "json",
            headers: new HttpHeaders({
                "Accept": "application/json",
                "Authorization": "Bearer "+ localStorage.getItem('token')
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processCreate(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processCreate(<any>response_);
                } catch (e) {
                    return <Observable<FileResponse | null>><any>_observableThrow(e);
                }
            } else
                return <Observable<FileResponse | null>><any>_observableThrow(response_);
        }));
    }

    protected processCreate(response: HttpResponseBase): Observable<FileResponse | null> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        const contentDisposition = response.headers ? response.headers.get("content-disposition") : undefined;
            const fileNameMatch = contentDisposition ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition) : undefined;
            const fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[1] : undefined;
            return _observableOf({ fileName: fileName, data: <any>responseBlob, status: status, headers: _headers });
    }

    delete(id: number | undefined): Observable<FileResponse | null> {
        let url_ = this.baseUrl + "/api/Tag?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "Id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "json",
            headers: new HttpHeaders({
                "Accept": "application/json",
                "Authorization": "Bearer "+ localStorage.getItem('token')
            })
        };

        return this.http.request("delete", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processDelete(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processDelete(<any>response_);
                } catch (e) {
                    return <Observable<FileResponse | null>><any>_observableThrow(e);
                }
            } else
                return <Observable<FileResponse | null>><any>_observableThrow(response_);
        }));
    }

    protected processDelete(response: HttpResponseBase): Observable<FileResponse | null> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        const contentDisposition = response.headers ? response.headers.get("content-disposition") : undefined;
            const fileNameMatch = contentDisposition ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition) : undefined;
            const fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[1] : undefined;
            return _observableOf({ fileName: fileName, data: <any>responseBlob, status: status, headers: _headers });
    }

    update(id: number | undefined, rq: TagUpdateRequest): Observable<FileResponse | null> {
        let url_ = this.baseUrl + "/api/Tag?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "Id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(rq);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "json",
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer "+ localStorage.getItem('token')
            })
        };

        return this.http.request("put", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processUpdate(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processUpdate(<any>response_);
                } catch (e) {
                    return <Observable<FileResponse | null>><any>_observableThrow(e);
                }
            } else
                return <Observable<FileResponse | null>><any>_observableThrow(response_);
        }));
    }

    protected processUpdate(response: HttpResponseBase): Observable<FileResponse | null> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        const contentDisposition = response.headers ? response.headers.get("content-disposition") : undefined;
            const fileNameMatch = contentDisposition ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition) : undefined;
            const fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[1] : undefined;
            return _observableOf({ fileName: fileName, data: <any>responseBlob, status: status, headers: _headers });
    }

    getByName(name: string | null | undefined, index: number | undefined, pageSize: number | undefined): Observable<FileResponse | null> {
        let url_ = this.baseUrl + "/api/Tag/ByName?";
        if (name !== undefined && name !== null)
            url_ += "Name=" + encodeURIComponent("" + name) + "&";
        if (index === null)
            throw new Error("The parameter 'index' cannot be null.");
        else if (index !== undefined)
            url_ += "Index=" + encodeURIComponent("" + index) + "&";
        if (pageSize === null)
            throw new Error("The parameter 'pageSize' cannot be null.");
        else if (pageSize !== undefined)
            url_ += "PageSize=" + encodeURIComponent("" + pageSize) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "json",
            headers: new HttpHeaders({
                "Accept": "application/json",
                "Authorization": "Bearer "+ localStorage.getItem('token')
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetByName(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetByName(<any>response_);
                } catch (e) {
                    return <Observable<FileResponse | null>><any>_observableThrow(e);
                }
            } else
                return <Observable<FileResponse | null>><any>_observableThrow(response_);
        }));
    }

    protected processGetByName(response: HttpResponseBase): Observable<FileResponse | null> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        const contentDisposition = response.headers ? response.headers.get("content-disposition") : undefined;
            const fileNameMatch = contentDisposition ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition) : undefined;
            const fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[1] : undefined;
            return _observableOf({ fileName: fileName, data: <any>responseBlob, status: status, headers: _headers });
    }

    getListSong(id: number | undefined, index: number | undefined, pageSize: number | undefined): Observable<FileResponse | null> {
        let url_ = this.baseUrl + "/api/Tag/ListSong?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "Id=" + encodeURIComponent("" + id) + "&";
        if (index === null)
            throw new Error("The parameter 'index' cannot be null.");
        else if (index !== undefined)
            url_ += "Index=" + encodeURIComponent("" + index) + "&";
        if (pageSize === null)
            throw new Error("The parameter 'pageSize' cannot be null.");
        else if (pageSize !== undefined)
            url_ += "PageSize=" + encodeURIComponent("" + pageSize) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "json",
            headers: new HttpHeaders({
                "Accept": "application/json",
                "Authorization": "Bearer "+ localStorage.getItem('token')
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetListSong(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetListSong(<any>response_);
                } catch (e) {
                    return <Observable<FileResponse | null>><any>_observableThrow(e);
                }
            } else
                return <Observable<FileResponse | null>><any>_observableThrow(response_);
        }));
    }

    protected processGetListSong(response: HttpResponseBase): Observable<FileResponse | null> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        const contentDisposition = response.headers ? response.headers.get("content-disposition") : undefined;
            const fileNameMatch = contentDisposition ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition) : undefined;
            const fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[1] : undefined;
            return _observableOf({ fileName: fileName, data: <any>responseBlob, status: status, headers: _headers });
    }
}