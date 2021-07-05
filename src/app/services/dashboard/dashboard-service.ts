import { FileResponse, FileParameter, SwaggerResponse, HOST_API, ApiException,ServiceBaseHttpClient } from "../service-base"
import { Injectable,InjectionToken,Inject,Optional} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {SortParameter}  from "../dto-base" 
export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

@Injectable({
    providedIn: 'root',
    })
    export class DashboardHttpClient extends ServiceBaseHttpClient {
        protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;
    
        constructor(@Inject(HttpClient) http: HttpClient,@Optional() @Inject(API_BASE_URL) baseUrl?: string) {
            super(http,"Dashboard");
        } 
        getChartSong(type: string | null | undefined): Promise<any> {
            let url_ = this.basePrefix + "/ChartSong?";
            if (type !== undefined && type !== null)
                url_ += "Type=" + encodeURIComponent("" + type) + "&";
            url_ = url_.replace(/[?&]$/, "");
    
            let options_ : {
                observe: "response",
                responseType: "json",
                headers: {
                    "Accept": "application/json"
                }
            };
    
            return this.http.get(url_,options_).toPromise();
        }
    
        getChartPlaylist(type: string | null | undefined): Promise<any> {
            let url_ = this.basePrefix + "/ChartPlaylist?";
            if (type !== undefined && type !== null)
                url_ += "Type=" + encodeURIComponent("" + type) + "&";
            url_ = url_.replace(/[?&]$/, "");
    
            let options_ : {
                observe: "response",
                responseType: "json",
                headers: {
                    "Accept": "application/json"
                }
            };
    
            return this.http.get(url_,options_).toPromise();
        }
    
        getTotalPlaylist(): Promise<any> {
            let url_ = this.basePrefix + "/TotalPlaylist?";
            url_ = url_.replace(/[?&]$/, "");
    
            let options_ : {
                observe: "response",
                responseType: "json",
                headers: {
                    "Accept": "application/json"
                }
            };
    
            return this.http.get(url_,options_).toPromise();

        }

        getTotalType(): Promise<any> {
            let url_ = this.basePrefix + "/TotalType?";
            url_ = url_.replace(/[?&]$/, "");
    
            let options_ : {
                observe: "response",
                responseType: "json",
                headers: {
                    "Accept": "application/json"
                }
            };
    
            return this.http.get(url_,options_).toPromise();

        }
    
        getTotalRole(): Promise<any> {
            let url_ = this.basePrefix + "/TotalRole?";
            url_ = url_.replace(/[?&]$/, "");
    
            let options_ : {
                observe: "response",
                responseType: "json",
                headers: {
                    "Accept": "application/json"
                }
            };
    
            return this.http.get(url_,options_).toPromise();

        }


        getAll(type: string | null | undefined): Promise<any> {
            let url_ = this.basePrefix + "/ChartAll?";
            if (type !== undefined && type !== null)
                url_ += "Type=" + encodeURIComponent("" + type) + "&";
            url_ = url_.replace(/[?&]$/, "");
    
            let options_ : {
                observe: "response",
                responseType: "json",
                headers: {
                    "Accept": "application/json"
                }
            };
    
            
    
            return this.http.get(url_,options_).toPromise();

        }
    
        getAge(type: string | null | undefined): Promise<any> {
            let url_ = this.basePrefix + "/ChartAge?";
            if (type !== undefined && type !== null)
                url_ += "Type=" + encodeURIComponent("" + type) + "&";
            url_ = url_.replace(/[?&]$/, "");
    
            let options_ : {
                observe: "response",
                responseType: "json",
                headers: {
                    "Accept": "application/json"
                }
            };
       
            return this.http.get(url_,options_).toPromise();
        }
    
        getCreateUser(type: string | null | undefined): Promise<any> {
            let url_ = this.basePrefix + "/ChartCreateUser?";
            if (type !== undefined && type !== null)
                url_ += "Type=" + encodeURIComponent("" + type) + "&";
            url_ = url_.replace(/[?&]$/, "");
    
            let options_ : {
                observe: "response",
                responseType: "json",
                headers: {
                    "Accept": "application/json"
                }
            };
                  
            return this.http.get(url_,options_).toPromise();
        }

        getChartReactionMySong(type: string | null | undefined): Promise<any> {
            let url_ = this.basePrefix + "/ChartRectionMySong?";
            if (type !== undefined && type !== null)
                url_ += "Type=" + encodeURIComponent("" + type) + "&";
            url_ = url_.replace(/[?&]$/, "");
    
            let options_ : {
                observe: "response",
                responseType: "json",
                headers: {
                    "Accept": "application/json"
                }
            };
    
            return this.http.get(url_,options_).toPromise();
        }

        getAllInfoMySong(): Promise<any> {
            let url_ = this.basePrefix + "/GetAllInfoMySong?";
            url_ = url_.replace(/[?&]$/, "");
    
            let options_ : {
                observe: "response",
                responseType: "json",
                headers: {
                    "Accept": "application/json"
                }
            };
    
            return this.http.get(url_,options_).toPromise();
        }

        getChartAllUser(): Promise<any> {
            let url_ = this.basePrefix + "/GetChartAllUser?";
            url_ = url_.replace(/[?&]$/, "");
    
            let options_ : {
                observe: "response",
                responseType: "json",
                headers: {
                    "Accept": "application/json"
                }
            };
    
            return this.http.get(url_,options_).toPromise();
        }
    }