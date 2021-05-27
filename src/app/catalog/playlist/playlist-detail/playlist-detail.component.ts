import { Component, Input,Inject } from "@angular/core";
import { NbDialogRef } from "@nebular/theme";
import {MatDialog,MAT_DIALOG_DATA} from '@angular/material/dialog';
import {lang} from "../../../@language/language"
@Component({
  selector: "ngx-playlist-detail",
  templateUrl: "playlist-detail.component.html",
  styleUrls: ["playlist-detail.component.scss"],
})
export class PlaylistDetailDialogComponent {
  @Input() title: string;
  lang = lang;
  panelOpenState = false;
  openAddSong = false;
  constructor(@Inject(MAT_DIALOG_DATA) public playlist: any) {}
}
