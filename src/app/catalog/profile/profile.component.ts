import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AdminHttpClient } from "app/services/auth/auth-service";
import { parseDatetime } from "../common/conmmon";
@Component({
  templateUrl: "profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {
  loading = false;
  submitted = false;
  error = "";
  user:any

  constructor(
    private authenticationService: AdminHttpClient
  ) {
    
    // redirect to home if already logged in
    // if (this.authenticationService.currentUserValue) {
    //     this.router.navigate(['/']);
    // }
  }

  ngOnInit() {
    // this.authenticationService.getCurrentUser().subscribe((res: any) => {
    //   if (res.status == 200) {
    //     this.user=res.data.data;
    //     this.user.dob = parseDatetime(this.user.dob)
    //   } 
    // });

  }
}
