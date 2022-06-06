import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, take } from 'rxjs';

import * as config from '../config/master.config';

@Injectable({
  providedIn: 'root',
})
export class FdmService {
  constructor(private http: HttpClient) {}

  public getItemStatus$(
    fdmBaseUrl: string,
    pguid: string,
    testing = false
  ): Observable<number> {
    const payload = { items: [{ itemPGUID: pguid }] };
    if (config.offline && !testing) {
      return of(0);
    } else {
      return this.http.post<any>(fdmBaseUrl + '/items/status', payload).pipe(
        map((statusOutput) => {
          const returnCount =
            statusOutput && statusOutput.count ? statusOutput.count : 0;
          if (returnCount == 1 && statusOutput.items.length === 1) {
            return statusOutput.items[0].itemStatus as number;
          } else {
            return -99;
          }
        }),
        take(1)
      );
    }
  }

  public getItemLock$(
    fdmBaseUrl: string,
    pguid: string,
    testing = false
  ): Observable<string> {
    if (config.offline && !testing) {
      return of('locked');
    } else {
      return this.http.get<any>(fdmBaseUrl + '/items/' + pguid + '/lock').pipe(
        map((lockOutput) => (lockOutput.value ? lockOutput.value : '')),
        take(1)
      );
    }
  }

  public unlock$(
    fdmBaseUrl: string,
    pguid: string,
    lock: string,
    testing = false
  ): Observable<boolean> {
    if (config.offline && !testing) {
      return of(true);
    } else {
      return this.http
        .post<any>(fdmBaseUrl + '/items/' + pguid + '/unlock?user=' + lock, {})
        .pipe(
          map((output) => output && output.itemPGUID === pguid),
          take(1)
        );
    }
  }

  public updateStatus$(
    fdmBaseUrl: string,
    pguid: string,
    itemStatus: number,
    testing = false
  ): Observable<boolean> {
    const payload = {
      pguid: pguid,
      itemStatus: itemStatus,
      lastUpdatedBy: 'Singularity Tool',
    };
    if (config.offline && !testing) {
      return of(true);
    } else {
      return this.http.patch<any>(fdmBaseUrl + '/items/' + pguid, payload).pipe(
        map((output) => output && output.itemPGUID === pguid),
        take(1)
      );
    }
  }
}
