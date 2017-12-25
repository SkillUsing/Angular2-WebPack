import { Component } from '@angular/core';
import { BaseChart } from '../baseComponents/baseChart.component';

@Component({
    selector: 'pies',
    template: '<div echart [options]="options" [title]="title" style="height:100%"></div>'
})

export class PiesComponent extends BaseChart {
    public options: any;

    public title: string;

    constructor() {
        super();
        this.title = '任务类型';
        this.options = {
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['调度','自主','抢单','导入'],
                show:false
            },
            series : [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '50%'],
                    data:[
                        {value:335, name:'调度'},
                        {value:310, name:'自主'},
                        {value:234, name:'抢单'},
                        {value:135, name:'导入'},
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
    }
}