import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AdminHttpClient } from "app/services/auth/auth-service";
@Component({
  templateUrl: "profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {
  loading = false;
  submitted = false;
  error = "";
  user:any;

  constructor(
    private authenticationService: AdminHttpClient
  ) {
    
    this.user ={
      id: 3,
      firstName: localStorage.getItem('firstName'),
      lastName: localStorage.getItem('lastName'),
      dob: localStorage.getItem('dob'),
      phoneNumber: localStorage.getItem('phoneNumber'),
      userName: localStorage.getItem('userName'),
      email: localStorage.getItem('email'),
      userVip: localStorage.getItem('userVip'),
      verifyEmailStatus: localStorage.getItem('verifyEmailStatus'),
      role: localStorage.getItem('role'),
      thumbnail: localStorage.getItem('thumbnail')
    }
  }

  ngOnInit() {
  }
}
