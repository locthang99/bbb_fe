import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { UsersClient } from "app/service/Account/AccountService";
import { NbDialogService } from "@nebular/theme";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Common,parseDatetime } from "../common/conmmon";
import { Account } from "app/service/Account/AcountDto";
import { DatePipe } from '@angular/common';
@Component({
  selector: "ngx-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.scss"],
})
export class AccountComponent implements OnInit {
  // @ViewChild('tableAccount') tableAccount: Ng2SmartTableComponent
  settings = {
    // add: {
    //   addButtonContent: '<i class="nb-plus"></i>',
    //   createButtonContent: '<i class="nb-checkmark"></i>',
    //   cancelButtonContent: '<i class="nb-close"></i>',
    // },
    hideSubHeader: true,
    mode:'external',
    actions: {
      columnTitle:'           ', 
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
      // id: {
      //   title: "ID",
      //   type: "number",
      //   width: "7%",
      // },
      thumbnail: {
        title: "Ảnh bìa",
        width: "10%",
        type: "html",
        valuePrepareFunction: (image) => {
          if (image === "" || image === null)
            return `<img class='table-thumbnail-img' width="50" height="50" src="https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png" />`;
          else
            return `<img class='table-thumbnail-img' width="50" height="50" src="${image}" />`;
          // else
          // return `<img class='table-thumbnail-img' width="50" height="50" src="https://www.loc.gov/static/images/original-format/Accounts.png" />`;
        },
      },
      userName: {
        title: "Tài khoản",
        type: "string",
      },
      firstName: {
        title: "Họ",
        type: "string",
      },
      lastName: {
        title: "Tên",
        type: "string",
      },
      email:{
        title: "Email",
        type: "string",
      },
      phoneNumber:{
        title: "SĐT",
        type: "string",
      },
      role:{
        title: "Quyền",
        type: "string",
      },
      dob: {
        title: "Ngày sinh",
        type: "string",
        valuePrepareFunction: (d) => {return parseDatetime(d)}
      },
    },
    
    
    
  };


  //Account
  //Account
  //detail
  //detail
  //add-Account
  //add-Account


  //Account
  Accounts: Array<any> = [];
  source: LocalDataSource = new LocalDataSource();
  Keyword: string;
  IdSelect: string;
  id: number;
  index: number = 1;
  public pagsize: number = 20;
  xemthem: boolean = false;
  public files: Array<any> = [];
  AccountSelect: Account
  //Account



  //add-Account
  ThumbnailPicked: {data:any,fileName:'default'};
  addAccountForm: FormGroup;
  editAccountForm: FormGroup;
  loading = false;
  submitted = false;
  editted=false;
  error = "";
  //add-Account
  
  
  
  
  
  
  constructor(
    public AccountService: UsersClient,
    private dialogService: NbDialogService,
    private formBuilder: FormBuilder,
    private common: Common
  ) {
    this.id = 1;
    this.pagsize = 100;
    this.load();
  }
  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // this.tableAccount.edit.subscribe( (dataObject: any) => {
    //   console.log('Edit');
    //   console.log(dataObject);
    // });
  }
  
  //Account
  load() {
    this.AccountService
      .getAllUser(this.index, this.pagsize)
      .subscribe((res: any) => {
        this.files = [];
        this.source.load(res.data.data);
      });
  }
  onSearch() {
    if (this.Keyword != undefined) {
      this.Accounts = [];
      let Id: string;

      const re = /^(\{){0,1}[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}(\}){0,1}$/gi;
      if(re.test(this.Keyword))
      {     
        this.AccountService.getById(this.Keyword).subscribe((data: any) => {
          this.Accounts.push(data.data.data);
          this.AccountService
            .getByUsername(this.Keyword)
            .subscribe((data: any) => {
              this.Accounts = this.Accounts.concat(data.data.data);
              if (this.Accounts.length > 0) {
                this.source.load(this.Accounts);
              }
            });
        });
      }
      else{
        this.AccountService
            .getByUsername(this.Keyword)
            .subscribe((data: any) => {
              this.Accounts = data.data.data;
                this.source.load(this.Accounts);
            });
      }
      
    }
  }
  onDeleteConfirm(event): void {
    if (window.confirm("Xóa Account?")) {
      this.AccountService.delete(event.data.id).subscribe((res: any) => {
        console.log(res);
        if(res.status=='200')
        {
          this.common.resolveResoponse(
            res.status,
            "song",
            true,
            "Delete Account OK"
          );
          event.confirm.resolve();
        }
        else
        {
          this.common.resolveResoponse(
            res.status,
            "song",
            true,
            "Delete Account FAILED"
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
  //Account


  //detail
  openWithoutBackdropClick(dialog: TemplateRef<any>) {
    this.AccountService
      .getById(this.IdSelect)
      .subscribe((res: any) => {
        //console.log(res.data.data);       
            this.dialogService.open(dialog, {
              context: {
                Account: res.data.data,
              },
              closeOnBackdropClick: true,
            });        
      });
  }
  //detail


  //add-Account
  
  onAddNew(dialog: TemplateRef<any>) {
    this.submitted=false;
    this.urlPicked=null;
    this.addAccountForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      dob: ["", Validators.required],
      email: ["", Validators.required],
      phoneNumber: ["", Validators.required],
      user: ["", Validators.required],
      password: ["", Validators.required],
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
    return this.addAccountForm.controls;
  }
  onSubmit() {
    //
    //const f =this.addAccountForm.controls;
    this.submitted = true;
    console.log(new DatePipe('en-US').transform(this.f.dob.value, 'dd/MM/yyyy'))
    // stop here if form is invalid
    if (this.addAccountForm.invalid) {
      
      return;
    }
    this.loading=true;
    
    this.AccountService
      .register(
        this.f.firstName.value,
        this.f.lastName.value,
        new DatePipe('en-US').transform(this.f.dob.value, 'MM/dd/yyyy'),
        this.f.email.value,
        this.f.phoneNumber.value,
        this.f.user.value,
        this.f.password.value,
        this.f.password.value,
        this.ThumbnailPicked)
      .subscribe((res: any) => {
        if(res.status=='200')
        {
          this.common.resolveResoponse(
            res.status,
            "Account",
            true,
            "Create Account OK"
          );
          this.load()
        }
        else
        {
          this.common.resolveResoponse(
            res.status,
            "Account",
            true,
            "Create Account FAILED"
          );
        }
        
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
  //add-Account


  //edit

  get fedit(){
    return this.editAccountForm.controls;
  }
  onOpenEdit(event:any,dialog: TemplateRef<any>)
  {
    this.submitted=false;
    this.urlPicked=null;
    this.IdSelect=event.data.id;
    this.AccountService.getById(event.data.id).subscribe((res:any)=>{



      this.AccountSelect = res.data.data;
      //this.role=res.data.data.role;
      this.AccountSelect.user = res.data.data.userName;
      this.editAccountForm = this.formBuilder.group({
        id:[res.data.data.id],
        firstName: [this.AccountSelect.firstName, Validators.required],
        lastName: [this.AccountSelect.lastName, Validators.required],
        dob: ["", Validators.required],
        email: [this.AccountSelect.email, Validators.required],
        phoneNumber: [this.AccountSelect.phoneNumber, Validators.required],
        user: [this.AccountSelect.user, Validators.required],
        password: [this.AccountSelect.password, Validators.required],
        role:[],
        image: [null,Validators.required]
      });
      this.fedit.role.setValue(res.data.data.role,{onlySelt:true})
      this.fedit.dob.setValue(res.data.data.dob.substring(0,10),{onlySelt:true})
      this.urlPicked=this.AccountSelect.thumbnail;
      this.dialogService.open(dialog, {
        context: {
          data: "Edit",
        },
        closeOnBackdropClick: true,     
      });

    })

   
  }
  onSubmitEdit(){
    this.editted = true;
    console.log(this.fedit)
    // stop here if form is invalid
    if (this.fedit.invalid) {
      console.log(this.fedit)
      return;
    }

    this.loading = true;

    this.AccountService
      .update(
        this.IdSelect,
        new DatePipe('en-US').transform(this.fedit.dob.value, 'MM/dd/yyyy'),
        this.fedit.email.value,
        this.fedit.firstName.value,
        this.fedit.lastName.value,
        this.fedit.phoneNumber.value,
        this.ThumbnailPicked)
      .subscribe((res: any) => {
         
        
        if(res.status ==200)
        {

          this.common.resolveResoponse(
            res.status,
            "Account",
            true,
            "Update Account OK"
          );

          this.AccountService.setRole(this.IdSelect,this.fedit.role.value).subscribe((res:any)=>{
            if(res.status!=200)
            this.common.resolveResoponse(
              res.status,
              "Account",
              true,
              "Update Role Account FAILED"
            );
          })
          this.load()
        }
        else
        {
          this.common.resolveResoponse(
            res.status,
            "Account",
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
