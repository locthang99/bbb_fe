import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbInputModule} from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {PlaylistComponent} from './playlist.component'
import { ThemeModule } from '../../@theme/theme.module';
import { FormsModule,ReactiveFormsModule  }   from '@angular/forms';
import {CatalogModule} from "../catalog-module"
import {MaterialModule} from "../../material-module"

@NgModule({
  imports: [
    NbCardModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    Ng2SmartTableModule,
    FormsModule,
    ReactiveFormsModule,
    CatalogModule,
    MaterialModule
    
  ],
  declarations:[
    PlaylistComponent
  ]
})
export class PlaylistModule { }