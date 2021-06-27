import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CountdownConfig } from 'ngx-countdown';

@Component({
  selector: 'app-counter-npm',
  templateUrl: './counter-npm.component.html',
  styleUrls: ['./counter-npm.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterNpmComponent implements OnInit {
  config: CountdownConfig;
  constructor() {
    this.config = {
      leftTime: 30,
    };
  }

  handleFinish(event) {
    console.log(event);

    if (event.action == 'done') {
      alert('FINISH');
    }
  }

  ngOnInit(): void {}
}
