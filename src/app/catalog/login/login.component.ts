import { Component, OnInit, Injectable } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { Msg } from "../../../assets/message/message";
import { AdminHttpClient } from "app/services/auth/auth-admin-service";
import { EnduserHttpClient } from "app/services/auth/auth-enduser-service";
import { LoginCommand } from "app/services/auth/authDTOs";
;


@Component({
  templateUrl: "login.component.html",
  styleUrls: ["./login.component.scss", "./css/util.css", "./css/main.css"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  error = "";
  title ="";
  modeAdmin:boolean;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private adminService: AdminHttpClient,
    private enduserService: EnduserHttpClient
  ) {
    if(window.location.href.includes("admin"))
    {
      this.modeAdmin = true;
      this.title="Đăng nhập quản lí"
      if(localStorage.getItem("admin.token"))
        this.router.navigate(["admin"])
    }
      else
      {
        this.modeAdmin = false;
        this.title="Đăng nhập người dùng"
        if(localStorage.getItem("enduser.token"))
          this.router.navigate(["enduser"])
      }
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
    if (this.loginForm.invalid)
      return;

    this.loading = true;
    let loginRq = new LoginCommand();
    loginRq.init({
      username: this.f.username.value,
      password: this.f.password.value,
      rememberMe: true,
    });

    if(window.location.href.includes("admin"))
    {
      this.login_admin(loginRq);
    }
    else
    {
      this.login_enduser(loginRq)
    }
  }

  login_admin(cmd: any) {
    this.adminService.login(cmd).then((res: any) => {
      console.log(res);
      if (res.code == "200") {
        localStorage.setItem("admin.token", res.data.token);
        this.setProfile('admin');
        this.error = null;
      } else {
        this.error = Msg.Login.InvalidPwd;
        this.loading = false;
      }
    });
  }

  login_enduser(cmd) {
    this.enduserService.login(cmd).then((res: any) => {
      if (res.code == "200") {
        localStorage.setItem("enduser.token", res.data.token);
        this.setProfile('enduser');
        this.error = null;

      } else {
        this.error = Msg.Login.InvalidPwd;
        this.loading = false;
      }
    });
  }

  setProfile(typeUser)
  {
    this.enduserService.getProfile().then(res=>{
      let userData =res.data;
      for (let prop in userData)
      {
        localStorage.setItem(typeUser+"."+prop.toString(),userData[prop])
      }     
    }).then(res=>{
      const returnUrl = this.route.snapshot.queryParams["returnUrl"] || typeUser;
      this.router.navigate([returnUrl]).then(() => {this.loading = false;});
    })
  }
}
