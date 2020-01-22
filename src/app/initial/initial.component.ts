import { Component, ViewChild, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';
import { throttleTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.scss']
})
export class InitialComponent implements OnInit, OnDestroy {

  output: number;

  @ViewChild('button', {static: true}) button: ElementRef;

  buttonSub: Subscription;

  constructor() {}

  ngOnInit() {
    this.buttonSub = fromEvent(this.button.nativeElement, 'click')
      .pipe(
        throttleTime(1000),
        map((event: MouseEvent) => event.clientX)
      )
      .subscribe(
        coordinate => this.output = coordinate
      );
  }

  ngOnDestroy(): void {
    this.buttonSub.unsubscribe();
  }

}
