//import from angular core
import {
    Component,
    OnInit,
    TemplateRef,
    ViewChild,
    Input,
    Output,
    EventEmitter,
    ElementRef,
  } from "@angular/core";
  
  // import from services
  import { SortParameter, PagedSortResponse } from "app/services/dto-base";
  import { SongHttpClient } from "app/services/song/song-service";
  
  //import from ui lib
  import { MatSort } from "@angular/material/sort";
  import { MatPaginator, PageEvent } from "@angular/material/paginator";
  
  // import from component custom
  import { SearchInputComponent } from "../search-input/search-input.component";
  
  // import from utils
  import { lang } from "../../../@language/language";
  
  @Component({
    selector: "ngx-confirm-dialog",
    templateUrl: "./confirm-dialog.component.html",
  })
  export class ConfirmDialogComponent implements OnInit {

    @Input("msg") msg: string;
    //@ViewChild('input', { static: true }) input: ElementRef;
    @Output() onConfirm: EventEmitter<any> = new EventEmitter<any>();
  
    //public variables
    lang = lang;
    isLoading = true;
  
    constructor() {
    }
  
    ngOnInit(): void {
    }

    ngAfterViewInit() {
    }


  
}