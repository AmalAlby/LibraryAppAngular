import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookentryComponent } from './bookentry/bookentry.component';
import { ViewComponent } from './view/view.component';
import { DeleteComponent } from './delete/delete.component';
import { SearchComponent } from './search/search.component';
import { EditComponent } from './edit/edit.component';

const myroute:Routes=[
  {
    path:"",
    component:BookentryComponent
  },
  {
    path:"view",
    component:ViewComponent
  },
  {
    path:"delete",
    component:DeleteComponent
  },
  {
    path:"search",
    component:SearchComponent
  },
  {
    path:"edit",
    component:EditComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    BookentryComponent,
    ViewComponent,
    DeleteComponent,
    SearchComponent,
    EditComponent
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
