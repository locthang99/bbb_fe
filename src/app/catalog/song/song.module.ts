import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbInputModule} from '@nebular/theme';
import {SongComponent} from './song.component'
import {ThemeModule } from '../../@theme/theme.module';
import {MaterialModule} from "../../material-module"
import {CatalogModule} from "../catalog.module"

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    MaterialModule,
    CatalogModule
  ],
  declarations:[
    SongComponent
  ]
})
export class SongModule { }