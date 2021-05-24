import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbInputModule} from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {SongDetailDialogComponent} from './song-detail.component'
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
    MaterialModule
  ],
  declarations:[
    SongDetailDialogComponent
  ]
})
export class SongDialogModule { }