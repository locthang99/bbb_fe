import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { SongTypesClient } from "app/service/songtype/songtypeService";
import { SongTypeUpdateRequest,ISongTypeUpdateRequest } from "app/service/songtype/SongTypeDto";
import { NbDialogService } from "@nebular/theme";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Common } from "../common/conmmon";
@Component({
  selector: "ngx-songtype",
  templateUrl: "./songtype.component.html",
  styleUrls: ["./songtype.component.scss"],
})
export class SongtypeComponent implements OnInit {
  // @ViewChild('tablesongtype') tablesongtype: Ng2SmartTableComponent
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
      name: {
        title: "Tên",
        type: "string",
      },
      description: {
        title: "Mô tả",
        type: "string",
      },
    },
    
    
    
  };


  //songtype
  //songtype
  //detail
  //detail
  //add-songtype
  //add-songtype


  //songtype
  songtypes: Array<any> = [];
  source: LocalDataSource = new LocalDataSource();
  Keyword: string;
  IdSelect: number;
  id: number;
  index: number = 1;
  public pagsize: number = 20;
  xemthem: boolean = false;
  public files: Array<any> = [];
  //songtype

  //detail
  IdSongAdd: number;
  sourceListSong: LocalDataSource = new LocalDataSource();
  //detail

  //add-songtype
  ThumbnailPicked: {data:any,fileName:'default'};
  addsongtypeForm: FormGroup;
  editsongtypeForm: FormGroup;
  loading = false;
  submitted = false;
  editted=false;
  error = "";
  //add-songtype
  
  
  
  
  
  
  constructor(
    public songtypeService: SongTypesClient,
    private dialogService: NbDialogService,
    private formBuilder: FormBuilder,
    private common: Common
  ) {
    this.id = 1;
    this.pagsize = 20;
    this.load();
  }
  ngOnInit(): void {}
  
  //songtype
  load() {
    this.songtypeService
      .getAll(this.index, this.pagsize)
      .subscribe((res: any) => {
        this.files = [];
        this.source.load(res.data.data);
      });
  }
  onSearch() {
    if (this.Keyword != undefined) {
      this.songtypes = [];
      let Id: number;
      Id = +this.Keyword;
      if (!isNaN(Id)) {
        this.songtypeService.getSongtypeById(Id).subscribe((data: any) => {
          this.songtypes.push(data.data.data);
          this.songtypeService
            .getByName(this.Keyword, 1, 100)
            .subscribe((data: any) => {
              this.songtypes = this.songtypes.concat(data.data.data);
              if (this.songtypes.length > 0) {
                this.source.load(this.songtypes);
              }
            });
        });
      } else {
        this.songtypeService
          .getByName(this.Keyword, 1, 100)
          .subscribe((data: any) => {
            this.songtypes = this.songtypes.concat(data.data.data);
            if (this.songtypes.length > 0) this.source.load(this.songtypes);
          });
      }
    }
  }
  onDeleteConfirm(event): void {
    if (window.confirm("Xóa thể loại nhạc này?")) {
      this.songtypeService.delete(event.data.id).subscribe((res: any) => {
        console.log(res);
        if(res.status=='200')
        {
          this.common.resolveResoponse(
            res.status,
            "songtype",
            true,
            "Delete Song Type OK"
          );
          event.confirm.resolve();
        }
        else
        {
          this.common.resolveResoponse(
            res.status,
            "songtype",
            true,
            "Delete Song Type FAILED"
          );
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
  //songtype


  //detail
  

  openWithoutBackdropClick(dialog: TemplateRef<any>) {
    this.songtypeService
      .getSongtypeById(this.IdSelect)
      .subscribe((res: any) => {
        //console.log(res.data.data);
            this.dialogService.open(dialog, {
              context: {
                songtype: res.data.data,
              },
              closeOnBackdropClick: true,

          });
      });
  }
  //detail


  //add-songtype
  
  onAddNew(dialog: TemplateRef<any>) {
    this.submitted=false;
    this.addsongtypeForm = this.formBuilder.group({
      description: ["", Validators.required],
      name: ["", Validators.required],
    });
    this.dialogService.open(dialog, {
      context: {
        data: "Tạo",
      },
      closeOnBackdropClick: true,
      
    });
  }
  get f() {
    return this.addsongtypeForm.controls;
  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.addsongtypeForm.invalid) {
      return;
    }
    this.loading = true;
    this.songtypeService
      .create(this.f.name.value, this.f.description.value)
      .subscribe((res: any) => {
        if(res.status=='200')
        {
          this.common.resolveResoponse(
            res.status,
            "songtype",
            true,
            "Create Song Type OK"
          );
        }
        else
        {
          this.common.resolveResoponse(
            res.status,
            "songtype",
            true,
            "Create Song Type FAILED"
          );
        }
        
      });
      this.submitted=false;
      this.loading = false;
  }
  //add-songtype


  //edit

  get fedit(){
    return this.editsongtypeForm.controls;
  }
  onOpenEdit(event:any,dialog: TemplateRef<any>)
  {
    this.submitted=false;
    this.IdSelect=event.data.id;
    this.songtypeService.getSongtypeById(event.data.id).subscribe((res:any)=>{
      this.editsongtypeForm = this.formBuilder.group({
        descriptionEdit: [res.data.data.description, Validators.required],
        nameEdit: [res.data.data.name, Validators.required],
      });
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
    if (this.editsongtypeForm.invalid) {
      return;
    }

    this.loading = true;
    let rq = new SongTypeUpdateRequest({name:this.fedit.nameEdit.value,description:this.fedit.descriptionEdit.value})
    this.songtypeService
      .update(this.IdSelect,rq)
      .subscribe((res: any) => {
          
        if(res.status ==200)
        {
          this.common.resolveResoponse(
            res.status,
            "songtype",
            true,
            "Update Song Type OK"
          );
          this.load()
        }
        else
        {
          this.common.resolveResoponse(
            res.status,
            "songtype",
            true,
            "Update Song Type FAILED"
          );
        }
        
        
      });
      this.editted=false;
      this.loading = false;

  }
  //edit

  
  
}
