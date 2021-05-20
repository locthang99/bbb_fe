import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbInputModule} from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {SongComponent} from './song.component'
import { ThemeModule } from '../../@theme/theme.module';
import {MatTableModule} from "@angular/material/table"
import {MatPaginatorModule} from '@angular/material/paginator';
@NgModule({
  imports: [
    NbCardModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    Ng2SmartTableModule,
    MatTableModule,
    MatPaginatorModule
    
  ],
  declarations:[
    SongComponent
  ]
})
export class SongModule { }