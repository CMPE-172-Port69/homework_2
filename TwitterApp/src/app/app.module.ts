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
import {
  OktaAuthGuard,
  OktaAuthModule,
  OktaCallbackComponent,
} from '@okta/okta-angular';
import config from './.samples.config';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

const appRoutes: Routes = [
{
  path: '',
  component: HomeComponent
},
{
  path: 'timeline',
  component: TimelineComponent,
  canActivate: [ OktaAuthGuard ],
},
{
  path: 'search',
  component: SearchComponent,
  canActivate: [ OktaAuthGuard ],
},
{
  path: 'profile',
  component: ProfileComponent,
  canActivate: [ OktaAuthGuard ],
},
{
  path: 'implicit/callback',
  component: OktaCallbackComponent
}];

@NgModule({
  declarations: [
    AppComponent,
    WindowComponent,
    SearchComponent,
    LocationComponent,
    TimelineComponent,
    UpdateStatusComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    OktaAuthModule.initAuth(config.oidc),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
