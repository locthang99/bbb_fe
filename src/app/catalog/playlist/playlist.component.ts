//import from angular core
import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";

// import from services
import { SortParameter, PagedSortResponse } from "app/services/dto-base";
import { PlaylistHttpClient } from "app/services/playlist/playlist-service";

//import from ui lib
import { MatSort } from "@angular/material/sort";
import { MatPaginator, PageEvent } from "@angular/material/paginator";
import {MatDialog,MAT_DIALOG_DATA} from '@angular/material/dialog';

// import from component custom
import { SearchInputComponent } from "../../@theme/components/search-input/search-input.component";
import {TableDataComponent} from "../../@theme/components/table-data/table-data.component";
import {PlaylistDetailDialogComponent} from "./playlist-detail/playlist-detail.component"

// import from utils
import { lang } from "../../@language/language";
@Component({
  selector: "ngx-playlist",
  templateUrl: "./playlist.component.html",
  styleUrls: ["./playlist.component.scss"],
})
export class PlaylistComponent implements OnInit {
 
  //public variables
  lang = lang;
  isLoading = true;
  service:any;

  //table data
  cols = ['id','thumbnail','name','owner','totalSong','dateCreate','action']
  stringInput = lang.searchBar.placeHolerderPlaylist

  constructor(public playlistService: PlaylistHttpClient,public playlistDetailDialog : MatDialog) {
    this.service = playlistService
  }

  ngOnInit(): void {
  }
  onClickPlaylist(playlistId:any)
  {
    this.playlistService.getById(playlistId).then(res=>{
      this.playlistDetailDialog.open(PlaylistDetailDialogComponent,{data:res.data})
    })
  }
}
