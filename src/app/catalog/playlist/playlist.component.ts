import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { PlayListsClient } from "app/service/Playlist/PlaylistService";
import { NbDialogService } from "@nebular/theme";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Common,parseDatetime } from "../common/conmmon";
@Component({
  selector: "ngx-playlist",
  templateUrl: "./playlist.component.html",
  styleUrls: ["./playlist.component.scss"],
})
export class PlaylistComponent implements OnInit {
  // @ViewChild('tablePlaylist') tablePlaylist: Ng2SmartTableComponent
  settings = {
    // add: {
    //   addButtonContent: '<i class="nb-plus"></i>',
    //   createButtonContent: '<i class="nb-checkmark"></i>',
    //   cancelButtonContent: '<i class="nb-close"></i>',
    // },
    hideSubHeader: true,
    mode:'external',
    actions: {
      columnTitle:'',
      position: "right",  
     
           
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
    },  
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
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
        title: "Ảnh bìa",
        width: "10%",
        type: "html",
        valuePrepareFunction: (image) => {
          if (image === "" || image == null)
            return `<img class='table-thumbnail-img' width="50" height="50" src="https://www.loc.gov/static/images/original-format/playlists.png" />`;
          else
            return `<img class='table-thumbnail-img' width="50" height="50" src="${image}" />`;
          // else
          // return `<img class='table-thumbnail-img' width="50" height="50" src="https://www.loc.gov/static/images/original-format/playlists.png" />`;
        },
      },
      name: {
        title: "Tên",
        type: "string",
      },
      owner: {
        title: "Người tạo",
        type: "string",
        valuePrepareFunction: (o) => {
          return o.nameOwner;
        },
      },
      totalSong: {
        title: "Số bài hát",
        type: "number",
      },
      dateCreate: {
        title: "Ngày tạo",
        type: "string",
        valuePrepareFunction: (d) => {return parseDatetime(d)}
      },
    },
    
    
    
  };

  settingListSong = {
    // add: {
    //   addButtonContent: '<i class="nb-plus"></i>',
    //   createButtonContent: '<i class="nb-checkmark"></i>',
    //   cancelButtonContent: '<i class="nb-close"></i>',
    // },
    hideSubHeader: true,
    actions: {
      columnTitle:'',
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
        title: "Ảnh bìa",
        width: "10%",
        type: "html",
        valuePrepareFunction: (image) => {
          return `<img class='table-thumbnail-img' width="50" height="50" src="${image}"/>`;
        },
      },
      name: {
        title: "Tên bài hát",
        type: "string",
      },
      owners: {
        title: "Ca sĩ",
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


  //playlist
  //playlist
  //detail
  //detail
  //add-playlist
  //add-playlist


  //playlist
  playlists: Array<any> = [];
  source: LocalDataSource = new LocalDataSource();
  Keyword: string;
  IdSelect: number;
  id: number;
  index: number = 1;
  public pagsize: number = 20;
  xemthem: boolean = false;
  public files: Array<any> = [];
  //playlist

  //detail
  IdSongAdd: number;
  sourceListSong: LocalDataSource = new LocalDataSource();
  //detail

  //add-playlist
  ThumbnailPicked: {data:any,fileName:'default'};
  addPlaylistForm: FormGroup;
  editPlaylistForm: FormGroup;
  loading = false;
  submitted = false;
  editted=false;
  error = "";
  //add-playlist
  
  
  
  
  
  
  constructor(
    public playlistService: PlayListsClient,
    private dialogService: NbDialogService,
    private formBuilder: FormBuilder,
    private common: Common,
  ) {

    this.id = 1;
    this.pagsize = 20;
    this.load();
  }
  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // this.tablePlaylist.edit.subscribe( (dataObject: any) => {
    //   console.log('Edit');
    //   console.log(dataObject);
    // });
  }
  
  //playlist
  load() {
    this.playlistService
      .getAll(this.index, this.pagsize)
      .subscribe((res: any) => {
        this.files = [];
        this.source.load(res.data.data);
      });
  }
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
    if (window.confirm("Xóa playlist?")) {
      this.playlistService.delete(event.data.id).subscribe((res: any) => {
        console.log(res);
          if (res.status == "200") {
            this.common.resolveResoponse(
              res.status,
              "playlist",
              true,
              "Xóa thành công!"
            );
            event.confirm.resolve();
          } else {
            this.common.resolveResoponse(
              res.status,
              "playlist",
              true,
              "Đã xảy ra lỗi"

            )
            event.confirm.reject();
        }
      });
    } 
    // else {
    //   event.confirm.reject();
    // }
  }
  onRowSelect(event): void {
    this.IdSelect = event.data.id;
  }
  // KeywordChange(event: any) {
  //   this.Keyword = event.target.value;
  // }
  //playlist


  //detail
  onDeleteSongConfirm(event): void {
    if (window.confirm("Xóa bài này ra khỏi playlist?")) {
      this.playlistService
        .removeSongFromPlayist(this.IdSelect, event.data.id)
        .subscribe((res: any) => {
          console.log(res);
          if (res.status == "200") {
            this.common.resolveResoponse(
              res.status,
              "playlist",
              true,
              "Xóa thành công!"
            );
            event.confirm.resolve();
          } else {
            this.common.resolveResoponse(
              res.status,
              "playlist",
              true,
              "Đã xảy ra lỗi"
            );
            event.confirm.reject();
          }
        });
    }
     else {
      event.confirm.reject();
    }
  }
  
  IdSongAddChange(event: any) {
    this.IdSongAdd = event.target.value;
  }
  onAddSongToPlaylist() {
    if (!isNaN(this.IdSongAdd)) {
      this.playlistService
        .pushSongToPlayList(this.IdSelect, this.IdSongAdd)
        .subscribe((res: any) => {
          if(res.status==200)
          {
            this.common.resolveResoponse(
              res.status,
              "playlist",
              true,
              "Thêm bai hát vào playlist OK"
            );
            this.loadSong();
          }
          if (res.status == 404)
          this.common.resolveResoponse(
            res.status,
            "playlist",
            true,
            "Bài hát hoặc playlist không tồn tại"
          );
        else if (res.status == 400)
          this.common.resolveResoponse(
            res.status,
            "playlist",
            true,
            "Bài hat đã thêm vào playlist"
          );
        else if(res.status!==200) this.common.resolveResoponse(res.status, "playlist", true, "Đã xảy ra lỗi");
        });
    }
  }

  loadSong()
  {
    this.playlistService
      .getPlaylistById(this.IdSelect)
      .subscribe((res: any) => {
        //console.log(res.data.data);
        this.playlistService
          .getSongs(this.IdSelect, 1, 100)
          .subscribe((songs: any) => {
            this.sourceListSong.load(songs.data.data);
          })});
  }
  openWithoutBackdropClick(dialog: TemplateRef<any>) {
    this.playlistService
      .getPlaylistById(this.IdSelect)
      .subscribe((res: any) => {
        //console.log(res.data.data);
        this.playlistService
          .getSongs(this.IdSelect, 1, 100)
          .subscribe((songs: any) => {
            this.sourceListSong.load(songs.data.data);
            this.dialogService.open(dialog, {
              context: {
                playlist: res.data.data,
              },
              closeOnBackdropClick: true,
            });
          });
      });
  }
  //detail


  //add-playlist
  
  onAddNew(dialog: TemplateRef<any>) {
    this.submitted=false;
    this.urlPicked=null;
    this.addPlaylistForm = this.formBuilder.group({
      desciption: ["", Validators.required],
      name: ["", Validators.required],
      image: [null,Validators.required]
    });
    this.dialogService.open(dialog, {
      context: {
        data: "Tạo",
      },
      closeOnBackdropClick: true,
      
    });
  }
  get f() {
    return this.addPlaylistForm.controls;
  }
  onSubmit() {
    //

    //const f =this.addPlaylistForm.controls;
    this.submitted = true;

    // stop here if form is invalid
    if (this.addPlaylistForm.invalid) {
      return;
    }

    this.loading = true;

    this.playlistService
      .create(this.f.name.value, this.f.desciption.value, this.ThumbnailPicked)
      .subscribe((res: any) => {
          this.common.resolveResoponse(
            res.status,
            "playlist",
            true,
            null
          );
        if(res.status ==200)
        this.load()
        
      });
      this.submitted=false;
      this.loading = false;
  }
  urlPicked:any
  handleFileInput(event) {
    console.log(event);

    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
			this.urlPicked = reader.result; 
		}
    this.ThumbnailPicked = {
      data: event.target.files[0],
      fileName: event.target.files[0].name,
    };
  }
  //add-playlist


  //edit

  get fedit(){
    return this.editPlaylistForm.controls;
  }
  onOpenEdit(event:any,dialog: TemplateRef<any>)
  {
    this.submitted=false;
    this.urlPicked=null;
    this.ThumbnailPicked = null;
    this.IdSelect=event.data.id;
    this.playlistService.getPlaylistById(event.data.id).subscribe((res:any)=>{
      this.editPlaylistForm = this.formBuilder.group({
        descriptionEdit: [res.data.data.description, Validators.required],
        nameEdit: [res.data.data.name, Validators.required],
        image: [null]
      });
      this.urlPicked=res.data.data.thumbnail
      //this.fedit.name=res.data.name;
      this.dialogService.open(dialog, {
        context: {
          data: "Tạo",
        },
        closeOnBackdropClick: true,
        
      });
    })
   
  }
  onSubmitEdit(){
    this.editted = true;

    // stop here if form is invalid
    if (this.editPlaylistForm.invalid) {
      return;
    }

    this.loading = true;

    this.playlistService
      .put(this.IdSelect,this.fedit.nameEdit.value, this.fedit.descriptionEdit.value, this.ThumbnailPicked)
      .subscribe((res: any) => {
          
        if(res.status ==200)
        {
          this.common.resolveResoponse(
            res.status,
            "playlist",
            true,
            "Update playlist OK"
          );
          this.load()
        }
        else
        {
          this.common.resolveResoponse(
            res.status,
            "playlist",
            true,
            "Đã xảy ra lỗi!"
          );
        }
        
        
      });
      this.editted=false;
      this.loading = false;

  }
  //edit

  
  
}
