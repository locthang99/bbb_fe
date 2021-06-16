import { Component, Input,Inject } from "@angular/core";
import {MatDialog,MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: "ngx-song-detail",
  templateUrl: "song-detail.component.html",
  styleUrls: ["song-detail.component.scss"],
})
export class SongDetailDialogComponent {
  @Input() title: string;

  constructor(@Inject(MAT_DIALOG_DATA) public song: any) {}
}
