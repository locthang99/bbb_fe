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
import {MatDialog} from "@angular/material/dialog"

// import from component custom
import { SearchInputComponent } from "../search-input/search-input.component";
import { ConfirmDialogComponent } from "..//confirm-dialog/confirm-dialog.component";


// import from utils
import { lang } from "../../../@language/language";
import { id } from "@swimlane/ngx-charts";

@Component({
  selector: "ngx-table-data",
  styleUrls: ["./table-data.component.scss"],
  templateUrl: "./table-data.component.html",
})
export class TableDataComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @Input("services") services: any;
  @Input("placeholderString") placeholderString: string;
  @Input("inputColumns") inputColumns: string[];
  @Input('typeTable') typeTable:string;
  //@ViewChild('input', { static: true }) input: ElementRef;
  @Output() onClickRow: EventEmitter<string> = new EventEmitter<string>();

  //public variables
  lang = lang;
  isLoading = true;

  //table data
  pageEvent: PageEvent;
  dataSource: PagedSortResponse;
  sortParameter: SortParameter;

  // item select
  keyword: string;
  IdSelect: number;

  constructor(public dialogService: MatDialog) {
    console.log("init");
    this.dataSource = new PagedSortResponse();
    this.sortParameter = new SortParameter();
  }

  ngOnInit(): void {
    console.log("init");
    this.isLoading = true;
    this.services.getByName(this.keyword,this.sortParameter).then((res: any) => {
      this.dataSource = res;
      this.isLoading = false;
    });
  }
  
  loaData()
  {
    this.isLoading = true;
    this.services.getByName(this.keyword,this.sortParameter).then((res: any) => {
      this.dataSource = res;
      this.isLoading = false;
    });
  }

  ngAfterViewInit() {
    this.sort.sortChange.subscribe(() => {
      this.sortParameter.sortBy = this.sort.active;
      this.sort.start = this.sort.start === "asc" ? "desc" : "asc";
      this.sortParameter.sortASC = this.sort.start === "asc" ? true : false;
      this.loaData()
    });
  }

  onChangePaginator(event: PageEvent) {
    this.sortParameter.pageSize = event.pageSize;
    this.sortParameter.index = event.pageIndex;
    this.loaData()
  }

  onSearch(keyword: any) {
    this.keyword = keyword;
    this.sortParameter = new SortParameter();
    this.loaData()
  }

  onDelete(id:any)
  {
    let cfnDialog = this.dialogService.open(ConfirmDialogComponent)
    cfnDialog.componentInstance.msg="Xác nhận xóa?";
    cfnDialog.componentInstance.onConfirm.subscribe(x=>{
      this.services.delete(id).then(res=>{
        cfnDialog.close();
        this.loaData()
      })
    })
  }


  onStrongDelete(id:any)
  {
    let cfnDialog = this.dialogService.open(ConfirmDialogComponent)
    cfnDialog.componentInstance.msg="Xác nhận xóa vĩnh viến?";
    cfnDialog.componentInstance.onConfirm.subscribe(x=>{
      this.services.strongDelete(id).then(res=>{
        cfnDialog.close();
        this.loaData()
      })
    })
  }

  onUnDelete(id:any)
  {
    let cfnDialog = this.dialogService.open(ConfirmDialogComponent)
    cfnDialog.componentInstance.msg="Xác nhận khôi phục?";
    cfnDialog.componentInstance.onConfirm.subscribe(x=>{
      this.services.unDelete(id).then(res=>{
        cfnDialog.close();
        this.loaData()
      })
    })
  }

}
