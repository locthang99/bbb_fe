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
import { OrderHttpClient } from "app/services/order/order-service";

//import from ui lib
import { MatSort } from "@angular/material/sort";
import { MatPaginator, PageEvent } from "@angular/material/paginator";
import { MatDialog } from "@angular/material/dialog";

// import from utils
import { lang } from "app/@language/language";

@Component({
  selector: 'ngx-my-bill',
  templateUrl: './my-bill.component.html',
  styleUrls: ['./my-bill.component.scss']
})
export class MyBillComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @Output() onClickRow: EventEmitter<string> = new EventEmitter<string>();

  inputColumns :string[]= ['id','itemName','amount','discountAdded','status','dateCreate','action']
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

  constructor(public dialogService: MatDialog, private orderService : OrderHttpClient ) {
    this.dataSource = new PagedSortResponse();
    this.sortParameter = new SortParameter();
    this.sortParameter.sortBy="dateCreate";
    this.sortParameter.sortASC=false;
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.isLoading = true;
      this.orderService
        .getMyOrder(this.sortParameter)
        .then((res: any) => {
          this.dataSource = res;
          this.isLoading = false;
        });
  }

  ngAfterViewInit() {
    this.sort.sortChange.subscribe(() => {
      this.sortParameter.sortBy = this.sort.active;
      this.sort.start = this.sort.start === "asc" ? "desc" : "asc";
      this.sortParameter.sortASC = this.sort.start === "asc" ? true : false;
      this.loadData();
    });
  }

  onChangePaginator(event: PageEvent) {
    this.sortParameter.pageSize = event.pageSize;
    this.sortParameter.index = event.pageIndex;
    this.loadData();
  }

  onSearch(keyword: any) {
    this.keyword = keyword;
    this.sortParameter = new SortParameter();
    this.loadData();
  }
}
