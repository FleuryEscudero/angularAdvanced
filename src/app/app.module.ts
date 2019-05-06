import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Routes
import { AppRoutes } from './routes/app.routes';

//Modules
import { PagesModule } from './components/pages/pages.module';

//Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/users/login/login.component';
import { RegisterComponent } from './components/users/register/register.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,  
  ],
  imports: [
    BrowserModule,
    PagesModule,
    AppRoutes,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
