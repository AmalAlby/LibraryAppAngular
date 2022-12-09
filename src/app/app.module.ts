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
import { IssuebookComponent } from './issuebook/issuebook.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { UserregComponent } from './userreg/userreg.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserviewComponent } from './userview/userview.component';
import { UsernavbarComponent } from './usernavbar/usernavbar.component';
import { UsersearchComponent } from './usersearch/usersearch.component';

const myroute:Routes=[
  {
    path:"",
    component:AdminloginComponent
  },
  {
    path:"registration",
    component:UserregComponent
  },
  {
    path:"login",
    component:UserloginComponent
  },
  {
    path:"entry",
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
  },
  {
    path:"issue",
    component:IssuebookComponent
  },
  {
    path:"uview",
    component:UserviewComponent
  },
  {
    path:"usearch",
    component:UsersearchComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    BookentryComponent,
    ViewComponent,
    DeleteComponent,
    SearchComponent,
    EditComponent,
    IssuebookComponent,
    NavbarComponent,
    AdminloginComponent,
    UserregComponent,
    UserloginComponent,
    UserviewComponent,
    UsernavbarComponent,
    UsersearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
