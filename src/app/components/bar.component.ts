import { Component } from '@angular/core';

@Component({
    selector: 'bar,[bar]',
    template: `<div echart [options]="options" [title]="title" style="height:100%"></div>`

})

export class BarComponent {
    public options: any;
    public title: string;

    constructor() {
        this.title = "月任务质量";
        this.options = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    crossStyle: {
                        color: '#999'
                    }
                }
            },
            legend: {
                data: ['蒸发量', '降水量', '平均温度'],
                show: false
            },
            toolbox: {
                show: false
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                    axisPointer: {
                        type: 'shadow'
                    },
                    axisLabel: {
                        textStyle: {
                          color: 'white'
                        }
                      },
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    nameTextStyle: {
                        color: 'rgba(255, 255, 255, 0.69)'
                    },
                 
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '水量',
                    min: 0,
                    max: 250,
                    interval: 50,
                    axisLabel: {
                        textStyle: {
                            color: 'white',
                            fontSize: 14
                        },
                        formatter: '{value} ml'
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        lineStyle: {
                            color: ['rgba(230, 230, 230, 0.2)']
                        }
                    }
                },
                {
                    type: 'value',
                    name: '温度',
                    min: 0,
                    max: 25,
                    interval: 5,
                    axisLabel: {
                        textStyle: {
                            color: 'white',
                            fontSize: 14
                        },
                        formatter: '{value} °C'
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        lineStyle: {
                            color: ['rgba(230, 230, 230, 0.2)']
                        }
                    }
                }
            ],
            series: [
                {
                    name: '蒸发量',
                    type: 'bar',
                    data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
                },
                {
                    name: '降水量',
                    type: 'bar',
                    data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
                },
                {
                    name: '平均温度',
                    type: 'line',
                    yAxisIndex: 1,
                    data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
                }
            ]
        }
    }
}