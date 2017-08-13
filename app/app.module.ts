import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { GroupCategoryList } from './pages/group-category-list/group-category-list.component';
import { GroupCategoryListService } from './pages/group-category-list/group-category-list.service';

import { reducers } from './ng-store-reducers';

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptRouterModule,
        AppRoutingModule,
        StoreModule.provideStore(reducers)
    ],
    declarations: [
        AppComponent,
        GroupCategoryList
    ],
    providers: [
        GroupCategoryListService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
