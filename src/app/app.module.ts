import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.routing';
import { AppComponent } from './app.component';
import { ObservableComponent } from './samples/observable/observable.component';
import { MapThrottletimeComponent } from './samples/map-throttletime/map-throttletime.component';
import { SubjectComponent } from './samples/subject/subject.component';
import { FilterComponent } from './samples/filter/filter.component';
import { DebouncetimeComponent } from './samples/debouncetime/debouncetime.component';
import { ScanReduceComponent } from './samples/scan-reduce/scan-reduce.component';
import { PluckComponent } from './samples/pluck/pluck.component';
import { MergemapComponent } from './samples/mergemap/mergemap.component';
import { SwitchmapComponent } from './samples/switchmap/switchmap.component';
import { BehaviorsubjectComponent } from './samples/behaviorsubject/behaviorsubject.component';
import { SidebarComponent } from './workspace/sidebar/sidebar.component';
import { NavbarComponent } from './workspace/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ObservableComponent,
    MapThrottletimeComponent,
    SubjectComponent,
    FilterComponent,
    DebouncetimeComponent,
    ScanReduceComponent,
    PluckComponent,
    MergemapComponent,
    SwitchmapComponent,
    BehaviorsubjectComponent,
    SidebarComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
