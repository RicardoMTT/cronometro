import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('counter') counter: CounterComponent;

  ngAfterViewInit(): void {
    this.counter.startAt = 120;
    this.counter.start();
  }

  constructor() {}
}
