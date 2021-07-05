import { FileResponse, FileParameter, SwaggerResponse, HOST_API, ApiException,ServiceBaseHttpClient } from "../service-base"
import { Injectable,InjectionToken,Inject,Optional} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {SortParameter}  from "../dto-base" 
export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

@Injectable({
    providedIn: 'root',
    })
    export class ItemHttpClient extends ServiceBaseHttpClient {
        protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;
    
        constructor(@Inject(HttpClient) http: HttpClient,@Optional() @Inject(API_BASE_URL) baseUrl?: string) {
            super(http,"Item");
        } 
        
        updatePriceDiscount(id:number,price : number,discount:number): Promise<any> {
            let url_ = this.basePrefix + "/InitRequestPayment?ItemId=";
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