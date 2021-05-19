import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbInputModule} from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {SongDialogComponent} from './song-dialog.component'
// import { ThemeModule } from '../../@theme/theme.module';

@NgModule({
  imports: [
    NbCardModule,
    NbIconModule,
    NbInputModule,
    Ng2SmartTableModule,
  ],
  declarations:[
    SongDialogComponent
  ]
})
export class SongDialogModule { }