import { FormsModule } from '@angular/forms';
import {TestComponent} from './test.component';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import {PlayerModule} from './player/player.module'
import {Test2Component} from './test2/test2.component'
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbTabsetModule,
  NbUserModule,
  NbRadioModule,
  NbSelectModule,
  NbListModule,
  NbIconModule,
} from '@nebular/theme';
import { ThemeModule } from 'app/@theme/theme.module';
@NgModule({
  imports: [
    PlayerModule,
    NbActionsModule,
    NbButtonModule,
    NbCardModule,
    NbTabsetModule,
    NbUserModule,
    NbRadioModule,
    NbSelectModule,
    NbListModule,
    NbIconModule,
    FormsModule,  
    ThemeModule 
  ],
  declarations:[
    TestComponent,
  ]

})
export class TestModule { }