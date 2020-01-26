import { Component } from '@angular/core';
import { observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  observables: { name: string, route: string }[] = [
    // { name: 'Observable', route: 'observable' },
    { name: 'map() and throttleTime()', route: 'map-throttletime' },
    { name: 'Subject()', route: 'subject' },
    { name: 'filter()', route: 'filter' },
    { name: 'debounceTime()', route: 'debouncetime' },
    { name: 'scan() and reduce()', route: 'scan-reduce' },
    { name: 'pluck()', route: 'pluck' },
    { name: 'mergeMap()', route: 'mergemap' },
    { name: 'switchMap()', route: 'switchmap' },
    { name: 'behaviorSubject()', route: 'behaviorsubject' }
  ];
}
