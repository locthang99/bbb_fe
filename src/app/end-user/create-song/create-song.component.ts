import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { PlayerComponent } from 'app/@theme/components';
import { SongDTO } from 'app/services/song/song-dto';
import { SongHttpClient } from 'app/services/song/song-service';
import { ToastComponent } from "app/@theme/components/toast/toast.component";

@Component({
  selector: 'ngx-create-song',
  templateUrl: './create-song.component.html',
  styleUrls: ['./create-song.component.scss']
})
export class CreateSongComponent implements OnInit {
@ViewChild("player128") player128:HTMLAudioElement;
@ViewChild("player320") playerFile320:HTMLAudioElement;
@ViewChild("playerLossless") playerFileLossless:HTMLAudioElement;
@ViewChild("stepper") stepper : any;

  song : SongDTO;
  songIdCreated :number = 0;
  thumbnailUrl:string;
  lyricContent :string;
  file128Url:SafeUrl;
  file320Url:SafeUrl;
  fileLosslessUrl:SafeUrl;

  check128:boolean;
  check320:boolean;
  checkLossless:boolean;

  isLoadingPredict:boolean;
  resultPredict:any[];
  constructor(private sanitization:DomSanitizer,private songService:SongHttpClient,private toast:ToastComponent) {
    this.song ={
      name:"",
      description:"",
      duration:"",
      thumbnail:{data:null,fileName:null},
      lyric:{data:null,fileName:null},
      country:"VN",
      isOfficial:"true",
      file128:{data:null,fileName:null},
      file320:{data:null,fileName:null},
      fileLossless:{data:null,fileName:null},
    }
    this.resultPredict=[
      {time:"--:--",predict:[
        { value: Math.random()%100, nameType: "𝄞" },
        { value: Math.random()%100, nameType: "𝆹𝅥𝅯" },
        { value: Math.random()%100, nameType: "𝅘𝅥𝅱" },
        { value: Math.random()%100, nameType: "𝅂" },
        { value: Math.random()%100, nameType: "𝄴" },
        { value: Math.random()%100, nameType: "𝅘𝅥𝅯" },
        { value: Math.random()%100, nameType: "𝅬" },
        { value: Math.random()%100, nameType: "𝆙" },
        { value: Math.random()%100, nameType: "𝆹𝅥𝅮" },
      ]},
      {time:"--:--",predict:[
        { value: Math.random()%100, nameType: "𝄞" },
        { value: Math.random()%100, nameType: "𝆹𝅥𝅯" },
        { value: Math.random()%100, nameType: "𝅘𝅥𝅱" },
        { value: Math.random()%100, nameType: "𝅂" },
        { value: Math.random()%100, nameType: "𝄴" },
        { value: Math.random()%100, nameType: "𝅘𝅥𝅯" },
        { value: Math.random()%100, nameType: "𝅬" },
        { value: Math.random()%100, nameType: "𝆙" },
        { value: Math.random()%100, nameType: "𝆹𝅥𝅮" },
      ]}
    ]
    this.isLoadingPredict = true;
   }

  ngOnInit(): void {
  }
  onCreate()
  {
    this.isLoadingPredict = true;
    if(this.song.name=="")
    {
      this.toast.openToast("danger","Chưa đủ thông tin","Tên bài không được bỏ trống")
      return;
    }
    if(this.song.file128.data==null)
    {
      this.toast.openToast("danger","Chưa đủ thông tin","Phải có ít nhất 1 file nhạc 128kbps")
      return;
    }
    this.songService.create(this.song).then(res=>{
      if(res.code == 200)
      {
        this.songIdCreated = res.objectId;
        this.songService.predictType(this.songIdCreated).then(res=> {
          this.resultPredict = res.data;
          this.isLoadingPredict = false;
        });
        this.stepper.next();
        console.log(this.song)
      }
      else
      {
        this.toast.openToast("danger","Error",res.msg)
      }
    })


  }
  onChangeThumbnail(event:any)
  {
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
			this.thumbnailUrl = reader.result as string; 
		}
    this.song.thumbnail = {
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
  checkQuality128(event:any)
  {
    let size = this.song.file128.data.size;
    let duration = event.currentTarget.duration;

    let bitRate = (size*8 / duration)/1000
    console.log(bitRate)
    if(bitRate>120 && bitRate < 135)
    {
      this.check128=true;
      this.song.duration=Math.trunc(duration).toString();
    }
    else
    {
      this.check128=false;
      this.song.file128.data=null;
    }
  }

  checkQuality320(event:any)
  {
    let size = this.song.file320.data.size;
    let duration = event.currentTarget.duration;

    let bitRate = (size*8 / duration)/1000
    console.log(bitRate)
    if(this.song.duration!=Math.trunc(duration).toString())
    {
      this.toast.openToast("danger","File khác nhau","File có độ dài không trùng với file 128kbps")
      this.song.file320.data=null;
    }
    if(bitRate>310 && bitRate < 330)
    {
      this.check320=true;
    }
    else
    {
      this.check320=false;
      this.song.file320.data=null;
    }

  }

  checkQualityLossless(event:any)
  {
    let size = this.song.fileLossless.data.size;
    let duration = event.currentTarget.duration;

    let bitRate = (size*8 / duration)/1000
    console.log(bitRate)
    if(this.song.duration!=Math.trunc(duration).toString())
    {
      this.toast.openToast("danger","File khác nhau","File có độ dài không trùng với file 128kbps")
      this.song.fileLossless.data=null;
    }
    if(bitRate>800 && bitRate < 1450)
      this.checkLossless=true;
    else
    {
      this.checkLossless=false;
      this.song.fileLossless.data=null;
    }
  }

  onDone()
  {
    window.location.href="./enduser/song"
  }

}
