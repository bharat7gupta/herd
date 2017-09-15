import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/observable/from';

import { GroupCategoryService } from './group-category.service';
import * as groupCategory from './group-category.actions';
import { LoadSuccessAction, LoadFailAction, AddItemsAction } from "./group-category.actions";

@Injectable()
export class GroupCategoryEffects {
  constructor(
    private groupCategoryService: GroupCategoryService,
    private actions$: Actions
  ) { }

  @Effect() getGroupCategories$ = this.actions$
      .ofType(groupCategory.LOAD)
      .do(() => console.log("Effects 1"))
      .switchMap(payload => this.groupCategoryService.loadGroupCategories()
        // If successful, dispatch success action with result
        .concatMap(res => Observable.from([new AddItemsAction(res.json()), new LoadSuccessAction(res.json())]))
        // If request fails, dispatch failed action
        .catch((error) => Observable.of(new LoadFailAction(error)))
      );
}