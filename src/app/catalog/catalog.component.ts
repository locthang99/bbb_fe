import { Component } from '@angular/core';

import { MENU_ITEMS } from './catalog-menu';
import { AdminHttpClient } from "app/services/auth/auth-admin-service";
import { Router } from "@angular/router";
@Component({
  selector: 'ngx-catalog',
  styleUrls: ['catalog.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class CatalogComponent {

  constructor(
    private auth:AdminHttpClient,
    private router: Router,
  ) {
    // this.auth.getCurrentUser().subscribe((res:any)=>{
    //   if(res.status!==200|| res.data.data.role!=='admin')
    //     this.router.navigate(["auth"]);
    // })
  }
  menu = MENU_ITEMS;
}
