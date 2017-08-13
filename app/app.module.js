"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var router_1 = require("nativescript-angular/router");
var forms_1 = require("nativescript-angular/forms");
var store_1 = require("@ngrx/store");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var group_category_list_component_1 = require("./pages/group-category-list/group-category-list.component");
var new_group_category_component_1 = require("./pages/group-category-list/new-group-category/new-group-category.component");
var group_category_list_service_1 = require("./pages/group-category-list/group-category-list.service");
var common_service_1 = require("./shared/services/common.service");
var app_reducers_1 = require("./app-reducers");
// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";
var AppModule = (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: [
            app_component_1.AppComponent
        ],
        imports: [
            nativescript_module_1.NativeScriptModule,
            router_1.NativeScriptRouterModule,
            forms_1.NativeScriptFormsModule,
            app_routing_1.AppRoutingModule,
            store_1.StoreModule.provideStore(app_reducers_1.reducers)
        ],
        declarations: [
            app_component_1.AppComponent,
            group_category_list_component_1.GroupCategoryList,
            new_group_category_component_1.NewGroupCategory
        ],
        providers: [
            group_category_list_service_1.GroupCategoryListService,
            common_service_1.CommonService
        ],
        schemas: [
            core_1.NO_ERRORS_SCHEMA
        ]
    })
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLHNEQUF1RTtBQUN2RSxvREFBb0U7QUFDcEUscUNBQTBDO0FBRTFDLDZDQUFpRDtBQUNqRCxpREFBK0M7QUFDL0MsMkdBQThGO0FBQzlGLDRIQUErRztBQUMvRyx1R0FBbUc7QUFDbkcsbUVBQWlFO0FBRWpFLCtDQUEwQztBQUUxQyw2RUFBNkU7QUFDN0Usc0VBQXNFO0FBNkJ0RSxJQUFhLFNBQVM7SUFIdEI7O01BRUU7SUFDRjtJQUF5QixDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBQTFCLElBQTBCO0FBQWIsU0FBUztJQTNCckIsZUFBUSxDQUFDO1FBQ04sU0FBUyxFQUFFO1lBQ1AsNEJBQVk7U0FDZjtRQUNELE9BQU8sRUFBRTtZQUNMLHdDQUFrQjtZQUNsQixpQ0FBd0I7WUFDeEIsK0JBQXVCO1lBQ3ZCLDhCQUFnQjtZQUNoQixtQkFBVyxDQUFDLFlBQVksQ0FBQyx1QkFBUSxDQUFDO1NBQ3JDO1FBQ0QsWUFBWSxFQUFFO1lBQ1YsNEJBQVk7WUFDWixpREFBaUI7WUFDakIsK0NBQWdCO1NBQ25CO1FBQ0QsU0FBUyxFQUFFO1lBQ1Asc0RBQXdCO1lBQ3hCLDhCQUFhO1NBQ2hCO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsdUJBQWdCO1NBQ25CO0tBQ0osQ0FBQztJQUNGOztNQUVFO0dBQ1csU0FBUyxDQUFJO0FBQWIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIlxuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAucm91dGluZ1wiO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgR3JvdXBDYXRlZ29yeUxpc3QgfSBmcm9tICcuL3BhZ2VzL2dyb3VwLWNhdGVnb3J5LWxpc3QvZ3JvdXAtY2F0ZWdvcnktbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmV3R3JvdXBDYXRlZ29yeSB9IGZyb20gJy4vcGFnZXMvZ3JvdXAtY2F0ZWdvcnktbGlzdC9uZXctZ3JvdXAtY2F0ZWdvcnkvbmV3LWdyb3VwLWNhdGVnb3J5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHcm91cENhdGVnb3J5TGlzdFNlcnZpY2UgfSBmcm9tICcuL3BhZ2VzL2dyb3VwLWNhdGVnb3J5LWxpc3QvZ3JvdXAtY2F0ZWdvcnktbGlzdC5zZXJ2aWNlJztcbmltcG9ydCB7IENvbW1vblNlcnZpY2UgfSBmcm9tICcuL3NoYXJlZC9zZXJ2aWNlcy9jb21tb24uc2VydmljZSc7XG5cbmltcG9ydCB7IHJlZHVjZXJzIH0gZnJvbSAnLi9hcHAtcmVkdWNlcnMnO1xuXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzICBpZiB5b3UgbmVlZCB0byB1c2UgdGhlIEhUVFAgd3JhcHBlclxuLy8gaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGUsXG4gICAgICAgIFN0b3JlTW9kdWxlLnByb3ZpZGVTdG9yZShyZWR1Y2VycylcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgICAgIEdyb3VwQ2F0ZWdvcnlMaXN0LFxuICAgICAgICBOZXdHcm91cENhdGVnb3J5XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgR3JvdXBDYXRlZ29yeUxpc3RTZXJ2aWNlLFxuICAgICAgICBDb21tb25TZXJ2aWNlXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuLypcblBhc3MgeW91ciBhcHBsaWNhdGlvbiBtb2R1bGUgdG8gdGhlIGJvb3RzdHJhcE1vZHVsZSBmdW5jdGlvbiBsb2NhdGVkIGluIG1haW4udHMgdG8gc3RhcnQgeW91ciBhcHBcbiovXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19