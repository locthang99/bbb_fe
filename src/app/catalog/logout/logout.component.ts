import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    template:`<div></div>`
})
export class LogoutComponent{
  constructor(
    private router: Router,
  ) {
    if(window.location.href.includes('admin'))
    {
      localStorage.setItem('admin.token','')
      this.router.navigate(['auth_admin']);
    }
    else
    {
      localStorage.setItem('enduser.token','')
      this.router.navigate(['auth_enduser']);
    }

  }
}