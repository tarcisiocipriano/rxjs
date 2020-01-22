import { Component, ViewChild, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';
import { throttleTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit, OnDestroy {

  output: string;

  @ViewChild('button', {static: true}) button: ElementRef;

  buttonSub: Subscription;

  observer = {
    next: (value: string) => this.output = value,
    error: (error: any) => this.output = error,
    complete: () => this.output = 'completed'
  };

  ngOnInit() {
    this.buttonSub = fromEvent(this.button.nativeElement, 'click')
    .pipe(
      throttleTime(1000),
      map((event: MouseEvent) => event.clientX.toString())
    )
    .subscribe(this.observer);
  }

  ngOnDestroy(): void {
    this.buttonSub.unsubscribe();
  }

}
