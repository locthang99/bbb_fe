import { NgxEchartsModule } from 'ngx-echarts';
import { NgModule } from '@angular/core';
import {DashboardUserComponent} from './dashboard-user.commponent'
import { NbCardModule} from '@nebular/theme';
import {CatalogModule} from "../catalog-module";
import {MaterialModule} from "app/material-module";
import { ChartRoleUserComponent } from './chart-role-user/chart-role-user.component';


@NgModule(
    {
        imports:[
            NgxEchartsModule,
            NbCardModule,
            CatalogModule,
            MaterialModule
        ],
        declarations:[
            DashboardUserComponent,
            ChartRoleUserComponent,

        ]
    }
)
export class DashboardUserModule {}