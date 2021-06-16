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
import { CreateSongComponent } from './create-song/create-song.component';
import { UpdateAccountComponent } from './update-account/update-account.component';
import { ListMySongComponent } from './list-my-song/list-my-song.component';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';



const MODULE_IMPORTS =[
  EnduserRoutingModule,CatalogModule,
  MaterialModule,ThemeModule,FormsModule,ReactiveFormsModule,NgxEchartsModule,NbCardModule,NbSelectModule,NbToggleModule,
  NbIconModule,NbListModule,NbButtonModule,NbMenuModule,NbInputModule,

]
const COMPONENTS =[
    EndUserComponent,
]
@NgModule({
  imports: [...MODULE_IMPORTS],
  exports: [...COMPONENTS],
  declarations: [...COMPONENTS, CreateSongComponent, UpdateAccountComponent, ListMySongComponent, MyDashboardComponent],
})
export class EnduserModule {
  static forRoot(): ModuleWithProviders<EnduserModule> {
    return {
      ngModule: EnduserModule,
    };
  }
}
