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
var effects_1 = require("@ngrx/effects");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var group_category_list_component_1 = require("./pages/group-category/list/group-category-list.component");
var new_group_category_component_1 = require("./pages/group-category/new/new-group-category.component");
var group_category_service_1 = require("./pages/group-category/group-category.service");
var common_service_1 = require("./shared/services/common.service");
var firebase_client_service_1 = require("./shared/services/firebase-client.service");
var app_reducers_1 = require("./app-reducers");
var group_category_effects_1 = require("./pages/group-category/group-category.effects");
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
                store_1.StoreModule.provideStore(app_reducers_1.reducers),
                effects_1.EffectsModule.forRoot([group_category_effects_1.GroupCategoryEffects])
            ],
            declarations: [
                app_component_1.AppComponent,
                group_category_list_component_1.GroupCategoryList,
                new_group_category_component_1.NewGroupCategory
            ],
            providers: [
                group_category_service_1.GroupCategoryService,
                firebase_client_service_1.FirebaseClientService,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLHNEQUF1RTtBQUN2RSxvREFBb0U7QUFDcEUscUNBQTJEO0FBQzNELHlDQUE4QztBQUU5Qyw2Q0FBaUQ7QUFDakQsaURBQStDO0FBQy9DLDJHQUE4RjtBQUM5Rix3R0FBMkY7QUFDM0Ysd0ZBQXFGO0FBQ3JGLG1FQUFpRTtBQUNqRSxxRkFBa0Y7QUFFbEYsK0NBQTBDO0FBTTFDLHdGQUFxRjtBQStCckY7SUFIQTs7TUFFRTtJQUNGO0lBQXlCLENBQUM7SUFBYixTQUFTO1FBN0JyQixlQUFRLENBQUM7WUFDTixTQUFTLEVBQUU7Z0JBQ1AsNEJBQVk7YUFDZjtZQUNELE9BQU8sRUFBRTtnQkFDTCx3Q0FBa0I7Z0JBQ2xCLGlDQUF3QjtnQkFDeEIsK0JBQXVCO2dCQUN2Qiw4QkFBZ0I7Z0JBQ2hCLG1CQUFXLENBQUMsWUFBWSxDQUFDLHVCQUFRLENBQUM7Z0JBQ2xDLHVCQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsNkNBQW9CLENBQUMsQ0FBQzthQUNoRDtZQUNELFlBQVksRUFBRTtnQkFDViw0QkFBWTtnQkFDWixpREFBaUI7Z0JBQ2pCLCtDQUFnQjthQUNuQjtZQUNELFNBQVMsRUFBRTtnQkFDUCw2Q0FBb0I7Z0JBQ3BCLCtDQUFxQjtnQkFDckIsOEJBQWE7YUFDaEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztRQUNGOztVQUVFO09BQ1csU0FBUyxDQUFJO0lBQUQsZ0JBQUM7Q0FBQSxBQUExQixJQUEwQjtBQUFiLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCJcbmltcG9ydCB7IFN0b3JlTW9kdWxlLCBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBFZmZlY3RzTW9kdWxlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5cbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAucm91dGluZ1wiO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgR3JvdXBDYXRlZ29yeUxpc3QgfSBmcm9tICcuL3BhZ2VzL2dyb3VwLWNhdGVnb3J5L2xpc3QvZ3JvdXAtY2F0ZWdvcnktbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmV3R3JvdXBDYXRlZ29yeSB9IGZyb20gJy4vcGFnZXMvZ3JvdXAtY2F0ZWdvcnkvbmV3L25ldy1ncm91cC1jYXRlZ29yeS5jb21wb25lbnQnO1xuaW1wb3J0IHsgR3JvdXBDYXRlZ29yeVNlcnZpY2UgfSBmcm9tICcuL3BhZ2VzL2dyb3VwLWNhdGVnb3J5L2dyb3VwLWNhdGVnb3J5LnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tbW9uU2VydmljZSB9IGZyb20gJy4vc2hhcmVkL3NlcnZpY2VzL2NvbW1vbi5zZXJ2aWNlJztcbmltcG9ydCB7IEZpcmViYXNlQ2xpZW50U2VydmljZSB9IGZyb20gJy4vc2hhcmVkL3NlcnZpY2VzL2ZpcmViYXNlLWNsaWVudC5zZXJ2aWNlJztcblxuaW1wb3J0IHsgcmVkdWNlcnMgfSBmcm9tICcuL2FwcC1yZWR1Y2Vycyc7XG5pbXBvcnQgeyBncm91cENhdGVnb3JpZXNSZWR1Y2VyIH0gZnJvbSAnLi9wYWdlcy9ncm91cC1jYXRlZ29yeS1saXN0L2dyb3VwLWNhdGVnb3J5LWxpc3QucmVkdWNlcic7XG5cbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgIGlmIHlvdSBuZWVkIHRvIHVzZSB0aGUgSFRUUCB3cmFwcGVyXG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IGFwaUNhbGxNZXRhUmVkdWNlciB9IGZyb20gJy4vc2hhcmVkL2FwaS1jYWxsLm1ldGEtcmVkdWNlcic7XG5pbXBvcnQgeyBHcm91cENhdGVnb3J5RWZmZWN0cyB9IGZyb20gJy4vcGFnZXMvZ3JvdXAtY2F0ZWdvcnkvZ3JvdXAtY2F0ZWdvcnkuZWZmZWN0cyc7XG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGUsXG4gICAgICAgIFN0b3JlTW9kdWxlLnByb3ZpZGVTdG9yZShyZWR1Y2VycyksXG4gICAgICAgIEVmZmVjdHNNb2R1bGUuZm9yUm9vdChbR3JvdXBDYXRlZ29yeUVmZmVjdHNdKVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgR3JvdXBDYXRlZ29yeUxpc3QsXG4gICAgICAgIE5ld0dyb3VwQ2F0ZWdvcnlcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBHcm91cENhdGVnb3J5U2VydmljZSxcbiAgICAgICAgRmlyZWJhc2VDbGllbnRTZXJ2aWNlLFxuICAgICAgICBDb21tb25TZXJ2aWNlXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuLypcblBhc3MgeW91ciBhcHBsaWNhdGlvbiBtb2R1bGUgdG8gdGhlIGJvb3RzdHJhcE1vZHVsZSBmdW5jdGlvbiBsb2NhdGVkIGluIG1haW4udHMgdG8gc3RhcnQgeW91ciBhcHBcbiovXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19