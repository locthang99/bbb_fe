import {Component,Injectable} from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { NbDialogService } from "@nebular/theme";
import { DatePipe } from '@angular/common';
import {
  NbComponentStatus,
  NbGlobalPhysicalPosition,
  NbToastrService,
} from '@nebular/theme';
import {lang} from "../../../@language/language"
/**
 * @title Snack-bar with configurable position
 */
@Component({
  selector: 'ngx-toast',
  templateUrl:"./toast.component.html"
})
@Injectable({
  providedIn: 'root',
  })
export class ToastComponent {

  constructor(private toastrService: NbToastrService) {}

  public openToast(type: NbComponentStatus, title: string, body: string) {
    const config = {
      status: type,
      destroyByClick: false,
      duration: 5000,
      hasIcon: true,
      position: NbGlobalPhysicalPosition.TOP_RIGHT,
      preventDuplicates: false,
    };
    const titleContent = title ? `: ${title}` : '';
    this.toastrService.show(
      body,
      `Code ${titleContent}`,
      config);
  }
}