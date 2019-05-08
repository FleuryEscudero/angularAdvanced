import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'appDoughnutgraphic',
  templateUrl: './doughnutgraphic.component.html'
})
export class DoughnutgraphicComponent implements OnInit {


  @Input('chartLabel') chartLabel: Label[] = [];
  @Input('chartData') chartData: MultiDataSet = [];
  @Input('chartType') chartType: ChartType = 'doughnut';
  @Input('legend') legend:''

  constructor() { }
  
  ngOnInit() {
  }




}
