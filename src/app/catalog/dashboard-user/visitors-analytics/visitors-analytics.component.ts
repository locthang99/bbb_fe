import { Component, OnDestroy } from "@angular/core";
import { takeWhile } from "rxjs/operators";
import { NbThemeService } from "@nebular/theme";
import {
  OutlineData,
  VisitorsAnalyticsData,
} from "../../../@core/data/visitors-analytics";
import { DashboardHttpClient } from "app/services/dashboard/dashboard-service";
import { forkJoin } from "rxjs";

@Component({
  selector: "ngx-visitors-analytics",
  styleUrls: ["./visitors-analytics.component.scss"],
  templateUrl: "./visitors-analytics.component.html",
})
export class ChartVisitorsAnalyticsComponent implements OnDestroy {
  private alive = true;

  pieChartValue: number;
  chartLegend: { iconColor: string; title: string }[];
  visitorsAnalyticsData = { innerLine: [], outerLine: [] };

  constructor(
    private themeService: NbThemeService,
    private visitorsAnalyticsChartService: VisitorsAnalyticsData,
    private dbService: DashboardHttpClient
  ) {
    this.themeService
      .getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe((theme) => {
        this.setLegendItems(theme.variables.visitorsLegend);
      });

    forkJoin(
      this.visitorsAnalyticsChartService.getInnerLineChartData(),
      this.visitorsAnalyticsChartService.getOutlineLineChartData(),
      this.visitorsAnalyticsChartService.getPieChartData()
    )
      .pipe(takeWhile(() => this.alive))
      .subscribe(
        ([innerLine, outerLine, pieChartValue]: [
          number[],
          OutlineData[],
          number
        ]) => {
          console.log(outerLine)
          //this.pieChartValue = pieChartValue;
        }
      );
  }

  setLegendItems(visitorsLegend): void {
    this.chartLegend = [
      {
        iconColor: visitorsLegend.secondIcon,
        title: "Năm sinh",
      },
    ];
  }



  ngOnDestroy() {
    this.alive = false;
  }
}
