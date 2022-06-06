import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map, mergeMap } from 'rxjs';
import { FdmService } from '../../services/fdm.service';

import * as recordActions from './record.actions';

@Injectable()
export class RecordEffects {
}