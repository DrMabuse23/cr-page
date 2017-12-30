import { environment } from '../../../../environments/environment';
import { Clan } from '../../models/clan.model';
import { Observable } from 'rxjs/Observable';
import { CrApiBase } from '../../utils/cr-api-base';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ClanImportService extends CrApiBase {

  constructor(private httpClient: HttpClient) {
    super();
  }

  get url() {
    return `${this.baseUrl}/clan/${this.clanId}`;
  }

  import(): Observable<Clan> {
    // if (!environment.production) {
    //   return Observable.of(testJSON);
    // }
    return <Observable<Clan>>this.httpClient.get(this.url);
  }
}
