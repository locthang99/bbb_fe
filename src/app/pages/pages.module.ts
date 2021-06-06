import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from '../catalog/dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import {TableDataModule} from "../@theme/components/table-data/table-data.module";
import {MaterialModule} from "../material-module"
import {CatalogModule} from "../catalog/catalog-module"
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    CatalogModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
