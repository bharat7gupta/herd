import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import { Store } from '@ngrx/store';
import * as Toast from 'nativescript-toast';

import { GroupCategory } from '../../../shared/models/group-category';
import { GroupCategoryService } from '../group-category.service';
// import { GroupCategoryState } from '../group-category.reducer';
import * as groupCategory from '../group-category.reducer';
import { GroupCategoryState } from './new-group-category.reducer';
import { GroupCategoryActions } from './new-group-category.reducer';

@Component({
    moduleId: module.id,
    selector: 'new-group-category',
    templateUrl: './new-group-category.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewGroupCategory implements OnInit{

    category: GroupCategory;
    groupCategory$: Observable<GroupCategoryState>;

    constructor(
        private store: Store<GroupCategoryState>,
        private groupCategoryService: GroupCategoryService,
        private router: Router
    ) {
        this.category = new GroupCategory();
        this.groupCategory$ = store.select('groupCategory');
    }

    ngOnInit() {
        this.store.dispatch({type: GroupCategoryActions.INITIALIZE});
        this.groupCategory$.subscribe((state)=> {
            if(state.errorMessage) {
                Toast.makeText("Save Error: " + state.errorMessage).show();
            } else if(state.saved) {
                this.router.navigate(["group-category-list"]);
                Toast.makeText("Data saved with key: " + state.key).show();
            }
        });
    }

    addGroupCategory() {
        let validationStr = this.category.validate();
        if(validationStr.length !== 0)
            Toast.makeText(validationStr).show();
        else {
            // this.groupCategoryService.addCategory(this.category);
        }
    }
}