import { ModuleWithProviders, NgModule } from '@angular/core';
import {ListSongDetailComponent} from "./playlist/list-song-detail/list-song-detail.component"
import {CreatePlaylistComponent} from "./playlist/create-playlist/create-playlist.component"
import {CreateSongComponent} from "./song/create-song/create-song.component"
import {CreateTypeComponent} from "./type/create-type/create-type.component"
import {CreateTagComponent} from "./tag/create-tag/create-tag.component"

import {ChartHeaderComponent} from "./dashboard/chart-header/chart-header.component"
import {ChartSystemInfoComponent} from "./dashboard/chart-system-info/chart-system-info.component"
import {ChartReactionSongComponent} from "./dashboard/chart-reaction-song/chart-reaction-song.component"

import {EarningCardBackComponent} from "./dashboard/chart-system-info/back-side/earning-card-back.component"
import {EarningCardFrontComponent} from "./dashboard/chart-system-info/front-side/earning-card-front.component"
import {EarningPieChartComponent} from "./dashboard/chart-system-info/back-side/earning-pie-chart.component"
import {EarningLiveUpdateChartComponent} from "./dashboard/chart-system-info/front-side/earning-live-update-chart.component"

import { ThemeModule } from '../@theme/theme.module';
import { BrowserModule } from '@angular/platform-browser'
import {MaterialModule} from '../material-module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxEchartsModule } from 'ngx-echarts';
import { NbCardModule,NbSelectModule,NbToggleModule,NbIconModule} from '@nebular/theme';

const MODULE_IMPORTS =[
  MaterialModule,ThemeModule,FormsModule,ReactiveFormsModule,NgxEchartsModule,NbCardModule,NbSelectModule,NbToggleModule,
  NbIconModule

]
const COMPONENTS =[
    CreateSongComponent,
    ListSongDetailComponent,
    CreatePlaylistComponent,
    CreateTypeComponent,
    CreateTagComponent,

    ChartHeaderComponent,
    ChartSystemInfoComponent,
    ChartReactionSongComponent,

    EarningCardBackComponent,
    EarningCardFrontComponent,
    EarningPieChartComponent,
    EarningLiveUpdateChartComponent
]
@NgModule({
  imports: [...MODULE_IMPORTS],
  exports: [...COMPONENTS],
  declarations: [...COMPONENTS],
})
export class CatalogModule {
  static forRoot(): ModuleWithProviders<CatalogModule> {
    return {
      ngModule: CatalogModule,
    };
  }
}
