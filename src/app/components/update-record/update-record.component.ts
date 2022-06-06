import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { AppModel } from '../../models/app.model';
import { MasterModel } from '../../models/master.model';

import * as appState from '../../state';
import { RecordModel } from './model/record.model';
import * as recordState from './model/state';
import * as recordActions from './record.actions';

@Component({
  selector: 'app-update-record',
  templateUrl: './update-record.component.html',
  styleUrls: ['./update-record.component.scss'],
})
export class UpdateRecordComponent {
  master$: Observable<MasterModel | null>;
  records$: Observable<RecordModel[]>;
  userEnteredPGUID = '';

  constructor(private store: Store<AppModel>) {
    this.master$ = of();
    this.records$ = of([]);
  }

  remove(pguid: string) {}

  add(master: MasterModel) {
    if (this.userEnteredPGUID && this.userEnteredPGUID.length > 0) {
      this.userEnteredPGUID = '';
    }
  }

  tombstone(master: MasterModel, pguid: string) {}

  makeActive(master: MasterModel, pguid: string) {}

  unlock(master: MasterModel, pguid: string, user: string) {}
}
