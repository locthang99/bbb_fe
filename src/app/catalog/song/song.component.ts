import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { SongHttpClient } from "app/services/song/song-service";
import { NbDialogService } from "@nebular/theme";
import { Common, parseDatetime } from "../common/conmmon";
import { SortParameter, PagedSortResponse } from "app/services/dto-base";
import {SearchInputComponent} from '../../@theme/components/search-input/search-input.component';
import { MatTableDataSource } from "@angular/material/table"
import { MatMenuTrigger } from "@angular/material/menu"
import {MatSort} from '@angular/material/sort';
import {
  MatPaginator,
  PageEvent
} from '@angular/material/paginator';
@Component({
  selector: "ngx-song",
  templateUrl: "./song.component.html",
  styleUrls: ["./song.component.scss"],
})
export class SongComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  pageEvent: PageEvent;
  public songs = new PagedSortResponse()
  id: number;
  public files: Array<any> = [];
  Keyword: string;
  IdSelect: number;
  sortParameter: SortParameter;

  constructor(
    public songService: SongHttpClient
  ) {
    this.id = 1;
    this.sortParameter = new SortParameter()
  }
  ngOnInit(): void {
    this.load();
  }
  ngAfterViewInit() {
    this.sort.sortChange.subscribe(() => {
      this.sortParameter.sortBy = this.sort.active;
      this.sort.start = this.sort.start === "asc"? "desc":"asc"
      this.sortParameter.sortASC = this.sort.start === "asc"? true:false;
      this.songService.get(this.sortParameter).then((res: any) => {
        this.songs = res
      });
    });
  }
  load() {
    this.songService.get(this.sortParameter).then((res: any) => {
      this.songs = res
    });
  }
  onChangePaginator(event: PageEvent) {
    if (event.pageIndex <= 0)
      this.sortParameter.index = 1
    else
      this.sortParameter.index = event.pageIndex
    this.sortParameter.pageSize = event.pageSize
    this.songService.get(this.sortParameter).then((res: any) => {
      this.songs = res
    });
  }
  // seemore() {
  //   this.pagsize += 20;
  //   if (this.pagsize > 100) this.pagsize = 100;
  //   this.load();
  // }
  // onSearch() {
  //   if (this.Keyword != undefined) {
  //     this.songs = [];
  //     let Id: number;
  //     Id = +this.Keyword;
  //     if (!isNaN(Id)) {
  //       this.songService.getSongById(Id).subscribe((data: any) => {
  //         this.songs.push(data.data.data);
  //         this.songService
  //           .getSongByName(this.Keyword, 1, 100)
  //           .subscribe((data: any) => {
  //             this.songs = this.songs.concat(data.data.data);
  //             if (this.songs.length > 0) {
  //               this.source.load(this.songs);
  //             }
  //           });
  //       });
  //     } else {
  //       this.songService
  //         .getSongByName(this.Keyword, 1, 100)
  //         .subscribe((data: any) => {
  //           this.songs = this.songs.concat(data.data.data);
  //           if (this.songs.length > 0) this.source.load(this.songs);
  //         });
  //     }
  //   }
  // }
  // onDeleteConfirm(event): void {
  //   if (window.confirm("Are you sure you want to delete?")) {
  //     this.songService.delete(event.data.id).subscribe((res: any) => {
  //       console.log(res);
  //       if (res.status == "200") {
  //         this.common.resolveResoponse(res.status, "song", true, "Delete OK");
  //         event.confirm.resolve();
  //       } else {
  //         this.common.resolveResoponse(
  //           res.status,
  //           "song",
  //           true,
  //           "Delete FAILED"
  //         );
  //         event.confirm.reject();
  //       }
  //     });
  //   } else {
  //     event.confirm.reject();
  //   }
  // }
  // onRowSelect(event): void {
  //   this.IdSelect = event.data.id;
  //   // console.log(event);
  //   // if (event.selected.length>0)
  //   // {
  //   //   this.IdSelect = event.selected[0].id;
  //   // }

  //   // this.IdSelect = event.data.id;
  // }
  // KeywordChange(event: any) {
  //   this.Keyword = event.target.value;
  // }
  // openWithoutBackdropClick(dialog: TemplateRef<any>) {
  //   this.songService.getSongById(this.IdSelect).subscribe((res: any) => {
  //     //console.log(res.data.data);
  //     this.songService.getLyric(res.data.data.lyric).subscribe((resLyric: any) => {
  //       let _song =res.data.data;
  //       _song.dateCreate = parseDatetime(_song.dateCreate);
  //       this.dialogService.open(dialog, {
  //         context: {
  //           song: _song,
  //           singers: this.getSingers(res.data.data),
  //           tags: this.getTags(res.data.data),
  //           types: this.getTypes(res.data.data),
  //           lyric:resLyric.data
  //         },
  //         closeOnBackdropClick: true,
  //       });
  //     });

  //   });
  // }

  // getSingers(data: any) {
  //   let singers = "";
  //   console.log(data.owners);
  //   data.owners.forEach((s) => {
  //     singers += s.nameOwner + ", ";
  //   });

  //   if (singers.length > 0) singers = singers.substring(0, singers.length - 2);

  //   return singers;
  // }
  // getTypes(data: any) {
  //   let types = "";
  //   data.types.forEach((t) => {
  //     types += t.name + ", ";
  //   });
  //   if (types.length > 0) types = types.substring(0, types.length - 2);
  //   return types;
  // }
  // getTags(data: any) {
  //   let tags = "";
  //   data.tags.forEach((t) => {
  //     tags += t.name + ", ";
  //   });
  //   if (tags.length > 0) tags = tags.substring(0, tags.length - 2);
  //   return tags;
  // }
  // getLyric(url: any) {
  //   this.songService.getLyric(url).subscribe((res: any) => {
  //     console.log(res);
  //   });
  // }
}
