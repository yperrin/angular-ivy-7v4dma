import { NgModule } from '@angular/core';
import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
  StoreModule,
} from '@ngrx/store';
import { AppModel } from './models/app.model';
import { MasterModel } from './models/master.model';
import * as toolbarActions from './components/toolbar/toolbar.actions';
import * as config from './config/master.config';

export const FEATURE_KEY = 'Master';

const initialState: AppModel = {
  masters: config.masters,
  environments: ['DEV', 'INT', 'UAT', 'PROD'],
  selectedEnvironment: '',
};

export const reducer = createReducer(initialState);

@NgModule({
  imports: [StoreModule.forFeature(FEATURE_KEY, reducer)],
})
export class ApplicationStateModule {}
