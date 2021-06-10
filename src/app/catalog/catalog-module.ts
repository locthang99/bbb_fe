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

import {ChartVisitorsAnalyticsComponent} from './dashboard-user/visitors-analytics/visitors-analytics.component'
import {ECommerceVisitorsAnalyticsChartComponent} from './dashboard-user/visitors-analytics/visitors-analytics-chart/visitors-analytics-chart.component'
import {ECommerceVisitorsStatisticsComponent} from './dashboard-user/visitors-analytics/visitors-statistics/visitors-statistics.component'
import {ECommerceLegendChartComponent} from "./dashboard-user/legend-chart/legend-chart.component"
import {SlideOutComponent} from "./dashboard-user/slide-out/slide-out.component"

import {TrafficCardsHeaderComponent} from "./dashboard/chart-new-song/traffic-cards-header/traffic-cards-header.component";
import {TrafficBackCardComponent} from "./dashboard/chart-new-song/back-side/traffic-back-card.component";
import {TrafficBarChartComponent} from "./dashboard/chart-new-song/back-side/traffic-bar-chart.component";
import {TrafficFrontCardComponent} from "./dashboard/chart-new-song/front-side/traffic-front-card.component";
import {TrafficBarComponent} from "./dashboard/chart-new-song/front-side/traffic-bar/traffic-bar.component";
import {ChartNewSongComponent} from "./dashboard/chart-new-song/chart-new-song.component"

import {ChartTypeComponent} from "./dashboard/chart-type/chart-type.component"

import { ServerInfoComponent } from './deeplearning/server-info/server-info.component';
import { ListModelComponent } from './deeplearning/list-model/list-model.component';
import { PredictModelComponent } from './deeplearning/predict-model/predict-model.component';
import { DetailPredictTypeComponent } from './deeplearning/predict-model/detail-predict-type/detail-predict-type.component';
import { ListImageMfccComponent } from './deeplearning/predict-model/list-image-mfcc/list-image-mfcc.component';

import { ThemeModule } from '../@theme/theme.module';
import { BrowserModule } from '@angular/platform-browser'
import {MaterialModule} from '../material-module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxEchartsModule } from 'ngx-echarts';
import { NbCardModule,NbSelectModule,NbToggleModule,NbIconModule,NbListModule,NbButtonModule} from '@nebular/theme';



const MODULE_IMPORTS =[
  MaterialModule,ThemeModule,FormsModule,ReactiveFormsModule,NgxEchartsModule,NbCardModule,NbSelectModule,NbToggleModule,
  NbIconModule,NbListModule,NbButtonModule

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
    ChartNewSongComponent,
    ChartTypeComponent,

    EarningCardBackComponent,
    EarningCardFrontComponent,
    EarningPieChartComponent,
    EarningLiveUpdateChartComponent,

    TrafficCardsHeaderComponent,
    TrafficBackCardComponent,
    TrafficBarChartComponent,
    TrafficFrontCardComponent,
    TrafficBarComponent,

    ServerInfoComponent,
    ListModelComponent,
    PredictModelComponent,
    DetailPredictTypeComponent,
    ListImageMfccComponent,

    ChartVisitorsAnalyticsComponent,
    ECommerceVisitorsAnalyticsChartComponent,
    ECommerceVisitorsStatisticsComponent,
    ECommerceLegendChartComponent,
    SlideOutComponent

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
