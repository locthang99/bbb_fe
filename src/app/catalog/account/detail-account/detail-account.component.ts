import { Component, OnInit,Input,Inject } from '@angular/core';
import {AccountHttpClient} from 'app/services/account/account-service'
import {MatDialog,MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'ngx-detail-account',
  templateUrl: './detail-account.component.html',
  styleUrls: ['./detail-account.component.scss']
})
export class DetailAccountComponent implements OnInit {
  constructor(private accountService : AccountHttpClient,@Inject(MAT_DIALOG_DATA) public user: any) { }

  ngOnInit(): void {
  }

}
