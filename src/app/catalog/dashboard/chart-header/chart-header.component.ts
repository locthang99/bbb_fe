import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'ngx-chart-header',
  templateUrl: './chart-header.component.html',
  styleUrls: ['./chart-header.component.scss']
})
export class ChartHeaderComponent implements OnInit {

  optionChart = [
    {value: 'month', viewValue: 'Tháng'},
    {value: 'year', viewValue: 'Năm'},
  ];
  defaultChart = this.optionChart[0].value;
  isLineChart= true;

  @Output() onChangeShape : EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onChangeTime : EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  selectShape(ev:Event)
  {
    this.isLineChart=!this.isLineChart;
    this.onChangeShape.emit(this.isLineChart);
  }
  selectChart(ev:any)
  {
    this.onChangeTime.emit(ev)
  }
}
