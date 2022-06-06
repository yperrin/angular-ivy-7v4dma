import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
  StoreModule,
} from '@ngrx/store';
import { RecordModel } from './record.model';

import * as recordActions from '../record.actions';
import * as toolbarActions from '../../toolbar/toolbar.actions';
import { NgModule } from '@angular/core';

export const FEATURE_KEY = 'Records';

const initialState: RecordModel[] = [];

export const reducer = createReducer(initialState);

@NgModule({
  imports: [StoreModule.forFeature(FEATURE_KEY, reducer)],
})
export class RecordStateModule {}
