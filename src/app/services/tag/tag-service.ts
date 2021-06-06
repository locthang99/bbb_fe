import { FileResponse, FileParameter, SwaggerResponse, HOST_API, ApiException,ServiceBaseHttpClient } from "../service-base"
import { Injectable,InjectionToken,Inject,Optional} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {SortParameter}  from "../dto-base" 
export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

@Injectable({
    providedIn: 'root',
    })
    export class TagHttpClient extends ServiceBaseHttpClient {
        protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;
    
        constructor(@Inject(HttpClient) http: HttpClient,@Optional() @Inject(API_BASE_URL) baseUrl?: string) {
            super(http,"Tag");
        } 
    
        create(name: string | null | undefined, description: string | null | undefined): Promise<any> {
            let url_ = this.basePrefix + "";
            url_ = url_.replace(/[?&]$/, "");
    
            const content_ = new FormData();
            if (name !== null && name !== undefined)
                content_.append("Name", name.toString());
            if (description !== null && description !== undefined)
                content_.append("Description", description.toString());
    
            let options_ = {
                body: content_,
                method: "POST",
                headers: {
                    "Accept": "application/json"
                }
            };
            console.log(content_)
            return this.http.request('post',url_, options_).toPromise()
        }
    
        update(id: number | undefined, name: string | null | undefined, description: string | null | undefined): Promise<any> {
            let url_ = this.basePrefix + "?";
            if (id === null)
                throw new Error("The parameter 'id' cannot be null.");
            else if (id !== undefined)
                url_ += "Id=" + encodeURIComponent("" + id) + "&";
            url_ = url_.replace(/[?&]$/, "");
    
            const content_ = new FormData();
            if (name !== null && name !== undefined)
                content_.append("Name", name.toString());
            if (description !== null && description !== undefined)
                content_.append("Description", description.toString());
            let options_ = {
                body: content_,
                method: "PUT",
                headers: {
                    "Accept": "application/json"
                }
            };
    
            return fetch(url_, options_).then(_response => _response.json())
        }
    }