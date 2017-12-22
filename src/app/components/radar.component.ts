import { Component } from '@angular/core';
import { EChartOption } from 'echarts-ng2';
import { BaseChart } from '../baseComponents/baseChart.component';


@Component({
    selector: 'radar',
    template: `
        <echart [title]='title' [options]='options'></echart>
    `
})

export class RadarComponent extends BaseChart{

    public title:string;
    public options: EChartOption

    constructor() {
        super();
        this.title="图表1"
        this.options = {
            title: {
                text: '基础雷达图',
                left: 'center',
                textStyle: {
                    color: '#eee'
                },
                show:false
            },
            tooltip: {},
            legend: {
                bottom: 0,
                itemGap: 20,
                textStyle: {
                    color: '#fff',
                    fontSize: 14
                },
                show:false,
                data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
            },
            radar: {
                // shape: 'circle',
                name: {
                    textStyle: {
                        color: 'red',
                        backgroundColor: '#999',
                        borderRadius: 3,
                        padding: [3, 5]
                    }
                },
                shape: 'circle',
                splitNumber: 5,
                indicator: [
                    { name: '销售（sales）', max: 6500 },
                    { name: '管理（Administration）', max: 16000 },
                    { name: '信息技术（Information Techology）', max: 30000 },
                    { name: '客服（Customer Support）', max: 38000 },
                    { name: '研发（Development）', max: 52000 },
                    { name: '市场（Marketing）', max: 25000 }
                ],
                splitLine: {
                    lineStyle: {
                        color: [
                            'rgba(238, 197, 102, 0.1)', 'rgba(238, 197, 102, 0.2)',
                            'rgba(238, 197, 102, 0.4)', 'rgba(238, 197, 102, 0.6)',
                            'rgba(238, 197, 102, 0.8)', 'rgba(238, 197, 102, 1)'
                        ].reverse()
                    }
                },
                splitArea: {
                    show: true
                },
            },
            series: [{
                name: '预算 vs 开销（Budget vs spending）',
                type: 'radar',
                // areaStyle: {normal: {}},
                data: [
                    {
                        value: [4300, 10000, 28000, 35000, 50000, 19000],
                        name: '预算分配（Allocated Budget）'
                    },
                    {
                        value: [5000, 14000, 28000, 31000, 42000, 21000],
                        name: '实际开销（Actual Spending）'
                    }
                ]
            }]
        };
    }
}