//import from angular core
import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";

// import from services
import { SortParameter, PagedSortResponse } from "app/services/dto-base";
import { TypeHttpClient } from "app/services/type/type-service";

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
  selector: "ngx-type",
  templateUrl: "./type.component.html",
  styleUrls: ["./type.component.scss"],
})
export class TypeComponent implements OnInit {

  //public variables
  lang = lang;
  isLoading = true;
  service:any;

  //table data
  cols = ['id','thumbnail','name','dateCreate','action']
  stringInput = lang.searchBar.placeHolerderSong

  constructor(public typeService: TypeHttpClient,public songDetailDialog : MatDialog) {
    this.service = typeService
  }

  ngOnInit(): void {
  }
  onClickSong(songId:any)
  {
    this.typeService.getById(songId).then(res=>{
      // this.songDetailDialog.open(SongDetailDialogComponent,{data:res.data})
    })
  }
}
