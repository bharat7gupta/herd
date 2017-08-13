import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { GroupCategoryList } from "./pages/group-category-list/group-category-list.component";
import { NewGroupCategory } from './pages/group-category-list/new-group-category/new-group-category.component';

const routes: Routes = [
    { path: "", redirectTo: "/group-category-list", pathMatch: "full" },
    { path: "group-category-list", component: GroupCategoryList },
    { path: "group-category/new", component: NewGroupCategory }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }