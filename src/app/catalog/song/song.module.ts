import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbInputModule} from '@nebular/theme';
import {SongComponent} from './song.component'
import {ThemeModule } from '../../@theme/theme.module';
import {TableDataModule} from "../../@theme/components/table-data/table-data.module";
import {MaterialModule} from "../../material-module"

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    TableDataModule,
    MaterialModule
  ],
  declarations:[
    SongComponent
  ]
})
export class SongModule { }