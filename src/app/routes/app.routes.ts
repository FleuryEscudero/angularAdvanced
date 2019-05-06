import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../components/users/login/login.component';
import { RegisterComponent } from '../components/users/register/register.component';
import { NopagefoundComponent } from '../components/shared/404/nopagefound/nopagefound.component';

const appRoutes: Routes = [

    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', component: NopagefoundComponent }

];


export const AppRoutes = RouterModule.forRoot(appRoutes, { useHash: true });
