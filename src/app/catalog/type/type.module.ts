import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbInputModule} from '@nebular/theme';
import {TypeComponent} from './type.component'
import {ThemeModule } from '../../@theme/theme.module';
import {MaterialModule} from "../../material-module"
import {CatalogModule} from "../catalog-module"

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    MaterialModule,
    CatalogModule
  ],
  declarations:[
    TypeComponent
  ]
})
export class TypeModule { }