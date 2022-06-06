import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppModel } from '../../models/app.model';
import { MasterModel } from '../../models/master.model';
import * as toolbarActions from './toolbar.actions';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  constructor(private store: Store<AppModel>) {}

  selectEnvironment(environment: string) {}

  selectMaster(masterName: string) {}
}
