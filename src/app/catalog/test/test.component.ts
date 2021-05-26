import { Component, OnInit, TemplateRef } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { PlayListsClient } from "app/service/Playlist/PlaylistService";
import { NbDialogService } from "@nebular/theme";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { PopupDialogDialogComponent } from "../popup/popup-dialog.component";
import { Common } from "../common/conmmon";
import { HostBinding, OnDestroy } from '@angular/core';
import { NbThemeService, NbMediaBreakpoint, NbMediaBreakpointsService } from '@nebular/theme';
import { map } from 'rxjs/operators';
@Component({
  selector: "ngx-playlist",
  templateUrl:"./test.component.html",
  styleUrls: ["./test.component.scss"],
})
export class TestComponent {
    public data:string;
    constructor()
    {
        this.data="bbbbbbbbbbbbbbbbbbbbb"
    }
    onShow()
    {
    }
}
