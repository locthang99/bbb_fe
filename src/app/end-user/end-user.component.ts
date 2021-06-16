import { Component, OnInit } from '@angular/core';
import { MENU_ITEMS } from './end-user-menu';
import { Router } from "@angular/router";
@Component({
  selector: 'ngx-end-user',
  styleUrls: ['end-user.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class EndUserComponent implements OnInit {

  constructor(private router: Router)
  {

  }
  menu = MENU_ITEMS;

  ngOnInit(): void {
  }

}
