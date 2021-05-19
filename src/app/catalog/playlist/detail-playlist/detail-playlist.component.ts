import { Component, Injectable, OnInit, TemplateRef,ViewChild } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { PlayListsClient } from "app/service/Playlist/PlaylistService";
import { NbDialogService } from "@nebular/theme";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { PopupDialogDialogComponent } from "../../popup/popup-dialog.component";
import { Common } from "../../common/conmmon";

@Component({
  selector: "ngx-detail-playlist",
  templateUrl: "./detail-playlist.component.html",
  styleUrls: ["./detail-playlist.component.scss"],
})
@Injectable({
  providedIn:'root'
})
export class DetailPlaylistComponent {
  settingListSong = {
    // add: {
    //   addButtonContent: '<i class="nb-plus"></i>',
    //   createButtonContent: '<i class="nb-checkmark"></i>',
    //   cancelButtonContent: '<i class="nb-close"></i>',
    // },
    hideSubHeader: true,
    actions: {
      edit: false,
      position: "right",
    },
    pager: {
      display: true,
      perPage: 5,
    },

    // add:false,
    // edit:false,
    // edit: {
    //   editButtonContent: '<i class="nb-edit"></i>',
    //   saveButtonContent: '<i class="nb-checkmark"></i>',
    //   cancelButtonContent: '<i class="nb-close"></i>',
    // },
    columns: {
      id: {
        title: "ID",
        type: "number",
        width: "7%",
      },
      thumbnail: {
        title: "Thumbnail",
        width: "10%",
        type: "html",
        valuePrepareFunction: (image) => {
          return `<img class='table-thumbnail-img' width="50" height="50" src="${image}"/>`;
        },
      },
      name: {
        title: "Name",
        type: "string",
      },
      owners: {
        title: "Owners",
        type: "string",
        valuePrepareFunction: (o) => {
          let Singers = "";
          o.forEach((element) => {
            Singers += element.nameOwner + ", ";
          });
          return Singers;
        },
      },
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
  };

  @ViewChild('detailplaylist') detailplaylist : TemplateRef<any>;
  @ViewChild('lol') lol: TemplateRef<any>;
  playlists: Array<any> = [];
  source: LocalDataSource = new LocalDataSource();
  sourceListSong: LocalDataSource = new LocalDataSource();
  id: number;
  index: number = 1;
  public pagsize: number = 20;
  xemthem: boolean = false;
  public files: Array<any> = [];
  Keyword: string;
  IdSelect: number;
  IdSongAdd: number;
  ThumbnailPicked: any;
  addPlaylistForm: FormGroup;
  loading = false;
  submitted = false;
  error = "";
  constructor(
    public playlistService: PlayListsClient,
    private dialogService: NbDialogService,
    private formBuilder: FormBuilder,
    private common: Common
  ) {
    this.id = 1;
    this.pagsize = 20;
    this.load();
  }
  //funtion 
  load() {
    this.playlistService
      .getAll(this.index, this.pagsize)
      .subscribe((res: any) => {
        this.files = [];
        this.source.load(res.data.data);
      });
  }
  seemore() {
    this.pagsize += 20;
    if (this.pagsize > 100) this.pagsize = 100;
    this.load();
  }

  //Resolve GUI
  //Resolve Data
  //Binding Data
  //Resolve Event
  onSearch() {
    if (this.Keyword != undefined) {
      this.playlists = [];
      let Id: number;
      Id = +this.Keyword;
      if (!isNaN(Id)) {
        this.playlistService.getPlaylistById(Id).subscribe((data: any) => {
          this.playlists.push(data.data.data);
          this.playlistService
            .getPlaylistByName(this.Keyword, 1, 100)
            .subscribe((data: any) => {
              this.playlists = this.playlists.concat(data.data.data);
              if (this.playlists.length > 0) {
                this.source.load(this.playlists);
              }
            });
        });
      } else {
        this.playlistService
          .getPlaylistByName(this.Keyword, 1, 100)
          .subscribe((data: any) => {
            this.playlists = this.playlists.concat(data.data.data);
            if (this.playlists.length > 0) this.source.load(this.playlists);
          });
      }
    }
  }
  onDeleteConfirm(event): void {
    if (window.confirm("Are you sure you want to delete?")) {
      this.playlistService.delete(event.data.id).subscribe((res: any) => {
        console.log(res);
        if (res.status == "200") {
          event.confirm.resolve();
        } else {
          event.confirm.reject();
        }
      });
    } else {
      event.confirm.reject();
    }
  }
  onDeleteSongConfirm(event): void {
    if (window.confirm("Are you sure you want to delete?")) {
      this.playlistService
        .removeSongFromPlayist(this.IdSelect, event.data.id)
        .subscribe((res: any) => {
          console.log(res);
          if (res.status == "200") {
            event.confirm.resolve();
          } else {
            event.confirm.reject();
          }
        });
    } else {
      event.confirm.reject();
    }
  }
  onRowSelect(event): void {
    this.IdSelect = event.data.id;
    // console.log(event);
    // if (event.selected.length>0)
    // {
    //   this.IdSelect = event.selected[0].id;
    // }

    // this.IdSelect = event.data.id;
  }
  KeywordChange(event: any) {
    this.Keyword = event.target.value;
  }
  IdSongAddChange(event: any) {
    this.IdSongAdd = event.target.value;
  }
  onAddSongToPlaylist() {
    if (!isNaN(this.IdSongAdd)) {
      this.playlistService
        .pushSongToPlayList(this.IdSelect, this.IdSongAdd)
        .subscribe((res: any) => {
          if (res.status == 404)
          this.common.resolveResoponse(
            res.status,
            "playlist",
            false,
            "Bài hát hoặc playlist không tồn tại"
          );
        else if (res.status == 400)
          this.common.resolveResoponse(
            res.status,
            "playlist",
            false,
            "Bài hat đã thêm vào playlist"
          );
        else this.common.resolveResoponse(res.status, "playlist", false, null);
        });
    }
  }
  openWithoutBackdropClick(IdPlaylist:number) {
    this.playlistService
      .getPlaylistById(IdPlaylist)
      .subscribe((res: any) => {
        //console.log(res.data.data);
        this.playlistService
          .getSongs(IdPlaylist, 1, 100)
          .subscribe((songs: any) => {
            this.sourceListSong.load(songs.data.data);
            
            this.dialogService.open(this.detailplaylist, {
              context: {
                playlist: res.data.data,
              },
              closeOnBackdropClick: true,
            });
          });
      });
  }
  onLol()
  {
    this.dialogService.open(this.lol,{
      context:'aaaaaaaaaa'
    })
  }

}
