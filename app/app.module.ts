import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptFormsModule } from "nativescript-angular/forms"
import { StoreModule, combineReducers } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { GroupCategoryList } from './pages/group-category/list/group-category-list.component';
import { NewGroupCategory } from './pages/group-category/new/new-group-category.component';
import { GroupCategoryService } from './pages/group-category/group-category.service';
import { CommonService } from './shared/services/common.service';
import { FirebaseClientService } from './shared/services/firebase-client.service';

import { reducers } from './app-reducers';
import { groupCategoriesReducer } from './pages/group-category-list/group-category-list.reducer';

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";
import { apiCallMetaReducer } from './shared/api-call.meta-reducer';
import { GroupCategoryEffects } from './pages/group-category/group-category.effects';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptFormsModule,
        AppRoutingModule,
        StoreModule.provideStore(reducers),
        EffectsModule.forRoot([GroupCategoryEffects])
    ],
    declarations: [
        AppComponent,
        GroupCategoryList,
        NewGroupCategory
    ],
    providers: [
        GroupCategoryService,
        FirebaseClientService,
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
