
//import from angular core
import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";

// import from services
import { SortParameter, PagedSortResponse } from "app/services/dto-base";
import { SongHttpClient } from "app/services/song/song-service";

//import from ui lib
import { MatSort } from "@angular/material/sort";
import { MatPaginator, PageEvent } from "@angular/material/paginator";
import {MatDialog,MAT_DIALOG_DATA} from '@angular/material/dialog';

// import from component custom
import { SearchInputComponent } from "../../@theme/components/search-input/search-input.component";
import {TableDataComponent} from "../../@theme/components/table-data/table-data.component";
import {SongDetailDialogComponent} from "app/catalog/song/song-detail/song-detail.component"

// import from utils
import { lang } from "../../@language/language";

@Component({
  selector: 'ngx-list-my-song',
  templateUrl: './list-my-song.component.html',
  styleUrls: ['./list-my-song.component.scss']
})
export class ListMySongComponent implements OnInit {

  //public variables
  lang = lang;
  isLoading = true;
  service:any;

  //table data
  cols = ['id','thumbnail','name','duration','singers','dateCreate','action']
  stringInput = lang.searchBar.placeHolerderSong

  constructor(public songService: SongHttpClient,public songDetailDialog : MatDialog) {
    this.service = songService
  }

  ngOnInit(): void {
  }
  onClickSong(songId:any)
  {
    this.songService.getById(songId).then(res=>{
      this.songDetailDialog.open(SongDetailDialogComponent,{data:res.data})
    })
  }
}
