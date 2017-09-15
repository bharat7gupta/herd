"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var group_category_list_component_1 = require("./pages/group-category-list/group-category-list.component");
var new_group_category_component_1 = require("./pages/group-category-list/new-group-category/new-group-category.component");
var routes = [
    { path: "", redirectTo: "/group-category-list", pathMatch: "full" },
    { path: "group-category-list", component: group_category_list_component_1.GroupCategoryList },
    { path: "group-category/new", component: new_group_category_component_1.NewGroupCategory }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxzREFBdUU7QUFHdkUsMkdBQThGO0FBQzlGLDRIQUErRztBQUUvRyxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLHNCQUFzQixFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7SUFDbkUsRUFBRSxJQUFJLEVBQUUscUJBQXFCLEVBQUUsU0FBUyxFQUFFLGlEQUFpQixFQUFFO0lBQzdELEVBQUUsSUFBSSxFQUFFLG9CQUFvQixFQUFFLFNBQVMsRUFBRSwrQ0FBZ0IsRUFBRTtDQUM5RCxDQUFDO0FBTUY7SUFBQTtJQUFnQyxDQUFDO0lBQXBCLGdCQUFnQjtRQUo1QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkQsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLGdCQUFnQixDQUFJO0lBQUQsdUJBQUM7Q0FBQSxBQUFqQyxJQUFpQztBQUFwQiw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IEdyb3VwQ2F0ZWdvcnlMaXN0IH0gZnJvbSBcIi4vcGFnZXMvZ3JvdXAtY2F0ZWdvcnktbGlzdC9ncm91cC1jYXRlZ29yeS1saXN0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTmV3R3JvdXBDYXRlZ29yeSB9IGZyb20gJy4vcGFnZXMvZ3JvdXAtY2F0ZWdvcnktbGlzdC9uZXctZ3JvdXAtY2F0ZWdvcnkvbmV3LWdyb3VwLWNhdGVnb3J5LmNvbXBvbmVudCc7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHsgcGF0aDogXCJcIiwgcmVkaXJlY3RUbzogXCIvZ3JvdXAtY2F0ZWdvcnktbGlzdFwiLCBwYXRoTWF0Y2g6IFwiZnVsbFwiIH0sXG4gICAgeyBwYXRoOiBcImdyb3VwLWNhdGVnb3J5LWxpc3RcIiwgY29tcG9uZW50OiBHcm91cENhdGVnb3J5TGlzdCB9LFxuICAgIHsgcGF0aDogXCJncm91cC1jYXRlZ29yeS9uZXdcIiwgY29tcG9uZW50OiBOZXdHcm91cENhdGVnb3J5IH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9Il19