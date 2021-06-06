//import from angular core
import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";

// import from services
import { SortParameter, PagedSortResponse } from "app/services/dto-base";
import { TagHttpClient } from "../../services/tag/tag-service";

//import from ui lib
import { MatSort } from "@angular/material/sort";
import { MatPaginator, PageEvent } from "@angular/material/paginator";
import {MatDialog,MAT_DIALOG_DATA} from '@angular/material/dialog';

// import from component custom
import { SearchInputComponent } from "../../@theme/components/search-input/search-input.component";
import {TableDataComponent} from "../../@theme/components/table-data/table-data.component";

// import from utils
import { lang } from "../../@language/language";

@Component({
  selector: "ngx-tag",
  templateUrl: "./tag.component.html",
  styleUrls: ["./tag.component.scss"],
})
export class TagComponent implements OnInit {

  //public variables
  lang = lang;
  isLoading = true;
  service:any;

  //table data
  cols = ['id','name','owner','dateCreate','action']
  stringInput = lang.searchBar.placeHolerderTag

  constructor(public tagService: TagHttpClient,public songDetailDialog : MatDialog) {
    this.service = tagService
  }

  ngOnInit(): void {
  }
  onClickTag(songId:any)
  {
    this.tagService.getById(songId).then(res=>{
      // this.songDetailDialog.open(SongDetailDialogComponent,{data:res.data})
    })
  }
}
