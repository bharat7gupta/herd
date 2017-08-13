import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptFormsModule } from "nativescript-angular/forms"
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { GroupCategoryList } from './pages/group-category-list/group-category-list.component';
import { NewGroupCategory } from './pages/group-category-list/new-group-category/new-group-category.component';
import { GroupCategoryListService } from './pages/group-category-list/group-category-list.service';
import { CommonService } from './shared/services/common.service';

import { reducers } from './app-reducers';

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptFormsModule,
        AppRoutingModule,
        StoreModule.provideStore(reducers)
    ],
    declarations: [
        AppComponent,
        GroupCategoryList,
        NewGroupCategory
    ],
    providers: [
        GroupCategoryListService,
        CommonService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
