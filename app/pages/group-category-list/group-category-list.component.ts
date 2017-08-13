import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import { Store } from '@ngrx/store';
import * as Toast from 'nativescript-toast';

import { GroupCategory } from '../../shared/models/group-category';
import { GroupCategoryListService } from './group-category-list.service';
import { GroupCategoriesState, GroupCategoryListActions } from './group-category-list.reducer';

@Component({
    moduleId: module.id,
    selector: 'group-category-list',
    templateUrl: './group-category-list.component.html'
})
export class GroupCategoryList implements OnInit{
    groupCategories$: Observable<GroupCategoriesState>;

    constructor(
        private store: Store<GroupCategoriesState>,
        private groupCategoryListService: GroupCategoryListService,
        private router: Router
    ){
        this.groupCategories$ = store.select('groupCategories');
    }

    ngOnInit(): void {
        this.groupCategoryListService.loadGroupCategories();
        this.groupCategories$.subscribe((state)=> {
            if(state.loadError) {
                Toast.makeText("Load Error: " + state.errorMessage).show();
            }
        });
    }

    refresh() {
        this.groupCategoryListService.loadGroupCategories();
    }

    addGroupCategory() {
        this.router.navigate(["group-category/new"]);
    }
}