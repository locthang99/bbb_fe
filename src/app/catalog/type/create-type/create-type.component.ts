//import from angular core
import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from "@angular/core";
import {FormGroup,FormBuilder,Validators} from "@angular/forms"
// import from services
import { SortParameter, PagedSortResponse } from "app/services/dto-base";
import { TypeHttpClient } from "app/services/type/type-service";

//import from ui lib
import { MatSort } from "@angular/material/sort";
import { MatPaginator, PageEvent } from "@angular/material/paginator";
import {MatDialog,MAT_DIALOG_DATA} from '@angular/material/dialog';

// import from utils
import { lang } from "../../../@language/language";
import { MatStep, MatStepper } from "@angular/material/stepper";
@Component({
  selector: "ngx-create-type",
  templateUrl: "./create-type.component.html",
  styleUrls: ["./create-type.component.scss"],
})
export class CreateTypeComponent implements OnInit {
 @ViewChild("stepper") stepper:MatStepper;

  //public variables
  lang = lang;
  isLoading = true;
  service:any;
  imageURL:string;
  thumbnail = {data:null,fileName:""}
  typeIdCreated:number

  //form data
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = false;

  constructor(public typeService: TypeHttpClient,private _formBuilder: FormBuilder) {
    this.service = typeService
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      description:['']
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
  onClickType(typeId:any)
  {
    this.typeService.getById(typeId).then(res=>{
    })
  }

  showPreview(event) {
    //const file = (event.target as HTMLInputElement).files[0];

    // this.firstFormGroup.patchValue({
    //   thumbnail: file
    // });
    // this.firstFormGroup.get('thumbnail').updateValueAndValidity()

    // File Preview
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
			this.imageURL = reader.result as string; 
		}
    this.thumbnail = {
      data: event.target.files[0],
      fileName: event.target.files[0].name,
    };

  }

  // Submit Form
  create() {
    let name = this.firstFormGroup.get('name').value
    let des = this.firstFormGroup.get('description').value
    console.log(name)
    this.typeService.create(name,des,this.thumbnail).then(res=>{
      if(res.code == 200)
      {
        this.stepper.next();
        this.typeIdCreated = res.objectId
        this.isEditable = true;
      }

    })
  }
}
