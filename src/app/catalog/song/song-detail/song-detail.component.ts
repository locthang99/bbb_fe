import { Component, Input,Inject } from "@angular/core";
import {MatDialog,MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: "ngx-song-detail",
  templateUrl: "song-detail.component.html",
  styleUrls: ["song-detail.component.scss"],
})
export class SongDetailDialogComponent {
  @Input() title: string;
  contentLyric="";
  constructor(@Inject(MAT_DIALOG_DATA) public song: any) {
    if(song.lyric)
    {
      fetch(song.lyric).then(res=> res.text()).then(res=>this.contentLyric=res)
      .catch(err=>{})
    }
  }
}
