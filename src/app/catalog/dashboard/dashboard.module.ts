import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgModule } from '@angular/core';
import {DashboardComponent} from './dashboard.commponent'
import { NbCardModule} from '@nebular/theme';
import {CatalogModule} from "../catalog-module";
import {MaterialModule} from "app/material-module";
@NgModule(
    {
        imports:[
            NgxEchartsModule,
            NbCardModule,
            CatalogModule,
            MaterialModule
        ],
        declarations:[
            DashboardComponent,
        ]
    }
)
export class DashboardModule {}