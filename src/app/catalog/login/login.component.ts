import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";

import { UsersClient } from "app/service/Account/AccountService";
import { UserLoginRequest } from "app/service/Account/AcountDto";
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
    private authenticationService: UsersClient
  ) {
    this.authenticationService.getCurrentUser().subscribe((res: any) => {
      if (res.status == 200) {
        if (res.data.data.role == "admin") this.router.navigate(["pages"]);
      } 
    });
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
    let loginRq = new UserLoginRequest({
      user: this.f.username.value,
      password: this.f.password.value,
      rememberMe: true,
    });
    this.authenticationService.login(loginRq).subscribe((res: any) => {
      //console.log(res)
      
      if (res.status == "200") {
        localStorage.setItem("token", res.data.data.token);
        this.authenticationService.getCurrentUser().subscribe((res:any)=>{
          if(res.data.data.role=='admin')
        {      
          this.error=null    
          const returnUrl =
            this.route.snapshot.queryParams["returnUrl"] || "pages";
          console.log(returnUrl);
          this.router.navigate([returnUrl]).then(()=>{
            this.loading = false;
          });
        }
        else
        {
          this.error = "Đăng nhập với tài khoản Admin";
        }
        })
        
        
        
        // console.log("Login ok +"+data.data.data.token)
      } else {
        localStorage.setItem("token", "");
        this.error = "Sai tài khoản hoặc mật khẩu";
        this.loading = false;
      }
    });
    // .pipe(first())
    // .subscribe({
    //     next: () => {
    //         // get return url from route parameters or default to '/'
    //         const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    //         this.router.navigate([returnUrl]);
    //     },
    //     error: error => {
    //         this.error = error;
    //         this.loading = false;
    //     }
    // });
  }
}
