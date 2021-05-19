//import { HOST_API } from "app/service/serviceBase";
import { FileResponse, FileParameter, SwaggerResponse, HOST_API, ApiException } from "../ServiceBase"
import { Injectable,InjectionToken,Inject,Optional} from '@angular/core';
import {
    ChangePasswordCommand,
    LoginCommand,
    ResetPasswordCommand,
    ResetPasswordRequest,
    SendCodeResetPasswordCommand,
    UserLoginRequest
}
    from "./AuthDTOs"
import { HttpClient } from "@angular/common/http";
export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');
@Injectable({
    providedIn: 'root',
    })
export class AdminHttpClient {
    //private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private http: HttpClient;

    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Optional() @Inject(API_BASE_URL) baseUrl?: string, http?: HttpClient) {
        this.http = http ? http : <any>window;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : HOST_API;
    }

    login(rq: LoginCommand): Promise<any> {
        let url_ = this.baseUrl + "/api/v1/Admin/Login";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(rq);

        let options_ = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        };

        return fetch(url_, options_).then(_response => _response.json())
    }

    changePassword(rq: ChangePasswordCommand): Promise<any>  {
        let url_ = this.baseUrl + "/api/v1/Admin/ChangePassword";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(rq);

        let options_ = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        };

        return fetch(url_, options_).then(_response => _response.json())
    }

    sendCodeResetPassword(rq: SendCodeResetPasswordCommand): Promise<any>  {
        let url_ = this.baseUrl + "/api/v1/Admin/SendCodeResetPassword";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(rq);

        let options_ = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        };

        return fetch(url_, options_).then(_response => _response.json())
    }

    resetPassword(rq: ResetPasswordCommand): Promise<any>  {
        let url_ = this.baseUrl + "/api/v1/Admin/ResetPassword";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(rq);

        let options_ = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        };

        return fetch(url_, options_).then(_response => _response.json())
    }
}
