import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { PlayerComponent } from 'app/@theme/components';
import { SongDTO } from 'app/services/song/song-dto';

@Component({
  selector: 'ngx-create-song',
  templateUrl: './create-song.component.html',
  styleUrls: ['./create-song.component.scss']
})
export class CreateSongComponent implements OnInit {
@ViewChild("playerFile128") playerFile128:PlayerComponent;
@ViewChild("playerFile320") playerFile320:PlayerComponent;
@ViewChild("playerFileLossless") playerFileLossless:PlayerComponent;

  song : SongDTO;
  thumbnailUrl:string;
  lyricContent :string;
  file128Url:SafeUrl;
  file320Url:SafeUrl;
  fileLosslessUrl:SafeUrl;
  constructor(private sanitization:DomSanitizer) {
    this.song ={
      name:"",
      description:"",
      duration:"",
      thubnail:null,
      lyric:null,
      isOfficial:"true",
      file128:{data:null,fileName:null},
      file320:{data:null,fileName:null},
      fileLossless:{data:null,fileName:null},
    }
   }

  ngOnInit(): void {
  }
  onCreate()
  {
    console.log(this.song)
  }
  onChangeThumbnail(event:any)
  {
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
			this.thumbnailUrl = reader.result as string; 
		}
    this.song.thubnail = {
      data: event.target.files[0],
      fileName: event.target.files[0].name,
    };
  }
  onChangeLyric(event:any)
  {
    var reader = new FileReader();
    reader.readAsText(event.target.files[0]);
    reader.onload = (_event) => {
			this.lyricContent = reader.result as string; 
		}
    this.song.lyric = {
      data: event.target.files[0],
      fileName: event.target.files[0].name,
    };
  }
  onChangeFile128(event:any)
  {
    var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.file128Url = this.sanitization.bypassSecurityTrustResourceUrl(event.target.result as string);

      }
      this.song.file128.data = event.target.files[0];
      this.song.file128.fileName = event.target.files[0].name;
      //this.playerFile128.setTrack(this.file128Url);
  }
  onChangeFile320(event:any)
  {
    var reader = new FileReader();

    reader.readAsDataURL(event.target.files[0]); // read file as data url
    reader.onload = (event) => { // called once readAsDataURL is completed
      this.file320Url = this.sanitization.bypassSecurityTrustResourceUrl(event.target.result as string);

    }
    this.song.file320.data = event.target.files[0];
    this.song.file320.fileName = event.target.files[0].name;
    //this.playerFile128.setTrack(this.file128Url);
  }
  onChangeFileLossless(event:any)
  {
    var reader = new FileReader();

    reader.readAsDataURL(event.target.files[0]); // read file as data url
    reader.onload = (event) => { // called once readAsDataURL is completed
      this.fileLosslessUrl = this.sanitization.bypassSecurityTrustResourceUrl(event.target.result as string);

    }
    this.song.fileLossless.data = event.target.files[0];
    this.song.fileLossless.fileName = event.target.files[0].name;
    //this.playerFile128.setTrack(this.file128Url);
  }

}
