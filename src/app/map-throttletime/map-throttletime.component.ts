import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map, throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-map-throttletime',
  templateUrl: './map-throttletime.component.html',
  styleUrls: ['./map-throttletime.component.scss']
})
export class MapThrottletimeComponent implements OnInit, OnDestroy {

  numbers: string[] = [];

  subscription = new Subscription();

  constructor() { }

  ngOnInit() {
    this.subscription = interval(1000)
      .pipe(
        map(value => `Number: ${value}`),
        throttleTime(2000),
      )
      .subscribe(value => this.numbers.push(value));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
