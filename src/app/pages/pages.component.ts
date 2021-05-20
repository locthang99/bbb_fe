import { Component } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';
import { UsersClient } from "app/service/Account/AccountService";
import { Router } from "@angular/router";
@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent {

  constructor(
    private auth:UsersClient,
    private router: Router,
  ) {
    // this.auth.getCurrentUser().subscribe((res:any)=>{
    //   if(res.status!==200|| res.data.data.role!=='admin')
    //     this.router.navigate(["auth"]);
    // })
  }
  menu = MENU_ITEMS;
}
