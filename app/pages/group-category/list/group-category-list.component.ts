import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/filter'
import { Store } from '@ngrx/store';
import * as Toast from 'nativescript-toast';

import { GroupCategory } from '../../../shared/models/group-category';
import { GroupCategoryService } from '../group-category.service';
import * as groupCategory from '../group-category.reducer';
import { LoadAction, LoadSuccessAction, Actions } from "../group-category.actions";
import { GroupCategoryEffects } from "../group-category.effects";
import { State } from '../group-category.reducer';

@Component({
    moduleId: module.id,
    selector: 'group-category-list',
    templateUrl: './group-category-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupCategoryList implements OnInit{
    groupCategorySuccess$: Observable<any>;
    groupCategoryError$: Observable<any>;

    constructor(
        private router: Router,
        private store: Store<groupCategory.State>,
        private groupCategoryService: GroupCategoryService,
        private groupCategoryEffects : GroupCategoryEffects
    ){
        // this.groupCategorySuccess$ = this.groupCategoryEffects.getGroupCategories$
        //     .filter((t) => typeof t === typeof LoadSuccessAction);
        this.groupCategorySuccess$ = this.store.select("groupCategory");
    }

    ngOnInit(): void {
        console.log("Comp Init");
        this.store.dispatch(new LoadAction());
        // this.groupCategories$.subscribe((state: ApiState)=> {
        //     if(state.loadError) {
        //         Toast.makeText("Load Error: " + state.errorMessage).show();
        //     }
        // });
    }

    refresh() {
        this.store.dispatch(new LoadAction());
    }

    addGroupCategory() {
        this.router.navigate(["group-category/new"]);
    }
}