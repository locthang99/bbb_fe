import { Component, Input } from "@angular/core";
import { NbDialogRef } from "@nebular/theme";

@Component({
  selector: "ngx-song-dialog",
  templateUrl: "song-dialog.component.html",
  styleUrls: ["song-dialog.component.scss"],
})
export class SongDialogComponent {
  @Input() title: string;
  @Input() data: any;

  constructor(protected ref: NbDialogRef<SongDialogComponent>) {}
  getSingers() {
    let singers = "";
    console.log(this.data.owners);
    this.data.owners.forEach((s) => {
      singers += s + ", ";
    });

    if (singers.length > 0) singers = singers.substring(0, singers.length - 2);

    return;
  }
  getTypes() {
    let types = "";
    this.data.types.forEach((t) => {
      types += t + ", ";
    });
    if (types.length > 0) types = types.substring(0, types.length - 2);
    return types;
  }
  getTags() {
    let tags = "";
    this.data.tags.forEach((t) => {
      tags += t + ", ";
    });
    if (tags.length > 0) tags = tags.substring(0, tags.length - 2);
    return tags;
  }
  dismiss() {
    this.ref.close();
  }
}
