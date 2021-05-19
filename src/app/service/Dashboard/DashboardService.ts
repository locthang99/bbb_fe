import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import { Observable, throwError as _observableThrow, of as _observableOf } from 'rxjs';
import { Injectable, Inject, Optional, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';
import{FileResponse,blobToText,throwException,HOST_API,FileParameter} from '../serviceBase'

import * as moment from 'moment';

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');
@Injectable({
    providedIn: 'root',
  })
  export class DashboardsClient {
    private http: HttpClient;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : HOST_API;
    }

    protected process(response: HttpResponseBase): Observable<FileResponse | null> {
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

    getChartSong(type: string | null | undefined): Observable<FileResponse | null> {
        let url_ = this.baseUrl + "/api/Dashboards/ChartSong?";
        if (type !== undefined && type !== null)
            url_ += "Type=" + encodeURIComponent("" + type) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "json",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.process(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.process(<any>response_);
                } catch (e) {
                    return <Observable<FileResponse | null>><any>_observableThrow(e);
                }
            } else
                return <Observable<FileResponse | null>><any>_observableThrow(response_);
        }));
    }

    getChartPlaylist(type: string | null | undefined): Observable<FileResponse | null> {
        let url_ = this.baseUrl + "/api/Dashboards/ChartPlaylist?";
        if (type !== undefined && type !== null)
            url_ += "Type=" + encodeURIComponent("" + type) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "json",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.process(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.process(<any>response_);
                } catch (e) {
                    return <Observable<FileResponse | null>><any>_observableThrow(e);
                }
            } else
                return <Observable<FileResponse | null>><any>_observableThrow(response_);
        }));
    }

    getTotalPlaylist(): Observable<FileResponse | null> {
        let url_ = this.baseUrl + "/api/Dashboards/TotalPlaylist?";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "json",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.process(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.process(<any>response_);
                } catch (e) {
                    return <Observable<FileResponse | null>><any>_observableThrow(e);
                }
            } else
                return <Observable<FileResponse | null>><any>_observableThrow(response_);
        }));
    }

    getAll(type: string | null | undefined): Observable<FileResponse | null> {
        let url_ = this.baseUrl + "/api/Dashboards/ChartAll?";
        if (type !== undefined && type !== null)
            url_ += "Type=" + encodeURIComponent("" + type) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "json",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.process(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.process(<any>response_);
                } catch (e) {
                    return <Observable<FileResponse | null>><any>_observableThrow(e);
                }
            } else
                return <Observable<FileResponse | null>><any>_observableThrow(response_);
        }));
    }

    getAge(type: string | null | undefined): Observable<FileResponse | null> {
        let url_ = this.baseUrl + "/api/Dashboards/ChartAge?";
        if (type !== undefined && type !== null)
            url_ += "Type=" + encodeURIComponent("" + type) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "json",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.process(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.process(<any>response_);
                } catch (e) {
                    return <Observable<FileResponse | null>><any>_observableThrow(e);
                }
            } else
                return <Observable<FileResponse | null>><any>_observableThrow(response_);
        }));
    }

    getCreateUser(type: string | null | undefined): Observable<FileResponse | null> {
        let url_ = this.baseUrl + "/api/Dashboards/ChartCreateUser?";
        if (type !== undefined && type !== null)
            url_ += "Type=" + encodeURIComponent("" + type) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "json",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.process(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.process(<any>response_);
                } catch (e) {
                    return <Observable<FileResponse | null>><any>_observableThrow(e);
                }
            } else
                return <Observable<FileResponse | null>><any>_observableThrow(response_);
        }));
    }

}
