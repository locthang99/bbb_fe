import { Component, OnInit,Input, ViewChild } from '@angular/core';
import { SafeUrl,DomSanitizer } from '@angular/platform-browser';
import {DeeplearningHttpClient,} from 'app/services/deeplearning/deeplearning-service'
import {Model} from 'app/services/deeplearning/deeplearning-dto'
import { PlayerComponent } from 'app/@theme/components';

@Component({
  selector: 'ngx-predict-model',
  templateUrl: './predict-model.component.html',
  styleUrls: ['./predict-model.component.scss']
})
export class PredictModelComponent implements OnInit {
@ViewChild('player') player :PlayerComponent;
@Input() listModels : any[];
  waitTime = 0;
  isLoading = false;
  selectedModel : Model;
  resultPredict : any[];
  fileMusic : SafeUrl;
  fileName = "*.mp3";
  canTest = false;
  fileAudioInput = {data:null,fileName:""}
  constructor(private sanitization:DomSanitizer,private deeplearningService : DeeplearningHttpClient) { 
    //this.fileMusic = 'http://api.mp3.zing.vn/api/streaming/audio/ZWZCDEOA/128'
    this.selectedModel ={acc:"",isAvailable:true,name:"",totalTrain:0,no:0,parameters:"",typeMusic:"",typeNetwork:""}
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
      ],
      imgMfcc:""
      },
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
      ],
      imgMfcc:""
    }
    ]
  }

  ngOnInit(): void {
  }
  changeModel(ev:any){
    this.selectedModel = this.listModels[ev-1];
  }
  changeFileAudio(event:any)
  {
    this.canTest = true;
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      this.fileName = event.target.files[0].name;
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.fileMusic = this.sanitization.bypassSecurityTrustResourceUrl(event.target.result as string);

      }
      this.fileAudioInput.data = event.target.files[0];
      this.fileAudioInput.fileName = this.fileName;
      this.player.setTrack(this.fileMusic);
    }
  }

  onTest()
  {
    this.isLoading=true;
    this.waitTime = 0;
    let startTick = setInterval(()=>{
      this.waitTime+=0.1
    },100)
    this.deeplearningService.predictSong(this.fileAudioInput,this.selectedModel.no).then(res=>{
      this.resultPredict = res.data;
      this.isLoading = false;
      clearInterval(startTick)
    })
  }


}
