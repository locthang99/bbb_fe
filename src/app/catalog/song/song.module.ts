import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbInputModule} from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {SongComponent} from './song.component'
import { ThemeModule } from '../../@theme/theme.module';

@NgModule({
  imports: [
    NbCardModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    Ng2SmartTableModule,
  ],
  declarations:[
    SongComponent
  ]
})
export class SongModule { }