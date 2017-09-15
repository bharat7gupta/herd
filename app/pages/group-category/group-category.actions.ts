import { Action } from '@ngrx/store';

export const ADD_ITEMS =            '[Group Category] Add Items';
export const LOAD =                 '[Group Category] Load';
export const LOAD_SUCCESS =         '[Group Category] Load Success';
export const LOAD_FAIL =            '[Group Category] Load Fail';

/**
 * Load Group Category Actions
 */
export class AddItemsAction implements Action {
  readonly type = ADD_ITEMS;

  constructor(public payload: any) { }
}

export class LoadAction implements Action {
  readonly type = LOAD;
}

export class LoadSuccessAction implements Action {
  readonly type = LOAD_SUCCESS;

  constructor(public payload: any) { }
}

export class LoadFailAction implements Action {
  readonly type = LOAD_FAIL;

  constructor(public payload: any) { }
}

export type Actions =
  | AddItemsAction
  | LoadAction
  | LoadSuccessAction
  | LoadFailAction;