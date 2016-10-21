import { Component, OnInit } from '@angular/core';

declare var google:any;

@Component({
  selector: 'app-google-chart',
  templateUrl: './google-chart.component.html',
  styleUrls: ['./google-chart.component.css']
})

export class GoogleChartComponent implements OnInit {
  private static googleLoaded:any;

  constructor() { 
    console.log("Here is GoogleChartComponent")
  }

  ngOnInit() {
    console.log('ngOnInit');
    if(!GoogleChartComponent.googleLoaded) {
      GoogleChartComponent.googleLoaded = true;
      google.charts.load('current',  {packages: ['corechart', 'timeline']});
    }
    google.charts.setOnLoadCallback(() => this.drawGraph());
  }

  drawGraph(){
      console.log("InitGraph base class!!!! ");
  }

  createTimelineChart(element:any):any {
      return new google.visualization.Timeline(element);
  }

  createDataTable(array:any[]):any {
      return google.visualization.arrayToDataTable(array);
  }

  getDataTable():any {
    return new google.visualization.DataTable();
  }

}
