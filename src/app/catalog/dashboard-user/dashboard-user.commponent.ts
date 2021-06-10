import {Component, OnDestroy} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators' ;
import { SolarData } from '../../@core/data/solar';

interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
}

@Component({
  selector: 'ngx-dashboard-user',
  styleUrls: ['./dashboard-user.component.scss'],
  templateUrl: './dashboard-user.component.html',
})
export class DashboardUserComponent  {
}