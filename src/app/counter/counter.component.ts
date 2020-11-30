import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { take, map } from 'rxjs/operators';
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  currentSubscription: Subscription;
  @Input() startAt;
  @Output() counterState = new EventEmitter<string>();

  currentValue = '';
  constructor(public changeDetector: ChangeDetectorRef) {}

  ngOnInit(): void {}

  public start() {
    console.log('Tiempo total en segundos', this.startAt);

    this.currentValue = this.formatValue(this.startAt);
    this.changeDetector.detectChanges();
    const t: Observable<number> = interval(1000);
    console.log(this.startAt);

    this.currentSubscription = t
      .pipe(take(this.startAt))
      .pipe(
        map((v) => {
          console.log(this.startAt, v);
          return this.startAt - v;
        })
      )
      .subscribe(
        (v) => {
          console.log(v);
          this.currentValue = this.formatValue(v);
          console.log(this.currentValue);
        },
        (err) => {
          this.counterState.error(err);
        },
        () => {
          this.currentValue = '00:00';
          this.counterState.emit('COMPLETE');
        }
      );
  }

  public stop() {
    this.currentSubscription.unsubscribe();
    this.counterState.emit('ABORTED');
  }

  private formatValue(v) {
    const minutes = Math.floor(v / 60);
    const formattedMinutes = minutes > 9 ? minutes : '0' + minutes;

    const seconds = v % 60;
    const formattedSeconds = seconds > 9 ? seconds : '0' + seconds;

    return `${formattedMinutes}:${formattedSeconds}`;
  }
}
