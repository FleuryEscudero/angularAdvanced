import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {SettingsService,SharedService,SidebarService} from './service.index'





@NgModule ({
    declarations : [

    ],
    exports: [],
    imports:[
        CommonModule
    ],
    providers: [
    SettingsService,
    SharedService,
    SidebarService]

})


export class ServiceModule {}