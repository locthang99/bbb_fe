import { FileResponse, FileParameter, SwaggerResponse, HOST_API, ApiException,ServiceBaseHttpClient } from "../service-base"
import { Injectable,InjectionToken,Inject,Optional} from '@angular/core';
import { HttpClient } from "@angular/common/http";
export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

@Injectable({
    providedIn: 'root',
    })
    export class DeeplearningHttpClient extends ServiceBaseHttpClient {
        protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;
    
        constructor(@Inject(HttpClient) http: HttpClient,@Optional() @Inject(API_BASE_URL) baseUrl?: string) {
            super(http,"Deeplearning");
        } 
        getModels(): Promise<any>
        {
            let url_ = this.basePrefix + "/GetModels";
            url_ = url_.replace(/[?&]$/, "");
    
            let options_ = {
                method: "GET",
                headers: {
                    "Accept": "application/json"
                }
            };
            return this.http.get(url_, options_).toPromise()
        }

        predictSong(fileAudio: FileParameter | null | undefined, type : number): Promise<any> {
            let rg = type==1? "VN" : "AU"
            let url_ = this.basePrefix + "/PredictTemp_Song"+rg;
            url_ = url_.replace(/[?&]$/, "");
    
            const content_ = new FormData();
            if (fileAudio.data !== null)
                content_.append("file", fileAudio.data, fileAudio.fileName ? fileAudio.fileName : "FileAudio");
    
            let options_ = {
                body: content_,
                method: "POST",
                headers: {
                    "Accept": "application/json"
                }
            };
            return this.http.request('post',url_, options_).toPromise()
        }

    }