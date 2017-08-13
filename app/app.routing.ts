import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { GroupCategoryList } from "./pages/group-category-list/group-category-list.component";

const routes: Routes = [
    { path: "", redirectTo: "/group-category-list", pathMatch: "full" },
    { path: "group-category-list", component: GroupCategoryList }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }