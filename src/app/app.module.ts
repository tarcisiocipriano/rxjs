import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.routing';
import { AppComponent } from './app.component';
import { ObservableComponent } from './observable/observable.component';
import { MapThrottletimeComponent } from './map-throttletime/map-throttletime.component';
import { SubjectComponent } from './subject/subject.component';
import { FilterComponent } from './filter/filter.component';
import { DebouncetimeComponent } from './debouncetime/debouncetime.component';
import { ScanReduceComponent } from './scan-reduce/scan-reduce.component';
import { PluckComponent } from './pluck/pluck.component';

@NgModule({
  declarations: [
    AppComponent,
    ObservableComponent,
    MapThrottletimeComponent,
    SubjectComponent,
    FilterComponent,
    DebouncetimeComponent,
    ScanReduceComponent,
    PluckComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
