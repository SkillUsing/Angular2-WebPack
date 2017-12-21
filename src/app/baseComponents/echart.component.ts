import { Component, Input, ViewChild, AfterViewInit } from '@angular/core';
import { ECharts, EChartOption } from 'echarts-ng2';


@Component({
    selector: 'echart',
    templateUrl: "./echart.component.html",
    styleUrls: ['./echart.component.css']
})

export class EchartComponent implements AfterViewInit {

    @ViewChild('echarts') public echarts: ECharts;

    @Input() public options: EChartOption

    @Input() public title: string;

    private legendArr: any;

    private isRadar = false;

    private styleArr: string[] = [];

    constructor() {

    }

    changeSize() {
        this.echarts.resize();
    }

    ngAfterViewInit() {

        this.echarts.setOption(this.options);
        this.legendArr = this.echarts.getOption()["series"];
        if (this.legendArr[0]['type'] == 'radar' || this.legendArr[0]['type'] == 'pie') {
            this.legendArr = this.legendArr[0];
            this.isRadar = true;
        }
        let z = this.echarts.getOption()['color'];
        if (this.isRadar) {
            this.legendArr['data'].forEach((item, index) => {
                item['selected'] = true;
                item['color'] = z[index];
            });
        } else {
            this.legendArr.forEach((item, index) => {
                item['selected'] = true;
                item['color'] = z[index];
            });
        }

        this.styleArr = this.legendArr['color'];

        console.log(this.legendArr);

        window.addEventListener('resize', this.changeSize.bind(this));
    }


    legendToggle(legend) {
        legend.selected = !legend.selected
        this.echarts.dispatchAction({
            type: 'legendToggleSelect',
            name: legend.name
        })
    }

}