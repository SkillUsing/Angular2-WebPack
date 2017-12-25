import { BaseChart } from '../baseComponents/baseChart.component';
import { Component } from '@angular/core';

@Component({
    selector: 'barnegative',
    template: `<div echart [options]="options" [title]="title" style="height:100%"></div>`
})

export class BarNegativeComponent extends BaseChart {

    public title: string;
    public options: any;

    constructor() {
        super();
        this.title = "昨日员工任务率"
        this.options = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow',
                    crossStyle: {
                        color: '#999'
                    }
                }
            },
            legend: {
                data: ['利润', '支出', '收入'],
                show: false
            },
            toolbox: {
                show: false
            },
            grid: {
                containLabel: true
            },
            xAxis: [
                {
                    type: 'value',
                    nameTextStyle: {
                        color: 'rgba(255, 255, 255, 0.69)'
                    },
                    axisLabel: {
                        textStyle: {
                            color: 'white'
                        }
                    }
                }
            ],
            yAxis: [
                {
                    type: 'category',
                    axisTick: { show: false },
                    splitLine: {
                        lineStyle: {
                            color: ['rgba(230, 230, 230, 0.2)']
                        }
                    },
                    axisLabel: {
                        textStyle: {
                            color: 'white',
                            fontSize: 14
                        }
                    },
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                }
            ],
            series: [
                {
                    name: '利润',
                    type: 'bar',
                    label: {
                        normal: {
                            show: true,
                            position: 'inside'
                        }
                    },
                    data: [200, 170, 240, 244, 200, 220, 210]
                },
                {
                    name: '收入',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true
                        }
                    },
                    data: [320, 302, 341, 374, 390, 450, 420]
                },
                {
                    name: '支出',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'left'
                        }
                    },
                    data: [-120, -132, -101, -134, -190, -230, -210]
                }
            ]
        }
    }
}
