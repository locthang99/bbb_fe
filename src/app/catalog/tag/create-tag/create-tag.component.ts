//import from angular core
import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from "@angular/core";
import {FormGroup,FormBuilder,Validators} from "@angular/forms"
// import from services
import { SortParameter, PagedSortResponse } from "app/services/dto-base";
import { TagHttpClient } from "app/services/tag/tag-service";

//import from ui lib
import { MatSort } from "@angular/material/sort";
import { MatPaginator, PageEvent } from "@angular/material/paginator";
import {MatDialog,MAT_DIALOG_DATA} from '@angular/material/dialog';

// import from utils
import { lang } from "../../../@language/language";
import { MatStep, MatStepper } from "@angular/material/stepper";
@Component({
  selector: "ngx-create-tag",
  templateUrl: "./create-tag.component.html",
  styleUrls: ["./create-tag.component.scss"],
})
export class CreateTagComponent implements OnInit {
 @ViewChild("stepper") stepper:MatStepper;

  //public variables
  lang = lang;
  isLoading = true;
  service:any;
  imageURL:string;
  thumbnail = {data:null,fileName:""}
  tagIdCreated:number

  //form data
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = false;

  constructor(public tagService: TagHttpClient,private _formBuilder: FormBuilder) {
    this.service = tagService
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
  onClickTag(tagId:any)
  {
    this.tagService.getById(tagId).then(res=>{
    })
  }

  // Submit Form
  create() {
    let name = this.firstFormGroup.get('name').value
    let des = this.firstFormGroup.get('description').value
    console.log(name)
    this.tagService.create(name,des).then(res=>{
      if(res.code == 200)
      {
        this.stepper.next();
        this.tagIdCreated = res.objectId
        this.isEditable = true;
      }

    })
  }
}
