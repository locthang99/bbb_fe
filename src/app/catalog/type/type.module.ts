import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbInputModule} from '@nebular/theme';
import {TypeComponent} from './type.component'
import {ThemeModule } from '../../@theme/theme.module';
import {MaterialModule} from "../../material-module"

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    MaterialModule
  ],
  declarations:[
    TypeComponent
  ]
})
export class TypeModule { }