import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
} from "@angular/core";
import {
  NbMediaBreakpoint,
  NbMediaBreakpointsService,
  NbThemeService,
} from "@nebular/theme";
import { takeWhile } from "rxjs/operators";

@Component({
  selector: "ngx-chart-panel-header",
  styleUrls: ["./chart-panel-header.component.scss"],
  templateUrl: "./chart-panel-header.component.html",
})
export class ChartPanelHeaderComponent implements OnDestroy {
  private alive = true;

  @Output() periodChange = new EventEmitter<string>();

  @Input() type: string = "month";
  @Input() song: boolean=true;
  types: string[] = ["month", "year"];
  chartLegend: { iconColor: string; title: string }[];
  breakpoint: NbMediaBreakpoint = { name: "", width: 0 };
  breakpoints: any;
  currentTheme: string;

  constructor(
    private themeService: NbThemeService,
    private breakpointService: NbMediaBreakpointsService
  ) {
    this.themeService
      .getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe((theme) => {
        const orderProfitLegend = theme.variables.orderProfitLegend;

        this.currentTheme = theme.name;
        //console.log(theme)
        this.setLegendItems(orderProfitLegend);
      });

    this.breakpoints = this.breakpointService.getBreakpointsMap();
    this.themeService
      .onMediaQueryChange()
      .pipe(takeWhile(() => this.alive))
      .subscribe(([oldValue, newValue]) => {
        this.breakpoint = newValue;
      });
  }

  setLegendItems(orderProfitLegend) {
      this.chartLegend = [
        {
          iconColor: orderProfitLegend.firstItem,
          title: "Like",
        },
        {
          iconColor: orderProfitLegend.secondItem,
          title: "Bình luận",
        },
        {
          iconColor: '#e67e22',
          title: "Lượt nhge",
        },
        {
          iconColor: '#9b59b6',
          title: "Lượt tải",
        },
      ];
      console.log(this.chartLegend[0])
    
      
  }


  
  changePeriod(period: string): void {
    this.type = period;
    this.periodChange.emit(period);
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
