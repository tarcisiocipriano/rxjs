import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObservableComponent } from './observable/observable.component';
import { MapThrottletimeComponent } from './map-throttletime/map-throttletime.component';
import { SubjectComponent } from './subject/subject.component';
import { FilterComponent } from './filter/filter.component';
import { DebouncetimeComponent } from './debouncetime/debouncetime.component';


const routes: Routes = [
  { path: '', redirectTo: 'observable', pathMatch: 'full' },
  { path: 'observable', component: ObservableComponent },
  { path: 'map-throttletime', component: MapThrottletimeComponent },
  { path: 'subject', component: SubjectComponent },
  { path: 'filter', component: FilterComponent },
  { path: 'debouncetime', component: DebouncetimeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
