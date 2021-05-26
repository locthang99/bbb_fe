import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbInputModule} from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {PlaylistDetailDialogComponent} from './playlist-detail.component'
import {ListSongDetailModule} from "../list-song-detail/list-song-detail.module"
// import { ThemeModule } from '../../@theme/theme.module';
import {MaterialModule} from "../../../material-module"
import { BrowserModule } from '@angular/platform-browser'
@NgModule({
  imports: [
    NbCardModule,
    NbIconModule,
    NbInputModule,
    Ng2SmartTableModule,
    BrowserModule,
    MaterialModule,
  ],
  declarations:[
    PlaylistDetailDialogComponent
  ]
})
export class SongDialogModule { }