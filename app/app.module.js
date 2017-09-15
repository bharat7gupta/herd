"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var router_1 = require("nativescript-angular/router");
var forms_1 = require("nativescript-angular/forms");
var store_1 = require("@ngrx/store");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var group_category_list_component_1 = require("./pages/group-category/list/group-category-list.component");
var new_group_category_component_1 = require("./pages/group-category/new/new-group-category.component");
var group_category_service_1 = require("./pages/group-category/group-category.service");
var common_service_1 = require("./shared/services/common.service");
var firebase_client_service_1 = require("./shared/services/firebase-client.service");
var app_reducers_1 = require("./app-reducers");
// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";
var AppModule = /** @class */ (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function AppModule() {
    }
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
                group_category_service_1.GroupCategoryService,
                common_service_1.CommonService,
                firebase_client_service_1.FirebaseClientService
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLHNEQUF1RTtBQUN2RSxvREFBb0U7QUFDcEUscUNBQTBDO0FBRTFDLDZDQUFpRDtBQUNqRCxpREFBK0M7QUFDL0MsMkdBQThGO0FBQzlGLHdHQUEyRjtBQUMzRix3RkFBcUY7QUFDckYsbUVBQWlFO0FBQ2pFLHFGQUFrRjtBQUVsRiwrQ0FBMEM7QUFFMUMsNkVBQTZFO0FBQzdFLHNFQUFzRTtBQThCdEU7SUFIQTs7TUFFRTtJQUNGO0lBQXlCLENBQUM7SUFBYixTQUFTO1FBNUJyQixlQUFRLENBQUM7WUFDTixTQUFTLEVBQUU7Z0JBQ1AsNEJBQVk7YUFDZjtZQUNELE9BQU8sRUFBRTtnQkFDTCx3Q0FBa0I7Z0JBQ2xCLGlDQUF3QjtnQkFDeEIsK0JBQXVCO2dCQUN2Qiw4QkFBZ0I7Z0JBQ2hCLG1CQUFXLENBQUMsWUFBWSxDQUFDLHVCQUFRLENBQUM7YUFDckM7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsNEJBQVk7Z0JBQ1osaURBQWlCO2dCQUNqQiwrQ0FBZ0I7YUFDbkI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1AsNkNBQW9CO2dCQUNwQiw4QkFBYTtnQkFDYiwrQ0FBcUI7YUFDeEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztRQUNGOztVQUVFO09BQ1csU0FBUyxDQUFJO0lBQUQsZ0JBQUM7Q0FBQSxBQUExQixJQUEwQjtBQUFiLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCJcbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEdyb3VwQ2F0ZWdvcnlMaXN0IH0gZnJvbSAnLi9wYWdlcy9ncm91cC1jYXRlZ29yeS9saXN0L2dyb3VwLWNhdGVnb3J5LWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IE5ld0dyb3VwQ2F0ZWdvcnkgfSBmcm9tICcuL3BhZ2VzL2dyb3VwLWNhdGVnb3J5L25ldy9uZXctZ3JvdXAtY2F0ZWdvcnkuY29tcG9uZW50JztcbmltcG9ydCB7IEdyb3VwQ2F0ZWdvcnlTZXJ2aWNlIH0gZnJvbSAnLi9wYWdlcy9ncm91cC1jYXRlZ29yeS9ncm91cC1jYXRlZ29yeS5zZXJ2aWNlJztcbmltcG9ydCB7IENvbW1vblNlcnZpY2UgfSBmcm9tICcuL3NoYXJlZC9zZXJ2aWNlcy9jb21tb24uc2VydmljZSc7XG5pbXBvcnQgeyBGaXJlYmFzZUNsaWVudFNlcnZpY2UgfSBmcm9tICcuL3NoYXJlZC9zZXJ2aWNlcy9maXJlYmFzZS1jbGllbnQuc2VydmljZSc7XG5cbmltcG9ydCB7IHJlZHVjZXJzIH0gZnJvbSAnLi9hcHAtcmVkdWNlcnMnO1xuXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzICBpZiB5b3UgbmVlZCB0byB1c2UgdGhlIEhUVFAgd3JhcHBlclxuLy8gaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGUsXG4gICAgICAgIFN0b3JlTW9kdWxlLnByb3ZpZGVTdG9yZShyZWR1Y2VycylcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgICAgIEdyb3VwQ2F0ZWdvcnlMaXN0LFxuICAgICAgICBOZXdHcm91cENhdGVnb3J5XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgR3JvdXBDYXRlZ29yeVNlcnZpY2UsXG4gICAgICAgIENvbW1vblNlcnZpY2UsXG4gICAgICAgIEZpcmViYXNlQ2xpZW50U2VydmljZVxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbi8qXG5QYXNzIHlvdXIgYXBwbGljYXRpb24gbW9kdWxlIHRvIHRoZSBib290c3RyYXBNb2R1bGUgZnVuY3Rpb24gbG9jYXRlZCBpbiBtYWluLnRzIHRvIHN0YXJ0IHlvdXIgYXBwXG4qL1xuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==