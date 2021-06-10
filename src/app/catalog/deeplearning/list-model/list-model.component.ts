import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'ngx-list-model',
  templateUrl: './list-model.component.html',
  styleUrls: ['./list-model.component.scss']
})
export class ListModelComponent implements OnInit {
  @Input() listModels : any[];
  cols=['no','name','typeNetwork','acc','totalTrain','parameters'];
  constructor() {
   }

  ngOnInit(): void {
  }

}
