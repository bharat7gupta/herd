import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import { Store } from '@ngrx/store';
import * as Toast from 'nativescript-toast';

import { GroupCategory } from '../../../shared/models/group-category';
import { GroupCategoryService } from '../group-category.service';
import * as groupCategory from '../group-category.reducer';

@Component({
    moduleId: module.id,
    selector: 'group-category-list',
    templateUrl: './group-category-list.component.html'
})
export class GroupCategoryList implements OnInit{
    groupCategories$: Observable<groupCategory.State>;

    constructor(
        private store: Store<groupCategory.State>,
        private groupCategoryService: GroupCategoryService,
        private router: Router
    ){
        this.groupCategories$ = store.select('groupCategories');
    }

    ngOnInit(): void {
        this.groupCategoryService.loadGroupCategories();
        this.groupCategories$.subscribe((state)=> {
            if(state.loadError) {
                Toast.makeText("Load Error: " + state.errorMessage).show();
            }
        });
    }

    refresh() {
        this.groupCategoryService.loadGroupCategories();
    }

    addGroupCategory() {
        this.router.navigate(["group-category/new"]);
    }
}