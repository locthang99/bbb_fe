import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { NbDialogService } from "@nebular/theme";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Common,parseDatetime } from "../common/conmmon";
import { DatePipe } from '@angular/common';
@Component({
  selector: "ngx-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.scss"],
})
export class AccountComponent  {
}
