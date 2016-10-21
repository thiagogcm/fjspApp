import { Component } from '@angular/core';
import { GoogleChartComponent } from '../google-chart/google-chart.component';
import { OperationService } from '../services/operation.service';
import { OperationModel } from '../shared/operation-model';

import { Observable } from 'rxjs/Rx'; 
import 'rxjs/Rx';

declare var google:any;

@Component({
  selector: 'app-gantt',
  templateUrl: './gantt.component.html',
  styleUrls: ['./gantt.component.css']
})
export class GanttComponent extends GoogleChartComponent {

  private data;

  private chart;
  private options;

  private operations: OperationModel[];
  private source: Observable<OperationModel>;

  private static counter: number = 0;


  constructor(public operationService: OperationService) { 
    super();
  }

  toSeconds(days) {
    //return days * 24 * 60 * 60 * 1000;
    return days * 60 *  1000;
  }

  drawGraph() {
    
    this.data = this.getDataTable();

    this.operations = this.operationService.getOperations();

    this.options = {
      timeline: { showRowLabels: true, showBarLabels: false },
      avoidOverlappingGridLines: true
    };

    this.chart = this.createTimelineChart(document.getElementById('chart_timeline'));

    google.visualization.events.addListener(this.chart, 'ready', this.readyHandler)
   

    this.data.addColumn({ type: 'string', id: 'Machine' });
    this.data.addColumn({ type: 'string', id: 'Job' });
    this.data.addColumn({ type: 'string', role: 'tooltip' });
    this.data.addColumn({ type: 'number', id: 'Start' });
    this.data.addColumn({ type: 'number', id: 'End' });

    var i: number = 0;
    var id = setInterval(() => {
      this.data.addRows([
          [this.operations[i].machineId, this.operations[i].jobId, null, this.toSeconds(this.operations[i].start), this.toSeconds(this.operations[i].end)]
        ]);
      this.chart.draw(this.data, this.options);
      i++;

      if(i === this.operations.length) {
        clearInterval(id);
      }
    }, 700);
    
    console.log("DrawGraph Gantt...");  
   
  }

  readyHandler() {
      console.log("Rendered");
  }
}
