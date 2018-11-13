import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WindowComponent } from './window/window.component';
import { SearchComponent } from './search/search.component';
import { LocationComponent } from './location/location.component';
import { TimelineComponent } from './timeline/timeline.component';
import { UpdateStatusComponent } from './update-status/update-status.component';

@NgModule({
  declarations: [
    AppComponent,
    WindowComponent,
    SearchComponent,
    LocationComponent,
    TimelineComponent,
    UpdateStatusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
