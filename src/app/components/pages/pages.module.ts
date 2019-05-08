import { NgModule } from "@angular/core";


//Modules
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

//Components
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphics1Component } from './graphics1/graphics1.component';
import { IncreaserComponent } from '../increaser/increaser.component';
import { DoughnutgraphicComponent } from '../doughnutgraphic/doughnutgraphic.component';

//Routes
import { PagesRoutes } from './pages.routes';


@NgModule({
    declarations: [
        DashboardComponent,
        ProgressComponent,
        Graphics1Component,
        PagesComponent,
        IncreaserComponent,
        DoughnutgraphicComponent,

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
        FormsModule,
        ChartsModule,
    ]

})

export class PagesModule { }