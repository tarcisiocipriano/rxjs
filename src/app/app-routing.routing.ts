import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObservableComponent } from './observable/observable.component';
import { MapThrottletimeComponent } from './map-throttletime/map-throttletime.component';
import { SubjectComponent } from './subject/subject.component';
import { FilterComponent } from './filter/filter.component';
import { DebouncetimeComponent } from './debouncetime/debouncetime.component';
import { ScanReduceComponent } from './scan-reduce/scan-reduce.component';
import { PluckComponent } from './pluck/pluck.component';
import { MergemapComponent } from './mergemap/mergemap.component';
import { SwitchmapComponent } from './switchmap/switchmap.component';
import { BehaviorsubjectComponent } from './behaviorsubject/behaviorsubject.component';


const routes: Routes = [
  { path: '', redirectTo: 'observable', pathMatch: 'full' },
  { path: 'observable', component: ObservableComponent },
  { path: 'map-throttletime', component: MapThrottletimeComponent },
  { path: 'subject', component: SubjectComponent },
  { path: 'filter', component: FilterComponent },
  { path: 'debouncetime', component: DebouncetimeComponent },
  { path: 'scan-reduce', component: ScanReduceComponent },
  { path: 'pluck', component: PluckComponent },
  { path: 'mergemap', component: MergemapComponent },
  { path: 'switchmap', component: SwitchmapComponent },
  { path: 'behaviorsubject', component: BehaviorsubjectComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
