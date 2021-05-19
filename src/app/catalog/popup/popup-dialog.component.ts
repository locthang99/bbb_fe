import { Component, Input } from "@angular/core";
import { NbDialogRef } from "@nebular/theme";


@Component({
  selector: "ngx-popup-dialog",
  templateUrl: "popup-dialog.component.html",
  styleUrls: ["popup-dialog.component.scss"],
})
export class PopupDialogDialogComponent {
  @Input() title: string;
  @Input() default:boolean;
  @Input() status:number;
  @Input() msg: any;

  constructor(protected ref: NbDialogRef<PopupDialogDialogComponent>) {}
  dismiss() {
    this.ref.close();
  }
}
