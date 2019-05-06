import { RouterModule, Routes } from '@angular/router';


import { PagesComponent } from '../components/pages/pages.component';
import { DashboardComponent } from '../components/pages/dashboard/dashboard.component';
import { LoginComponent } from '../components/users/login/login.component';
import { ProgressComponent } from '../components/pages/progress/progress.component';
import { Graphics1Component } from '../components/pages/graphics1/graphics1.component';
import { RegisterComponent } from '../components/users/register/register.component';
import { NopagefoundComponent } from '../components/404/nopagefound/nopagefound.component';

const appRoutes: Routes = [


    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'progress', component: ProgressComponent },
            { path: 'graphics1', component: Graphics1Component },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]
    },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },


    { path: '**', component: NopagefoundComponent }

];


export const AppRoutes = RouterModule.forRoot(appRoutes, { useHash: true });
