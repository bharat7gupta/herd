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
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLHNEQUF1RTtBQUN2RSxvREFBb0U7QUFDcEUscUNBQTBDO0FBRTFDLDZDQUFpRDtBQUNqRCxpREFBK0M7QUFDL0MsMkdBQThGO0FBQzlGLDRIQUErRztBQUMvRyx1R0FBbUc7QUFDbkcsbUVBQWlFO0FBRWpFLCtDQUEwQztBQUUxQyw2RUFBNkU7QUFDN0Usc0VBQXNFO0FBNkJ0RTtJQUhBOztNQUVFO0lBQ0Y7SUFBeUIsQ0FBQztJQUFiLFNBQVM7UUEzQnJCLGVBQVEsQ0FBQztZQUNOLFNBQVMsRUFBRTtnQkFDUCw0QkFBWTthQUNmO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHdDQUFrQjtnQkFDbEIsaUNBQXdCO2dCQUN4QiwrQkFBdUI7Z0JBQ3ZCLDhCQUFnQjtnQkFDaEIsbUJBQVcsQ0FBQyxZQUFZLENBQUMsdUJBQVEsQ0FBQzthQUNyQztZQUNELFlBQVksRUFBRTtnQkFDViw0QkFBWTtnQkFDWixpREFBaUI7Z0JBQ2pCLCtDQUFnQjthQUNuQjtZQUNELFNBQVMsRUFBRTtnQkFDUCxzREFBd0I7Z0JBQ3hCLDhCQUFhO2FBQ2hCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7UUFDRjs7VUFFRTtPQUNXLFNBQVMsQ0FBSTtJQUFELGdCQUFDO0NBQUEsQUFBMUIsSUFBMEI7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiXG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBHcm91cENhdGVnb3J5TGlzdCB9IGZyb20gJy4vcGFnZXMvZ3JvdXAtY2F0ZWdvcnktbGlzdC9ncm91cC1jYXRlZ29yeS1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZXdHcm91cENhdGVnb3J5IH0gZnJvbSAnLi9wYWdlcy9ncm91cC1jYXRlZ29yeS1saXN0L25ldy1ncm91cC1jYXRlZ29yeS9uZXctZ3JvdXAtY2F0ZWdvcnkuY29tcG9uZW50JztcbmltcG9ydCB7IEdyb3VwQ2F0ZWdvcnlMaXN0U2VydmljZSB9IGZyb20gJy4vcGFnZXMvZ3JvdXAtY2F0ZWdvcnktbGlzdC9ncm91cC1jYXRlZ29yeS1saXN0LnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tbW9uU2VydmljZSB9IGZyb20gJy4vc2hhcmVkL3NlcnZpY2VzL2NvbW1vbi5zZXJ2aWNlJztcblxuaW1wb3J0IHsgcmVkdWNlcnMgfSBmcm9tICcuL2FwcC1yZWR1Y2Vycyc7XG5cbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgIGlmIHlvdSBuZWVkIHRvIHVzZSB0aGUgSFRUUCB3cmFwcGVyXG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZSxcbiAgICAgICAgU3RvcmVNb2R1bGUucHJvdmlkZVN0b3JlKHJlZHVjZXJzKVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgR3JvdXBDYXRlZ29yeUxpc3QsXG4gICAgICAgIE5ld0dyb3VwQ2F0ZWdvcnlcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBHcm91cENhdGVnb3J5TGlzdFNlcnZpY2UsXG4gICAgICAgIENvbW1vblNlcnZpY2VcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG4vKlxuUGFzcyB5b3VyIGFwcGxpY2F0aW9uIG1vZHVsZSB0byB0aGUgYm9vdHN0cmFwTW9kdWxlIGZ1bmN0aW9uIGxvY2F0ZWQgaW4gbWFpbi50cyB0byBzdGFydCB5b3VyIGFwcFxuKi9cbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4iXX0=