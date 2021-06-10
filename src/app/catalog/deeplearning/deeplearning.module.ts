import { NgxEchartsModule } from 'ngx-echarts';
import { NgModule } from '@angular/core';
import {DeeplearningComponent} from './deeplearning.component'
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
            DeeplearningComponent
        ]
    }
)
export class DeeplearningModule {}