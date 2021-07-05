import { ModuleWithProviders, NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';
import { EndUserComponent } from './end-user.component';

import {CatalogModule} from '../catalog/catalog.module'
import {EnduserRoutingModule} from './end-user-routing.module'
import { ThemeModule } from '../@theme/theme.module';
//import { BrowserModule } from '@angular/platform-browser'
import {MaterialModule} from '../material-module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxEchartsModule } from 'ngx-echarts';
import { NbCardModule,NbSelectModule,NbToggleModule,NbIconModule,NbListModule,NbButtonModule,NbInputModule} from '@nebular/theme';
import { UpdateAccountComponent } from './update-account/update-account.component';
import { ListMySongComponent } from './list-my-song/list-my-song.component';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { MyBillComponent } from './my-bill/my-bill.component';
import { ChartReactionMySongComponent } from './my-dashboard/chart-reaction-my-song/chart-reaction-my-song.component';
import { TotalInfoSongComponent } from './my-dashboard/total-info-song/total-info-song.component';
import {InfoSongComponent} from './my-dashboard/total-info-song/info-song/info-song.component'


const MODULE_IMPORTS =[
  EnduserRoutingModule,CatalogModule,
  MaterialModule,ThemeModule,FormsModule,ReactiveFormsModule,NgxEchartsModule,NbCardModule,NbSelectModule,NbToggleModule,
  NbIconModule,NbListModule,NbButtonModule,NbMenuModule,NbInputModule,

]
const COMPONENTS =[
    EndUserComponent,
    UpdateAccountComponent,
    ListMySongComponent,
    MyDashboardComponent,
    MyBillComponent,
    ChartReactionMySongComponent,
    TotalInfoSongComponent,
    InfoSongComponent
]
@NgModule({
  imports: [...MODULE_IMPORTS],
  exports: [...COMPONENTS],
  declarations: [...COMPONENTS],
})
export class EnduserModule {
  static forRoot(): ModuleWithProviders<EnduserModule> {
    return {
      ngModule: EnduserModule,
    };
  }
}
