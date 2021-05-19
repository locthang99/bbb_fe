import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { SongTagsClient } from "app/service/SongTag/SongTagService";
import { TagUpdateRequest} from "app/service/SongTag/SongTagDto";
import { NbDialogService } from "@nebular/theme";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Common } from "../common/conmmon";
@Component({
  selector: "ngx-songtag",
  templateUrl: "./songtag.component.html",
  styleUrls: ["./songtag.component.scss"],
})
export class SongtagComponent implements OnInit {
  // @ViewChild('tablesongtag') tablesongtag: Ng2SmartTableComponent
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
        tag: "number",
        width: "7%",
      },
      name: {
        title: "Tên",
        tag: "string",
      },
      description: {
        title: "Mô tả",
        tag: "string",
      },
    },
    
    
    
  };


  //songtag
  //songtag
  //detail
  //detail
  //add-songtag
  //add-songtag


  //songtag
  songtags: Array<any> = [];
  source: LocalDataSource = new LocalDataSource();
  Keyword: string;
  IdSelect: number;
  id: number;
  index: number = 1;
  public pagsize: number = 20;
  xemthem: boolean = false;
  public files: Array<any> = [];
  //songtag

  //detail
  IdSongAdd: number;
  sourceListSong: LocalDataSource = new LocalDataSource();
  //detail

  //add-songtag
  ThumbnailPicked: {data:any,fileName:'default'};
  addsongtagForm: FormGroup;
  editsongtagForm: FormGroup;
  loading = false;
  submitted = false;
  editted=false;
  error = "";
  //add-songtag
  
  
  
  
  
  
  constructor(
    public songtagService: SongTagsClient,
    private dialogService: NbDialogService,
    private formBuilder: FormBuilder,
    private common: Common
  ) {
    this.id = 1;
    this.pagsize = 20;
    this.load();
  }
  ngOnInit(): void {}
  
  //songtag
  load() {
    this.songtagService
      .getAll(this.index, this.pagsize)
      .subscribe((res: any) => {
        this.files = [];
        this.source.load(res.data.data);
      });
  }
  onSearch() {
    if (this.Keyword != undefined) {
      this.songtags = [];
      let Id: number;
      Id = +this.Keyword;
      if (!isNaN(Id)) {
        this.songtagService.getTagById(Id).subscribe((data: any) => {
          this.songtags.push(data.data.data);
          this.songtagService
            .getByName(this.Keyword, 1, 100)
            .subscribe((data: any) => {
              this.songtags = this.songtags.concat(data.data.data);
              if (this.songtags.length > 0) {
                this.source.load(this.songtags);
              }
            });
        });
      } else {
        this.songtagService
          .getByName(this.Keyword, 1, 100)
          .subscribe((data: any) => {
            this.songtags = this.songtags.concat(data.data.data);
            if (this.songtags.length > 0) this.source.load(this.songtags);
          });
      }
    }
  }
  onDeleteConfirm(event): void {
    if (window.confirm("Xóa songtag?")) {
      this.songtagService.delete(event.data.id).subscribe((res: any) => {
        console.log(res);
        if(res.status=='200')
        {
          this.common.resolveResoponse(
            res.status,
            "songtag",
            true,
            "Delete Tag OK"
          );
          event.confirm.resolve();
        }
        else
        {
          this.common.resolveResoponse(
            res.status,
            "songtag",
            true,
            "Delete Tag FAILED"
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
  //songtag


  //detail
  

  openWithoutBackdropClick(dialog: TemplateRef<any>) {
    this.songtagService
      .getTagById(this.IdSelect)
      .subscribe((res: any) => {
        //console.log(res.data.data);
            this.dialogService.open(dialog, {
              context: {
                songtag: res.data.data,
              },
              closeOnBackdropClick: true,

          });
      });
  }
  //detail


  //add-songtag
  
  onAddNew(dialog: TemplateRef<any>) {
    this.submitted=false;
    this.addsongtagForm = this.formBuilder.group({
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
    return this.addsongtagForm.controls;
  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.addsongtagForm.invalid) {
      return;
    }
    this.loading = true;
    this.songtagService
      .create(this.f.name.value, this.f.description.value)
      .subscribe((res: any) => {
        if(res.status=='200')
        {
          this.common.resolveResoponse(
            res.status,
            "Tag",
            true,
            "Create Tag OK"
          );
          this.load();
        }
        else
        {
          this.common.resolveResoponse(
            res.status,
            "song",
            true,
            "Create Tag FAILED"
          );
        }
        
      });
      this.submitted=false;
      this.loading = false;
  }
  //add-songtag


  //edit

  get fedit(){
    return this.editsongtagForm.controls;
  }
  onOpenEdit(event:any,dialog: TemplateRef<any>)
  {
    this.submitted=false;
    this.IdSelect=event.data.id;
    this.songtagService.getTagById(event.data.id).subscribe((res:any)=>{
      this.editsongtagForm = this.formBuilder.group({
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
    if (this.editsongtagForm.invalid) {
      return;
    }

    this.loading = true;
    let rq = new TagUpdateRequest({name:this.fedit.nameEdit.value,description:this.fedit.descriptionEdit.value})
    this.songtagService
      .update(this.IdSelect,rq)
      .subscribe((res: any) => {
          
        if(res.status ==200)
        {
          this.common.resolveResoponse(
            res.status,
            "songtag",
            true,
            "Update Tag OK"
          );
          this.load()
        }
        else
        {
          this.common.resolveResoponse(
            res.status,
            "songtag",
            true,
            "Update Tag FAILED"
          );
        }
        
        
      });
      this.editted=false;
      this.loading = false;

  }
  //edit

  
  
}
