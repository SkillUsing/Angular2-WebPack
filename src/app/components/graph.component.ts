import { Component } from '@angular/core';
import { BaseChart } from '../baseComponents/baseChart.component';

@Component({
    selector: '[graph]',
    template: `<div echart [options]="options" [title]="title" style="height:100%"></div>`
})
export class GraphComponent extends BaseChart {

    public options: any;

    public title: string;

    private categories: Array<{ name: string }> = [{
        name:"测试1"
    },{
        name:"测试2"
    },{
        name:"测试3"
    },{
        name:"测试4"
    },{
        name:"测试5"
    },{
        name:"测试6"
    }];

    private data: Array<any> = [];

    private links: Array<any> = [];

    

    constructor() {
        super();
        this.nodeInit();
        this.linkInit();
        this.title = "科室关联";
        this.options = {
            tooltip: {},
            animationDurationUpdate: 1500,
            animationEasingUpdate: 'quinticInOut',
            series: [
                {
                    name: 'Les Miserables',
                    type: 'graph',
                    layout: 'circular',
                    circular: {
                        rotateLabel: true
                    },
                    data: this.data,
                    links: this.links,
                    categories: this.categories,
                    roam: true,
                    label: {
                        normal: {
                            position: 'right',
                            formatter: '{b}'
                        }
                    },
                    lineStyle: {
                        normal: {
                            color: 'source',
                            curveness: 0.3
                        }
                    }
                }
            ]
        };
    }

    nodeInit() {
        for (var i = 0; i < 20; i++) {
            //球的直径:随机为
            let symbolSize = this.rnd(1, 50);
            //球的值
            let value = this.rnd(1, 1000);
            //球在哪个组
            let category = this.rnd(0, 5);
            //球的标签
            let name = `ttcs${value}`;
            //是否展示标签
            let labelIsShow = value > 100 ? true : false;
            this.data.push({
                category: category,
                label: {
                    normal: {
                        show: labelIsShow
                    }
                },
                name: name,
                value:value,
                symbolSize: symbolSize
            });
        }
    }

    linkInit() {
        for (var i = 0; i < 200; i++) {
            let source = this.rnd(0, this.data.length - 1);
            let target = this.rnd(0, this.data.length - 1);
            if (source == target) {
                continue;
            }
            this.links.push({
                source: source,
                target: target
            })
        }
    }


    ///区间随机整数
    rnd(n, m) {
        var random = Math.floor(Math.random() * (m - n + 1) + n);
        return random;
    }
}