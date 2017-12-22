import { ViewChild } from '@angular/core'
import { EchartComponent } from './../baseComponents/echart.component';

export class BaseChart {
    @ViewChild(EchartComponent)
    dyechart: EchartComponent

    public changeSize() {
        this.dyechart.changeSize();
    }
}