import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EchartsNg2Module } from 'echarts-ng2';

import { AppComponent } from './app.component';
import { MultipleColumnComponent } from './components/multipleColumn.component';
import { LineComponent } from './components/line.component';
import { PieComponent } from './components/pie.component';
import { EchartComponent } from './baseComponents/echart.component';
import { RadarComponent } from './components/radar.component';
import { GraphComponent } from './components/graph.component';



@NgModule({
  declarations: [
    AppComponent,
    MultipleColumnComponent,
    LineComponent,
    PieComponent,
    EchartComponent,
    RadarComponent,
    GraphComponent
  ],
  imports: [
    BrowserModule,
    EchartsNg2Module
  ],
  providers: [],
  entryComponents: [
    EchartComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
