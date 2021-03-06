import { FileResponse, FileParameter, SwaggerResponse, HOST_API, ApiException,ServiceBaseHttpClient } from "../service-base"
import { Injectable, InjectionToken, Inject, Optional } from '@angular/core';
import {
    CommentCommand
}
    from "./playlist-dto"
import { HttpClient } from "@angular/common/http";
import { SortParameter } from "../dto-base"
export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');
@Injectable({
    providedIn: 'root',
})
export class PlaylistHttpClient extends ServiceBaseHttpClient {

    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient,@Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        super(http,"Playlist");
    } 

    create(name: string | null | undefined, description: string | null | undefined, thumbnail: FileParameter | null | undefined): Promise<any> {
        let url_ = this.basePrefix + "";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = new FormData();
        if (name !== null && name !== undefined)
            content_.append("Name", name.toString());
        if (description !== null && description !== undefined)
            content_.append("Description", description.toString());
        if (thumbnail.data !== null)
            content_.append("Thumbnail", thumbnail.data, thumbnail.fileName ? thumbnail.fileName : "Thumbnail");

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

    update(id: number | undefined, name: string | null | undefined, description: string | null | undefined, lyric: FileParameter | null | undefined, duration: number | undefined, isPublic: boolean | undefined, thumbnail: FileParameter | null | undefined, fileMusic: FileParameter | null | undefined, types: number[] | null | undefined, tags: number[] | null | undefined): Promise<any> {
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

    getSong(idPlaylist: number | undefined, sortParameter: SortParameter): Promise<any> {
        let url_ = this.basePrefix + "/ListSong?";
        if (idPlaylist === null)
            throw new Error("The parameter 'idPlaylist' cannot be null.");
        else if (idPlaylist !== undefined)
            url_ += "IdPlaylist=" + encodeURIComponent("" + idPlaylist) + "&";
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

        return this.http.get(url_, options_).toPromise();
    }

    pushSong(idPlaylist: number | undefined,idSong: number | undefined)
    {
        let url_ = this.basePrefix + "/PushSong?";
        if (idPlaylist === null)
            throw new Error("The parameter 'idPlaylist' cannot be null.");
        else if (idPlaylist !== undefined)
            url_ += "IdPlaylist=" + encodeURIComponent("" + idPlaylist) + "&";
        if (idSong === null)
            throw new Error("The parameter 'idSong' cannot be null.");
        else if (idSong !== undefined)
            url_ += "IdSong=" + encodeURIComponent("" + idSong);
        url_ = url_.replace(/[?&]$/, "");

        let options_ = {
            method: "POST",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.request('post',url_, options_).toPromise();
    }

    removeSong(idPlaylist: number | undefined,idSong: number | undefined)
    {
        let url_ = this.basePrefix + "/RemoveSong?";
        if (idPlaylist === null)
            throw new Error("The parameter 'idPlaylist' cannot be null.");
        else if (idPlaylist !== undefined)
            url_ += "IdPlaylist=" + encodeURIComponent("" + idPlaylist) + "&";
        if (idSong === null)
            throw new Error("The parameter 'idSong' cannot be null.");
        else if (idSong !== undefined)
            url_ += "IdSong=" + encodeURIComponent("" + idSong);
        url_ = url_.replace(/[?&]$/, "");

        let options_ = {
            method: "DELETE",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.request('delete',url_, options_).toPromise();
    }

}