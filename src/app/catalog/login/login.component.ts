import { Component, OnInit,Injectable } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";

import {Msg} from "../../../assets/message/message"
import { AdminHttpClient } from "app/services/auth/auth-service";
import { LoginCommand } from "app/services/auth/authDTOs";

@Component({
  templateUrl: "login.component.html",
  styleUrls: [
    "./login.component.scss",   
    "./css/util.css",
    "./css/main.css"
],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  error = "";

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AdminHttpClient
  ) {
    // this.authenticationService.getCurrentUser().subscribe((res: any) => {
    //   if (res.status == 200) {
    //     if (res.data.data.role == "admin") this.router.navigate(["pages"]);
    //   } 
    // });
    // redirect to home if already logged in
    // if (this.authenticationService.currentUserValue) {
    //     this.router.navigate(['/']);
    // }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    let loginRq = new LoginCommand()
    loginRq.init({
      username: this.f.username.value,
      password: this.f.password.value,
      rememberMe: true,
    });
    this.authService.login(loginRq).then((res: any) => {
      console.log(res)
      
      if (res.code == "200") {
        localStorage.setItem("token", res.data.token);
        this.error=null    
        const returnUrl =
          this.route.snapshot.queryParams["returnUrl"] || "pages";
        console.log(returnUrl);
        this.router.navigate([returnUrl]).then(()=>{
        });
      }
        else
        {
          this.error = Msg.Login.InvalidPwd;
        } 
        this.loading = false;
        // console.log("Login ok +"+data.data.data.token) 
    });
  }
}
