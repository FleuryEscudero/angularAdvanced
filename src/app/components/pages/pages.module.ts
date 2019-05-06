import { NgModule } from "@angular/core";

//Modules
import { SharedModule } from '../shared/shared.module';

//Components
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphics1Component } from './graphics1/graphics1.component';

//Routes
import { PagesRoutes } from './pages.routes';


@NgModule({
    declarations: [
        DashboardComponent,
        ProgressComponent,
        Graphics1Component,
        PagesComponent

    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graphics1Component,
        PagesComponent,
    ],
    imports: [
        SharedModule,
        PagesRoutes,
    ]

})

export class PagesModule { }