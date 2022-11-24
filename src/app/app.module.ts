import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookentryComponent } from './bookentry/bookentry.component';
import { ViewComponent } from './view/view.component';

const myroute:Routes=[
  {
    path:"",
    component:BookentryComponent
  },
  {
    path:"view",
    component:ViewComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    BookentryComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
