import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbInputModule} from '@nebular/theme';
import {AccountComponent} from './account.component'
import { ThemeModule } from '../../@theme/theme.module';
import { FormsModule,ReactiveFormsModule  }   from '@angular/forms';
import {CatalogModule} from '../catalog.module'
import {MaterialModule} from 'app/material-module';


@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    FormsModule,
    ReactiveFormsModule,
    CatalogModule,
    MaterialModule
  ],
  declarations:[
    AccountComponent,
  ]
})
export class AccountModule { }