import { Component, OnInit, TemplateRef,ViewChild } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { SongHttpClient } from "app/services/song/song-service";
import { NbDialogService } from "@nebular/theme";
import { Common,parseDatetime } from "../common/conmmon";
import { SortParameter } from "app/services/service-base";
import {MatTableDataSource} from "@angular/material/table"
import {MatMenuTrigger} from "@angular/material/menu"
import {
  MatPaginator,
} from '@angular/material/paginator';
@Component({
  selector: "ngx-song",
  templateUrl: "./song.component.html",
  styleUrls: ["./song.component.scss"],
})
export class SongComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  someMethod() {
    this.trigger.openMenu();
  }
  public songs = new MatTableDataSource();
  source: LocalDataSource = new LocalDataSource();
  id: number;
  index: number = 1;
  public pagsize: number = 20;
  xemthem: boolean = false;
  public files: Array<any> = [];
  Keyword: string;
  IdSelect: number;
  sortParameter: SortParameter;

  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  constructor(
    public songService: SongHttpClient,
    private dialogService: NbDialogService,
    private common: Common
  ) {
    this.id = 1;
    this.pagsize = 20;
    this.sortParameter = new SortParameter()
    this.sortParameter.init({index:2,pageSize:5})
    this.load();

  }
  ngOnInit(): void {}
  ngAfterViewInit() {
    //this.songs.paginator = this.paginator;
  }
  load() {
    this.songService.get(this.sortParameter).then((res: any) => {
      this.files = [];
      this.songs.data =res.data
      this.paginator.length = res.totalItem
      this.paginator.pageIndex = res.index
      this.source.load(res.data);
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
