import { Component, ElementRef, Input, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { ECharts, EChartOption } from 'echarts-ng2';



@Component({
    selector: '[echart]',
    templateUrl: "./echart.component.html",
    styleUrls: ['./echart.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class EchartComponent implements AfterViewInit {
    private static EchartList: Array<EchartComponent> = [];
    @ViewChild('echarts') public echarts: ECharts;

    @Input() public options: EChartOption

    @Input() public title: string;

    private legendArr: any;

    private isRadar = false;

    private styleArr: string[] = [];

    @ViewChild('root') root: ElementRef;

    constructor(private el: ElementRef) {
        //EchartComponent.EchartList.push(this);
    }

    public changeSize() {
        // EchartComponent.EchartList.forEach((item, index) => {
        //     let time = 500;
        //     if (index > 2) {
        //         time = (500 - 300) * index
        //     }
        //     setTimeout(() => {
        //         item.echarts.resize({height:`${this.root.nativeElement.clientHeight-50}px`});
        //     }, time);
        // });
        this.echarts.resize({ height: `${this.root.nativeElement.clientHeight - 20}px` });
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

        window.addEventListener('resize', this.changeSize.bind(this));
        this.changeSize();
        //this.echarts.resize({height:`${this.root.nativeElement.clientHeight-20}px`});
    }


    legendToggle(legend) {
        legend.selected = !legend.selected
        this.echarts.dispatchAction({
            type: 'legendToggleSelect',
            name: legend.name
        })
    }

}