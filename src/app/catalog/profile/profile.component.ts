import { Component, OnInit } from "@angular/core";
import {MatDialog,MAT_DIALOG_DATA} from '@angular/material/dialog';
import {PopupChangePwdComponent} from './popup-change-pwd/popup-change-pwd.component'

@Component({
  templateUrl: "profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {
  loading = false;
  submitted = false;
  error = "";
  user:any;

  constructor(public popupChangPwd : MatDialog) {
    
    if(window.location.href.includes('admin'))
      this.getProfile('admin')
    else
      this.getProfile('enduser')
  }

  getProfile(typeUser)
  {
    this.user ={
      id: localStorage.getItem(typeUser+'.id'),
      firstName: localStorage.getItem(typeUser+'.firstName'),
      lastName: localStorage.getItem(typeUser+'.lastName'),
      dob: localStorage.getItem(typeUser+'.dob'),
      phoneNumber: localStorage.getItem(typeUser+'.phoneNumber'),
      userName: localStorage.getItem(typeUser+'.userName'),
      email: localStorage.getItem(typeUser+'.email'),
      userVip: localStorage.getItem(typeUser+'.userVip'),
      verifyEmailStatus: localStorage.getItem(typeUser+'.verifyEmailStatus'),
      role: localStorage.getItem(typeUser+'.role'),
      thumbnail: localStorage.getItem(typeUser+'.thumbnail')
    }
  }
  ngOnInit() {
  }

  onPopupChangePwd()
  {
    this.popupChangPwd.open(PopupChangePwdComponent)
  }
}
