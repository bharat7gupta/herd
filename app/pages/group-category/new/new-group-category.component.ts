import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as Toast from 'nativescript-toast';

import { GroupCategory } from '../../../shared/models/group-category';
import { GroupCategoryService } from '../group-category.service';
import * as newGroupCategory from '../new-group-category.reducer';

@Component({
    moduleId: module.id,
    selector: 'new-group-category',
    templateUrl: './new-group-category.component.html'
})
export class NewGroupCategory implements OnInit{

    category: GroupCategory;
    groupCategory$: Observable<newGroupCategory.State>;

    constructor(
        private store: Store<newGroupCategory.State>,
        private groupCategoryService: GroupCategoryService,
        private router: Router
    ) {
        this.category = new GroupCategory();
        this.groupCategory$ = store.select('groupCategory');
    }

    ngOnInit() {
        this.store.dispatch({type: newGroupCategory.Actions.INITIALIZE});
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
            this.groupCategoryService.addCategory(this.category);
        }
    }
}