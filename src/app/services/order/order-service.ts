import { FileResponse, FileParameter, SwaggerResponse, HOST_API, ApiException,ServiceBaseHttpClient } from "../service-base"
import { Injectable,InjectionToken,Inject,Optional} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {SortParameter}  from "../dto-base" 
export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

@Injectable({
    providedIn: 'root',
    })
    export class OrderHttpClient extends ServiceBaseHttpClient {
        protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;
    
        constructor(@Inject(HttpClient) http: HttpClient,@Optional() @Inject(API_BASE_URL) baseUrl?: string) {
            super(http,"Order");
        } 
        
        getMyOrder(sortParameter :SortParameter): Promise<any> {
            let url_ = this.basePrefix + "/MyOrder?";
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
    
            return this.http.request("GET",url_, options_).toPromise();
        }
        initRequestPayment(ItemId : number): Promise<any> {
            let url_ = this.basePrefix + "/InitRequestPayment?ItemId="+ItemId;
            url_ = url_.replace(/[?&]$/, "");  
            let options_ = {
                method: "POST",
                headers: {
                    "Accept": "application/json"
                }
            };
            return this.http.request('post',url_, options_).toPromise()
        }

    }