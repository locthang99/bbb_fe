import { Component, OnInit,Input } from '@angular/core';
import { SafeUrl,DomSanitizer } from '@angular/platform-browser';
import {DeeplearningHttpClient,} from 'app/services/deeplearning/deeplearning-service'
import {Model} from 'app/services/deeplearning/deeplearning-dto'

@Component({
  selector: 'ngx-predict-model',
  templateUrl: './predict-model.component.html',
  styleUrls: ['./predict-model.component.scss']
})
export class PredictModelComponent implements OnInit {
@Input() listModels : any[];
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
        { value: Math.random()%100, nameType: "Type 1" },
        { value: Math.random()%100, nameType: "Type 2" },
        { value: Math.random()%100, nameType: "Type 3" },
        { value: Math.random()%100, nameType: "Type 4" },
        { value: Math.random()%100, nameType: "Type 5" },
        { value: Math.random()%100, nameType: "Type 6" },
        { value: Math.random()%100, nameType: "Type 7" },
        { value: Math.random()%100, nameType: "Type 8" },
        { value: Math.random()%100, nameType: "Type 9" },
      ],
      imgMfcc:""
      },
      {time:"--:--",predict:[
        { value: Math.random()%100, nameType: "Type 1" },
        { value: Math.random()%100, nameType: "Type 2" },
        { value: Math.random()%100, nameType: "Type 3" },
        { value: Math.random()%100, nameType: "Type 4" },
        { value: Math.random()%100, nameType: "Type 5" },
        { value: Math.random()%100, nameType: "Type 6" },
        { value: Math.random()%100, nameType: "Type 7" },
        { value: Math.random()%100, nameType: "Type 8" },
        { value: Math.random()%100, nameType: "Type 9" },
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
    }
  }

  onTest()
  {
    this.isLoading=true;
    this.deeplearningService.predictSong(this.fileAudioInput,this.selectedModel.no).then(res=>{
      this.resultPredict = res.data;
      this.isLoading = false;
    })
  }
}
