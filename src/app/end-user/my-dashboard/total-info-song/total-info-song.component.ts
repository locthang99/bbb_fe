import { Component, OnInit } from '@angular/core';
import {DashboardHttpClient} from 'app/services/dashboard/dashboard-service'

@Component({
  selector: 'ngx-total-info-song',
  templateUrl: './total-info-song.component.html',
  styleUrls: ['./total-info-song.component.scss']
})
export class TotalInfoSongComponent implements OnInit {

  dataSong : any[];
  types=['success','primary','warning','danger','info','success'];
  icons=['music-outline','list-outline','headphones-outline','heart-outline','message-square-outline','download-outline']
  constructor(private dbService: DashboardHttpClient) {
    dbService.getAllInfoMySong().then(res=>{
      this.dataSong=res.data;
    })
   }

  ngOnInit(): void {
  }

}
