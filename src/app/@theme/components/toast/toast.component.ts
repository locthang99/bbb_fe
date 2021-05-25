import {Component,Injectable} from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

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
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  
  constructor(private _snackBar: MatSnackBar) {}

  public openSnackBar(msg) {
    this._snackBar.open(msg, 'OK', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration:4*1000
    });
  }
}