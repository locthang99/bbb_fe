import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';

import { UserActivityData, UserActive } from '../../../@core/data/user-activity';
import {DashboardsClient} from '../../../service/Dashboard/DashboardService'

@Component({
  selector: 'ngx-user-activity',
  styleUrls: ['./user-activity.component.scss'],
  templateUrl: './user-activity.component.html',
})
export class ECommerceUserActivityComponent implements OnDestroy {

  private alive = true;

  userActivity: any[] = [];
  type = 'month';
  types = ['month', 'year'];
  currentTheme: string;

  constructor(private themeService: NbThemeService,
              private userActivityService: UserActivityData,
              private dashboardsClient:DashboardsClient) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.currentTheme = theme.name;
    });

    this.getUserActivity(this.type);

  }

  getUserActivity(period: string) {
    // this.userActivityService.getUserActivityData(period)
    //   .pipe(takeWhile(() => this.alive))
    //   .subscribe(userActivityData => {
    //     this.userActivity = userActivityData;
    //     console.log(userActivityData);

    //   });
    this.dashboardsClient.getCreateUser(period).subscribe((res:any)=>{
      let data =new Array();
       res.data.data.forEach(element => {
         data.push({date:element.title,pagesVisitCount:+element.value})       
       });
       this.userActivity=data;
    })
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
