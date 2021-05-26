import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbInputModule} from '@nebular/theme';
import {SongComponent} from './song.component'
import {ThemeModule } from '../../@theme/theme.module';
import {MaterialModule} from "../../material-module"

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    MaterialModule
  ],
  declarations:[
    SongComponent
  ]
})
export class SongModule { }