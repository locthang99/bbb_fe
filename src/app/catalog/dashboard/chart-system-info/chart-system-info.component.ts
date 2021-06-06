import { Component, OnInit, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import {themeColors} from 'app/@theme/themeColor'

@Component({
  selector: 'ngx-chart-system-info',
  templateUrl: './chart-system-info.component.html',
  styleUrls: ['./chart-system-info.component.scss']
})
export class ChartSystemInfoComponent {
  flipped = false;

  toggleView() {
    this.flipped = !this.flipped;
  }
}