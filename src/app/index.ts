import { isDevMode } from '@angular/core';
import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { counterReducer } from './reducers/counter.reducer';

export interface State {}

export const reducers: ActionReducerMap<State> = {
  counter: counterReducer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
