import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/users/login/login.component';
import { NopagefoundComponent } from './components/404/nopagefound/nopagefound.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { ProgressComponent } from './components/pages/progress/progress.component';
import { Graphics1Component } from './components/pages/graphics1/graphics1.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { BreadcrumbsComponent } from './components/shared/breadcrumbs/breadcrumbs.component';
import { RegisterComponent } from './components/users/register/register.component';

//Routes
import { AppRoutes } from './routes/app.routes';
import { PagesComponent } from './components/pages/pages.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NopagefoundComponent,
    DashboardComponent,
    ProgressComponent,
    Graphics1Component,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    RegisterComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
