import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { EChartOption, ECharts } from 'echarts-ng2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  private items: any;
  private i = 0;
  private charts: Array<number>;

  private showChartIndex: number;

  public colors = ['#325B69', '#698570', '#AE5548', '#6D9EA8', '#9CC2B0', '#C98769'];

  public testWidth = '20%';

  public top10: Array<any> = [];

  ngOnInit() {
    this.charts = [1, 2, 3, 4];
    this.showChartIndex = this.charts[this.i];
    this.items = document.querySelectorAll('.flex-container .item');
    for (let i = 0; i < this.items.length; i++) {
      this.items[i].dataset.order = i + 1;
    }
    this.TaskTop10();
    //10秒一次循环切换,并且获取数据
    // window.setInterval(() => {
    //   if (this.i >= 4) {
    //     this.i = 0;
    //   }
    //   this.clickChart(this.charts[this.i]);
    //   this.i++;
    //   return true;
    // }, 10000);
  }

  clickChart(index: number) {
    this.i = index;
    let activeItem = document.querySelector('.flex-container .active');
    let activeIndex = activeItem['dataset']['order'];
    let clickItem = this.items[index - 1];
    if (activeIndex === index) {
      return;
    }
    activeItem.classList.remove('active');
    clickItem.classList.add('active');
    this._setStyle(clickItem, activeItem);
  }

  _setStyle(el1, el2) {
    let transform1 = el1.style.transform;
    let transform2 = el2.style.transform;
    el1.style.transform = transform2;
    el2.style.transform = transform1;
  }

  TaskTop10() {
    for (var i = 0; i < 10; i++) {
      let taskNumber = i + 1;
      let addressText = `起点${i}-终点${i}`;
      let taskCount = this.rnd(1, 100);
      let taskCountByOver = this.rnd(1, taskCount);
      let progress = Math.round(taskCountByOver / taskCount * 100) + "%";
      this.top10.push({
        Id: taskNumber,
        Text: addressText,
        Count: taskCount,
        OverCount: taskCountByOver,
        Progress: progress
      });
    }
  }

  ///区间随机整数
  rnd(n, m) {
    var random = Math.floor(Math.random() * (m - n + 1) + n);
    return random;
  }
}
