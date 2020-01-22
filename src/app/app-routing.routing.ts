import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObservableComponent } from './observable/observable.component';
import { MapThrottletimeComponent } from './map-throttletime/map-throttletime.component';
import { SubjectComponent } from './subject/subject.component';


const routes: Routes = [
  { path: '', redirectTo: 'observable', pathMatch: 'full' },
  { path: 'observable', component: ObservableComponent },
  { path: 'map-throttletime', component: MapThrottletimeComponent },
  { path: 'subject', component: SubjectComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
