import { Component } from '@angular/core';


@Component({
    selector: 'pie',
    template: `<echart [title]='title' [options]='options'></echart>`
})

export class PieComponent {

    public options: any;

    public title:string;
    constructor() {
        this.title="世界和平";
        this.options = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            series: [
                {
                    name: '姓名',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '50%'],
                    data: [
                        { name: "皮祁", value: 25334 },
                        { name: "喻戴费", value: 49441 }
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