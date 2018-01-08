import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';

import { FightEventService } from '../fight-event/fight-event.service';
import { Tournament } from '../../models/event.model';

@Injectable()
export class FightEventResolverService implements Resolve<any> {

  constructor(private fgs: FightEventService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

    return this.fgs.byId(route.params.id)
      .map((data) => {
        return Observable.of(data);
      });
  }
}
