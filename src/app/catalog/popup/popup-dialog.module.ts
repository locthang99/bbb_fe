import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbInputModule} from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {PopupDialogDialogComponent} from './popup-dialog.component'
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
// import { ThemeModule } from '../../@theme/theme.module';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    NbCardModule,
    NbIconModule,
    NbInputModule,
    Ng2SmartTableModule,
  ],
  declarations:[
    PopupDialogDialogComponent
  ]
})
export class PopupDialogDialogModule { }