import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    template:`<div></div>`
})
export class LogoutComponent{
  constructor(
    private router: Router,
  ) {
    localStorage.setItem('token','')
    this.router.navigate(['auth']);
  }
}