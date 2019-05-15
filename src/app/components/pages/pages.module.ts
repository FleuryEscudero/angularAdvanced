import { NgModule } from "@angular/core";


//Modules
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

//Routes
import { PagesRoutes } from './pages.routes';

//Components
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphics1Component } from './graphics1/graphics1.component';
import { IncreaserComponent } from '../increaser/increaser.component';
import { DoughnutgraphicComponent } from '../doughnutgraphic/doughnutgraphic.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';


@NgModule({
    declarations: [
        DashboardComponent,
        ProgressComponent,
        Graphics1Component,
        PagesComponent,
        IncreaserComponent,
        DoughnutgraphicComponent,
        AccountSettingsComponent,

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