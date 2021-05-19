import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import { Observable, throwError as _observableThrow, of as _observableOf } from 'rxjs';
import { Injectable, Inject, Optional, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';
import{FileResponse,blobToText,throwException,HOST_API,FileParameter} from '../serviceBase'
import {UserLoginRequest} from './AcountDto'

import * as moment from 'moment';

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');
@Injectable({
    providedIn: 'root',
  })
  export class UsersClient {
    private http: HttpClient;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : HOST_API;
    }

    login(rq: UserLoginRequest): Observable<FileResponse | null> {
        let url_ = this.baseUrl + "/api/Users/Login";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(rq);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "json",
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer "+localStorage.getItem('token')
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processLogin(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processLogin(<any>response_);
                } catch (e) {
                    return <Observable<FileResponse | null>><any>_observableThrow(e);
                }
            } else
                return <Observable<FileResponse | null>><any>_observableThrow(response_);
        }));
    }

    protected processLogin(response: HttpResponseBase): Observable<FileResponse | null> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status !==500) {
            const contentDisposition = response.headers ? response.headers.get("content-disposition") : undefined;
            const fileNameMatch = contentDisposition ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition) : undefined;
            const fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[1] : undefined;
            return _observableOf({ fileName: fileName, data: <any>responseBlob, status: status, headers: _headers });
        }
        else {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        //return _observableOf<FileResponse | null>(<any>null);
    }

    loginFB(token: string | null | undefined): Observable<FileResponse | null> {
        let url_ = this.baseUrl + "/api/Users/LoginWithFacebook?";
        if (token !== undefined && token !== null)
            url_ += "Token=" + encodeURIComponent("" + token) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "json",
            headers: new HttpHeaders({
                "Accept": "application/json",
                "Authorization": "Bearer "+localStorage.getItem('token')
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processLoginFB(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processLoginFB(<any>response_);
                } catch (e) {
                    return <Observable<FileResponse | null>><any>_observableThrow(e);
                }
            } else
                return <Observable<FileResponse | null>><any>_observableThrow(response_);
        }));
    }

    protected processLoginFB(response: HttpResponseBase): Observable<FileResponse | null> {
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

    register(firstName: string | null | undefined, lastName: string | null | undefined, dob: string | undefined, email: string | null | undefined, phoneNumber: string | null | undefined, user: string | null | undefined, password: string | null | undefined, confirmPassword: string | null | undefined, thumbnail: FileParameter | null | undefined): Observable<FileResponse | null> {
        let url_ = this.baseUrl + "/api/Users/Register";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = new FormData();
        if (firstName !== null && firstName !== undefined)
            content_.append("FirstName", firstName.toString());
        if (lastName !== null && lastName !== undefined)
            content_.append("LastName", lastName.toString());
        if (dob !== null || dob !== undefined)
            content_.append("Dob", dob.toString());
        if (email !== null && email !== undefined)
            content_.append("Email", email.toString());
        if (phoneNumber !== null && phoneNumber !== undefined)
            content_.append("PhoneNumber", phoneNumber.toString());
        if (user !== null && user !== undefined)
            content_.append("User", user.toString());
        if (password !== null && password !== undefined)
            content_.append("Password", password.toString());
        if (confirmPassword !== null && confirmPassword !== undefined)
            content_.append("ConfirmPassword", confirmPassword.toString());
        if (thumbnail !== null && thumbnail !== undefined)
            content_.append("Thumbnail", thumbnail.data, thumbnail.fileName ? thumbnail.fileName : "Thumbnail");

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "json",
            headers: new HttpHeaders({
                "Accept": "application/json",
                "Authorization": "Bearer "+localStorage.getItem('token')
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processRegister(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processRegister(<any>response_);
                } catch (e) {
                    return <Observable<FileResponse | null>><any>_observableThrow(e);
                }
            } else
                return <Observable<FileResponse | null>><any>_observableThrow(response_);
        }));
    }

    protected processRegister(response: HttpResponseBase): Observable<FileResponse | null> {
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

    getAllUser(index: number | undefined, pageSize: number | undefined): Observable<FileResponse | null> {
        let url_ = this.baseUrl + "/api/Users?";
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
                "Authorization": "Bearer "+localStorage.getItem('token')
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetAllUser(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetAllUser(<any>response_);
                } catch (e) {
                    return <Observable<FileResponse | null>><any>_observableThrow(e);
                }
            } else
                return <Observable<FileResponse | null>><any>_observableThrow(response_);
        }));
    }

    protected processGetAllUser(response: HttpResponseBase): Observable<FileResponse | null> {
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

    update(id: string | undefined, dob: string | undefined, email: string | null | undefined, firstName: string | null | undefined, lastName: string | null | undefined, phoneNumber: string | null | undefined, thumbnail: FileParameter | null | undefined): Observable<FileResponse | null> {
        let url_ = this.baseUrl + "/api/Users?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "Id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = new FormData();
        if (dob !== null || dob !== undefined)
            content_.append("Dob", dob.toString());
        if (email !== null && email !== undefined)
            content_.append("Email", email.toString());
        if (firstName !== null && firstName !== undefined)
            content_.append("FirstName", firstName.toString());
        if (lastName !== null && lastName !== undefined)
            content_.append("LastName", lastName.toString());
        if (phoneNumber !== null && phoneNumber !== undefined)
            content_.append("PhoneNumber", phoneNumber.toString());
        if (thumbnail !== null && thumbnail !== undefined)
            content_.append("Thumbnail", thumbnail.data, thumbnail.fileName ? thumbnail.fileName : "Thumbnail");

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "json",
            headers: new HttpHeaders({
                "Accept": "application/json",
                "Authorization": "Bearer "+localStorage.getItem('token')
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

    delete(id: string | undefined): Observable<FileResponse | null> {
        let url_ = this.baseUrl + "/api/Users?";
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
                "Authorization": "Bearer "+localStorage.getItem('token')
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

    setRole(id: string | undefined ,roleName: string | undefined): Observable<FileResponse | null> {
        let url_ = this.baseUrl + "/api/Users/SetRole?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "Id=" + encodeURIComponent("" + id) + "&";
        if (roleName !== undefined && roleName !== null)
            url_ += "RoleName=" + encodeURIComponent("" + roleName) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "json",
            headers: new HttpHeaders({
                "Accept": "application/json",
                "Authorization": "Bearer "+localStorage.getItem('token')
            })
        };

        return this.http.request("put", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processSetRole(response_);
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

    protected processSetRole(response: HttpResponseBase): Observable<FileResponse | null> {
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

    getByUsername(userName: string | null | undefined): Observable<FileResponse | null> {
        let url_ = this.baseUrl + "/api/Users/ByUsername?";
        if (userName !== undefined && userName !== null)
            url_ += "UserName=" + encodeURIComponent("" + userName) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "json",
            headers: new HttpHeaders({
                "Accept": "application/json",
                "Authorization": "Bearer "+localStorage.getItem('token')
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetByUsername(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetByUsername(<any>response_);
                } catch (e) {
                    return <Observable<FileResponse | null>><any>_observableThrow(e);
                }
            } else
                return <Observable<FileResponse | null>><any>_observableThrow(response_);
        }));
    }

    protected processGetByUsername(response: HttpResponseBase): Observable<FileResponse | null> {
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

    getById(id: string | undefined): Observable<FileResponse | null> {
        let url_ = this.baseUrl + "/api/Users/ById?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "json",
            headers: new HttpHeaders({
                "Accept": "application/json",
                "Authorization": "Bearer "+localStorage.getItem('token')
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetById(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetById(<any>response_);
                } catch (e) {
                    return <Observable<FileResponse | null>><any>_observableThrow(e);
                }
            } else
                return <Observable<FileResponse | null>><any>_observableThrow(response_);
        }));
    }

    protected processGetById(response: HttpResponseBase): Observable<FileResponse | null> {
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

    getByPhone(listPhone: string | null | undefined, index: number | undefined, pageSize: number | undefined): Observable<FileResponse | null> {
        let url_ = this.baseUrl + "/api/Users/ByPhone?";
        if (listPhone !== undefined && listPhone !== null)
            url_ += "ListPhone=" + encodeURIComponent("" + listPhone) + "&";
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
                "Authorization": "Bearer "+localStorage.getItem('token')
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetByPhone(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetByPhone(<any>response_);
                } catch (e) {
                    return <Observable<FileResponse | null>><any>_observableThrow(e);
                }
            } else
                return <Observable<FileResponse | null>><any>_observableThrow(response_);
        }));
    }

    protected processGetByPhone(response: HttpResponseBase): Observable<FileResponse | null> {
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

    getCurrentUser(): Observable<FileResponse | null> {
        let url_ = this.baseUrl + "/api/Users/CurrentUser";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "json",
            headers: new HttpHeaders({
                "Accept": "application/json",
                "Authorization": "Bearer "+localStorage.getItem('token')
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetCurrentUser(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetCurrentUser(<any>response_);
                } catch (e) {
                    return <Observable<FileResponse | null>><any>_observableThrow(e);
                }
            } else
                return <Observable<FileResponse | null>><any>_observableThrow(response_);
        }));
    }

    protected processGetCurrentUser(response: HttpResponseBase): Observable<FileResponse | null> {
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

    getAllStatusFriend(): Observable<FileResponse | null> {
        let url_ = this.baseUrl + "/api/Users/AllStatusFriend";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "json",
            headers: new HttpHeaders({
                "Accept": "application/json",
                "Authorization": "Bearer "+localStorage.getItem('token')
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetAllStatusFriend(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetAllStatusFriend(<any>response_);
                } catch (e) {
                    return <Observable<FileResponse | null>><any>_observableThrow(e);
                }
            } else
                return <Observable<FileResponse | null>><any>_observableThrow(response_);
        }));
    }

    protected processGetAllStatusFriend(response: HttpResponseBase): Observable<FileResponse | null> {
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

    getAllFriend(): Observable<FileResponse | null> {
        let url_ = this.baseUrl + "/api/Users/AllFriend";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "json",
            headers: new HttpHeaders({
                "Accept": "application/json",
                "Authorization": "Bearer "+localStorage.getItem('token')
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetAllFriend(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetAllFriend(<any>response_);
                } catch (e) {
                    return <Observable<FileResponse | null>><any>_observableThrow(e);
                }
            } else
                return <Observable<FileResponse | null>><any>_observableThrow(response_);
        }));
    }

    protected processGetAllFriend(response: HttpResponseBase): Observable<FileResponse | null> {
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

    sendFriendRequest(receiverId: string | undefined): Observable<FileResponse | null> {
        let url_ = this.baseUrl + "/api/Users/SendFriendRequest?";
        if (receiverId === null)
            throw new Error("The parameter 'receiverId' cannot be null.");
        else if (receiverId !== undefined)
            url_ += "ReceiverId=" + encodeURIComponent("" + receiverId) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "json",
            headers: new HttpHeaders({
                "Accept": "application/json",
                "Authorization": "Bearer "+localStorage.getItem('token')
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processSendFriendRequest(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processSendFriendRequest(<any>response_);
                } catch (e) {
                    return <Observable<FileResponse | null>><any>_observableThrow(e);
                }
            } else
                return <Observable<FileResponse | null>><any>_observableThrow(response_);
        }));
    }

    protected processSendFriendRequest(response: HttpResponseBase): Observable<FileResponse | null> {
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

    acceptFriendRequest(senderId: string | undefined): Observable<FileResponse | null> {
        let url_ = this.baseUrl + "/api/Users/AcceptFriendRequest?";
        if (senderId === null)
            throw new Error("The parameter 'senderId' cannot be null.");
        else if (senderId !== undefined)
            url_ += "SenderId=" + encodeURIComponent("" + senderId) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "json",
            headers: new HttpHeaders({
                "Accept": "application/json",
                "Authorization": "Bearer "+localStorage.getItem('token')
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processAcceptFriendRequest(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processAcceptFriendRequest(<any>response_);
                } catch (e) {
                    return <Observable<FileResponse | null>><any>_observableThrow(e);
                }
            } else
                return <Observable<FileResponse | null>><any>_observableThrow(response_);
        }));
    }

    protected processAcceptFriendRequest(response: HttpResponseBase): Observable<FileResponse | null> {
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

    denyFriendRequest(senderId: string | undefined): Observable<FileResponse | null> {
        let url_ = this.baseUrl + "/api/Users/DenyFriendRequest?";
        if (senderId === null)
            throw new Error("The parameter 'senderId' cannot be null.");
        else if (senderId !== undefined)
            url_ += "SenderId=" + encodeURIComponent("" + senderId) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "json",
            headers: new HttpHeaders({
                "Accept": "application/json",
                "Authorization": "Bearer "+localStorage.getItem('token')
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processDenyFriendRequest(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processDenyFriendRequest(<any>response_);
                } catch (e) {
                    return <Observable<FileResponse | null>><any>_observableThrow(e);
                }
            } else
                return <Observable<FileResponse | null>><any>_observableThrow(response_);
        }));
    }

    protected processDenyFriendRequest(response: HttpResponseBase): Observable<FileResponse | null> {
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