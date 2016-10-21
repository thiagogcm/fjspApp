import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GoogleChartComponent } from './google-chart/google-chart.component';
import { GanttComponent } from './gantt/gantt.component';

import { OperationService } from './services/operation.service';

@NgModule({
  declarations: [
    AppComponent,
    GoogleChartComponent,
    GanttComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [OperationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
