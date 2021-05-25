import { FileResponse, FileParameter, SwaggerResponse, HOST_API, ApiException } from "../service-base"
import { Injectable,InjectionToken,Inject,Optional} from '@angular/core';
import {
    CommentCommand
}
    from "./song-dto"
import { HttpClient } from "@angular/common/http";
import {SortParameter}  from "../dto-base" 
export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');
@Injectable({
    providedIn: 'root',
    })
    export class SongHttpClient {
        private http: HttpClient;
        private baseUrl: string;
        protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;
    
        constructor(@Inject(HttpClient) http: HttpClient,@Optional() @Inject(API_BASE_URL) baseUrl?: string) {
            this.http = http;
            this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "https://localhost:5001";
        }
    
        get(sortParameter :SortParameter): Promise<any> {
            let url_ = this.baseUrl + "/api/v1/Song?";
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
    
        create(name: string | null | undefined, description: string | null | undefined, lyric: FileParameter | null | undefined, duration: number | undefined, thumbnail: FileParameter | null | undefined, fileMusic: FileParameter | null | undefined, isPublic: boolean | undefined): Promise<any> {
            let url_ = this.baseUrl + "/api/v1/Song";
            url_ = url_.replace(/[?&]$/, "");
    
            const content_ = new FormData();
            if (name !== null && name !== undefined)
                content_.append("Name", name.toString());
            if (description !== null && description !== undefined)
                content_.append("Description", description.toString());
            if (lyric !== null && lyric !== undefined)
                content_.append("Lyric", lyric.data, lyric.fileName ? lyric.fileName : "Lyric");
            if (duration === null || duration === undefined)
                throw new Error("The parameter 'duration' cannot be null.");
            else
                content_.append("Duration", duration.toString());
            if (thumbnail !== null && thumbnail !== undefined)
                content_.append("Thumbnail", thumbnail.data, thumbnail.fileName ? thumbnail.fileName : "Thumbnail");
            if (fileMusic !== null && fileMusic !== undefined)
                content_.append("FileMusic", fileMusic.data, fileMusic.fileName ? fileMusic.fileName : "FileMusic");
            if (isPublic === null || isPublic === undefined)
                throw new Error("The parameter 'isPublic' cannot be null.");
            else
                content_.append("IsPublic", isPublic.toString());
    
            let options_ = {
                body: content_,
                method: "POST",
                headers: {
                    "Accept": "application/json"
                }
            };
    
            return fetch(url_, options_).then(_response => _response.json())
        }
    
        update(id: number | undefined, name: string | null | undefined, description: string | null | undefined, lyric: FileParameter | null | undefined, duration: number | undefined, isPublic: boolean | undefined, thumbnail: FileParameter | null | undefined, fileMusic: FileParameter | null | undefined, types: number[] | null | undefined, tags: number[] | null | undefined): Promise<any> {
            let url_ = this.baseUrl + "/api/v1/Song?";
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
            if (lyric !== null && lyric !== undefined)
                content_.append("Lyric", lyric.data, lyric.fileName ? lyric.fileName : "Lyric");
            if (duration === null || duration === undefined)
                throw new Error("The parameter 'duration' cannot be null.");
            else
                content_.append("Duration", duration.toString());
            if (isPublic === null || isPublic === undefined)
                throw new Error("The parameter 'isPublic' cannot be null.");
            else
                content_.append("IsPublic", isPublic.toString());
            if (thumbnail !== null && thumbnail !== undefined)
                content_.append("Thumbnail", thumbnail.data, thumbnail.fileName ? thumbnail.fileName : "Thumbnail");
            if (fileMusic !== null && fileMusic !== undefined)
                content_.append("FileMusic", fileMusic.data, fileMusic.fileName ? fileMusic.fileName : "FileMusic");
            if (types !== null && types !== undefined)
                types.forEach(item_ => content_.append("Types", item_.toString()));
            if (tags !== null && tags !== undefined)
                tags.forEach(item_ => content_.append("Tags", item_.toString()));
    
            let options_ = {
                body: content_,
                method: "PUT",
                headers: {
                    "Accept": "application/json"
                }
            };
    
            return fetch(url_, options_).then(_response => _response.json())
        }
    
        delete(id: number | undefined): Promise<any> {
            let url_ = this.baseUrl + "/api/v1/Song?";
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
    
            return fetch(url_, options_).then(_response => _response.json())
        }
    
        getById(id: number | undefined): Promise<any> {
            let url_ = this.baseUrl + "/api/v1/Song/ById?";
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
            let url_ = this.baseUrl + "/api/v1/Song/ByListId?";
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
            let url_ = this.baseUrl + "/api/v1/Song/ByName?";
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
    
    
        getMySong(sortParameter :SortParameter): Promise<any> {
            let url_ = this.baseUrl + "/api/v1/Song/MySong?";
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
    
    
        getComment(songId: number | undefined, sortParameter :SortParameter): Promise<any> {
            let url_ = this.baseUrl + "/api/v1/Song/Comment?";
            if (songId === null)
                throw new Error("The parameter 'songId' cannot be null.");
            else if (songId !== undefined)
                url_ += "SongId=" + encodeURIComponent("" + songId) + "&";
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
    
    
        comment(rq: CommentCommand): Promise<any> {
            let url_ = this.baseUrl + "/api/v1/Song/Comment";
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
    
    
        checkLike(songId: number | undefined): Promise<any> {
            let url_ = this.baseUrl + "/api/v1/Song/CheckLike?";
            if (songId === null)
                throw new Error("The parameter 'songId' cannot be null.");
            else if (songId !== undefined)
                url_ += "SongId=" + encodeURIComponent("" + songId) + "&";
            url_ = url_.replace(/[?&]$/, "");
    
            let options_ = {
                method: "GET",
                headers: {
                    "Accept": "application/json"
                }
            };
    
            return fetch(url_, options_).then(_response => _response.json())
        }
    
    
        listen(songId: number | undefined, userId: number | undefined): Promise<any> {
            let url_ = this.baseUrl + "/api/v1/Song/Listen?";
            if (songId === null)
                throw new Error("The parameter 'songId' cannot be null.");
            else if (songId !== undefined)
                url_ += "SongId=" + encodeURIComponent("" + songId) + "&";
            if (userId === null)
                throw new Error("The parameter 'userId' cannot be null.");
            else if (userId !== undefined)
                url_ += "UserId=" + encodeURIComponent("" + userId) + "&";
            url_ = url_.replace(/[?&]$/, "");
    
            let options_ = {
                method: "PUT",
                headers: {
                    "Accept": "application/json"
                }
            };
    
            return fetch(url_, options_).then(_response => _response.json())
        }
    
    
        predict(id: number | undefined, isVN: boolean | undefined): Promise<any> {
            let url_ = this.baseUrl + "/api/v1/Song/Predict?";
            if (id === null)
                throw new Error("The parameter 'id' cannot be null.");
            else if (id !== undefined)
                url_ += "Id=" + encodeURIComponent("" + id) + "&";
            if (isVN === null)
                throw new Error("The parameter 'isVN' cannot be null.");
            else if (isVN !== undefined)
                url_ += "IsVN=" + encodeURIComponent("" + isVN) + "&";
            url_ = url_.replace(/[?&]$/, "");
    
            let options_ = {
                method: "GET",
                headers: {
                    "Accept": "application/json"
                }
            };
    
            return fetch(url_, options_).then(_response => _response.json())
        }
    
    
        updateType(songId: number, typeId: number): Promise<any> {
            let url_ = this.baseUrl + "/api/v1/Song/{SongId}/UpdateType/{TypeId}";
            if (songId === undefined || songId === null)
                throw new Error("The parameter 'songId' must be defined.");
            url_ = url_.replace("{SongId}", encodeURIComponent("" + songId));
            if (typeId === undefined || typeId === null)
                throw new Error("The parameter 'typeId' must be defined.");
            url_ = url_.replace("{TypeId}", encodeURIComponent("" + typeId));
            url_ = url_.replace(/[?&]$/, "");
    
            let options_ = {
                method: "PUT",
                headers: {
                    "Accept": "application/json"
                }
            };
    
            return fetch(url_, options_).then(_response => _response.json())
        }
    
    
        updateTag(songId: number, tagId: number): Promise<any> {
            let url_ = this.baseUrl + "/api/v1/Song/{SongId}/UpdateTag/{TagId}";
            if (songId === undefined || songId === null)
                throw new Error("The parameter 'songId' must be defined.");
            url_ = url_.replace("{SongId}", encodeURIComponent("" + songId));
            if (tagId === undefined || tagId === null)
                throw new Error("The parameter 'tagId' must be defined.");
            url_ = url_.replace("{TagId}", encodeURIComponent("" + tagId));
            url_ = url_.replace(/[?&]$/, "");
    
            let options_ = {
                method: "PUT",
                headers: {
                    "Accept": "application/json"
                }
            };
    
            return fetch(url_, options_).then(_response => _response.json())
        }
    
    
        updateComposer(songId: number, composerId: number): Promise<any> {
            let url_ = this.baseUrl + "/api/v1/Song/{SongId}/UpdateComposer/{ComposerId}";
            if (songId === undefined || songId === null)
                throw new Error("The parameter 'songId' must be defined.");
            url_ = url_.replace("{SongId}", encodeURIComponent("" + songId));
            if (composerId === undefined || composerId === null)
                throw new Error("The parameter 'composerId' must be defined.");
            url_ = url_.replace("{ComposerId}", encodeURIComponent("" + composerId));
            url_ = url_.replace(/[?&]$/, "");
    
            let options_ = {
                method: "PUT",
                headers: {
                    "Accept": "application/json"
                }
            };
    
            return fetch(url_, options_).then(_response => _response.json())
        }
    
    
        updateSinger(songId: number, singerId: number): Promise<any> {
            let url_ = this.baseUrl + "/api/v1/Song/{SongId}/UpdateSinger/{SingerId}";
            if (songId === undefined || songId === null)
                throw new Error("The parameter 'songId' must be defined.");
            url_ = url_.replace("{SongId}", encodeURIComponent("" + songId));
            if (singerId === undefined || singerId === null)
                throw new Error("The parameter 'singerId' must be defined.");
            url_ = url_.replace("{SingerId}", encodeURIComponent("" + singerId));
            url_ = url_.replace(/[?&]$/, "");
    
            let options_ = {
                method: "PUT",
                headers: {
                    "Accept": "application/json"
                }
            };
    
            return fetch(url_, options_).then(_response => _response.json())
        }
    
    
        reaction(idSong: number | undefined, like: boolean | undefined): Promise<any> {
            let url_ = this.baseUrl + "/api/v1/Song/Reaction?";
            if (idSong === null)
                throw new Error("The parameter 'idSong' cannot be null.");
            else if (idSong !== undefined)
                url_ += "IdSong=" + encodeURIComponent("" + idSong) + "&";
            if (like === null)
                throw new Error("The parameter 'like' cannot be null.");
            else if (like !== undefined)
                url_ += "Like=" + encodeURIComponent("" + like) + "&";
            url_ = url_.replace(/[?&]$/, "");
    
            let options_ = {
                method: "POST",
                headers: {
                    "Accept": "application/json"
                }
            };
    
            return fetch(url_, options_).then(_response => _response.json())
        }
    
    }