import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { EChartOption, ECharts } from 'echarts-ng2';
import { LineComponent } from './components/line.component';

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

  public top10: Array<any> = [];

  @ViewChild(LineComponent)
  private line: LineComponent;

  private interval: any;

  ngOnInit() {
    this.charts = [1, 2, 3, 4, 5];
    this.showChartIndex = this.charts[this.i];
    this.items = document.querySelectorAll('.flex-container .item');
    for (let i = 0; i < this.items.length; i++) {
      this.items[i].dataset.order = i + 1;
    }
    this.TaskTop10();
    this.startInterval();
  }

  //10秒一次循环切换,并且获取数据
  startInterval() {
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      if (this.i >= this.charts.length) {
        this.i = 0;
      }
      this.clickChart(this.charts[this.i]);
      this.i++;
      return true;
    }, 5000);
  }

  stopInterval() {
    clearInterval(this.interval);
  }
  //鼠标划出
  testMouseout() {
    this.startInterval();
  }

  //鼠标划入
  testMouseOver() {
    this.stopInterval();
  }

  clickChart(index: number, isTrue: boolean = false) {
    if (isTrue) {
      this.i = index;
    }
    let activeItem = document.querySelector('.flex-container .active');
    let activeIndex = activeItem['dataset']['order'];
    let clickItem = this.items[index - 1];
    if (activeIndex === index) {
      return;
    }
    activeItem.classList.remove('active');
    clickItem.classList.add('active');
    this._setStyle(clickItem, activeItem);
    this.line.changeSize();
    //重置定时器,为了防止,用户手点之后立即切换图表
    this.stopInterval();
    this.startInterval();
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
