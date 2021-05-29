//import from angular core
import { Component, OnInit, TemplateRef, ViewChild ,Pipe,PipeTransform,SecurityContext,ElementRef} from "@angular/core";
import { DomSanitizer ,SafeUrl} from '@angular/platform-browser'
import {FormGroup,FormBuilder,Validators} from "@angular/forms"
// import from services
import { SortParameter, PagedSortResponse } from "app/services/dto-base";
import { SongHttpClient } from "app/services/song/song-service";

//import from ui lib
import { MatSort } from "@angular/material/sort";
import { MatPaginator, PageEvent } from "@angular/material/paginator";
import {MatDialog,MAT_DIALOG_DATA} from '@angular/material/dialog';

// import from utils
import { lang } from "../../../@language/language";
@Component({
  selector: "ngx-create-song",
  templateUrl: "./create-song.component.html",
  styleUrls: ["./create-song.component.scss"],
})
export class CreateSongComponent implements OnInit {
 
  @ViewChild('figAudio') figAudio: ElementRef;
  //public variables
  lang = lang;
  isLoading = true;
  service:any;
  imageURL:string;
  fileMusic:string;
  thumbnail = {data:null,fileName:""}
  music = {data:null,fileName:""}
  resultPredict:any;
  SongIdCreated:number

  //form data
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = false;

  constructor(public songService: SongHttpClient,private _formBuilder: FormBuilder) {
    this.service = songService
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
  onClickSong(SongId:any)
  {
    this.songService.getById(SongId).then(res=>{
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

  showPreviewMusic(event) {
    //const file = (event.target as HTMLInputElement).files[0];

    // this.firstFormGroup.patchValue({
    //   thumbnail: file
    // });
    // this.firstFormGroup.get('thumbnail').updateValueAndValidity()

    // File Preview
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
			this.fileMusic = URL.createObjectURL(event.target.files[0]);
      console.log(this.fileMusic)
		}
    this.music = {
      data: event.target.files[0],
      fileName: event.target.files[0].name,
    };

  }

  audSrc = 'path/to/default/sound.mpeg';

  showPreviewMusic1(event: any) {
    if (event.target.files && event.target.files[0]) {
      const audSrc = URL.createObjectURL(event.target.files[0]);
      this.figAudio.nativeElement.src = this.audSrc;
    }
  }
  // Submit Form
  create() {
    this.isLoading = true;
    let name = this.firstFormGroup.get('name').value
    let des = this.firstFormGroup.get('description').value
    console.log(name)
    this.songService.create(name,des,null,300,this.thumbnail,this.music,true).then(res=>{
      console.log(res)
      this.SongIdCreated = res.objectId
      this.isEditable = true;
      fetch("http://localhost:8089/predict/?songId="+this.music.fileName.replace(".mp3","")).then(res=>{
        this.resultPredict = res;
        this.isLoading = false;

      })
    })
  }
}

// @Pipe({
//   name: 'sanitizerUrl'
// })
// export class SanitizerUrlPipe implements PipeTransform {

//   constructor (
//     private sanitize: DomSanitizer
//   ) {}

//   transform(value: string): SafeUrl {
//     return this.sanitize.bypassSecurityTrustUrl(value);
//   }
// }