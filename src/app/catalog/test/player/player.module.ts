import { NgModule } from '@angular/core';
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
import {PlayerComponent} from './player.component'
@NgModule({
    imports: [
        NbActionsModule,
        NbButtonModule,
        NbCardModule,
        NbTabsetModule,
        NbUserModule,
        NbRadioModule,
        NbSelectModule,
        NbListModule,
        NbIconModule,
    ],
    exports:[PlayerComponent],
    declarations:[PlayerComponent
    ]
  })
  export class PlayerModule { }