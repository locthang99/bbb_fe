import {Component} from '@angular/core';
import {DeeplearningHttpClient} from 'app/services/deeplearning/deeplearning-service'
import {Model} from 'app/services/deeplearning/deeplearning-dto'

@Component({
  selector: 'ngx-deeplearning',
  styleUrls: ['./deeplearning.component.scss'],
  templateUrl: './deeplearning.component.html',
})
export class DeeplearningComponent  {
  listModels : Model[];
  constructor(private deeplearningService : DeeplearningHttpClient)
  {
    this.listModels = [{acc:"",isAvailable:true,name:"",totalTrain:0,no:0,parameters:"",typeMusic:"",typeNetwork:""}];
    this.deeplearningService.getModels().then(res=>{
      this.listModels = res.data;
    })
  }
}