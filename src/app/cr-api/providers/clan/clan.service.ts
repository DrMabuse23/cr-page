import { DocumentChangeAction } from 'angularfire2/firestore';
import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

import { Clan, Member } from '../../models/clan.model';
import { ClanImportService } from '../clan-import/clan-import.service';
import { CrApiBase } from '../../utils/cr-api-base';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/timer';

@Injectable()
export class ClanService extends CrApiBase {
  private clanCollection: AngularFirestoreCollection<Clan>;
  private initialImport = false;
  public clanModeUpdate = true;
  private _clan: Clan;
  constructor(
    private httpClient: HttpClient,
    private clanImportService: ClanImportService,
    private afs: AngularFirestore
  ) {
    super();
    this.clanCollection = afs.collection<Clan>('clan');
  }
  /**
   * @readonly
   * @type {string}
   * @memberof ClanService
   */
  get url(): string {
    return `${this.baseUrl}/${this.clanId}`;
  }
  /**
   * @readonly
   * @type {Observable<Member[]>}
   * @memberof ClanService
   */
  get member(): Observable<Member[]> {
    return Observable.of(this._clan.members);
  }
  /**
   * @readonly
   * @type {Observable<Clan>}
   * @memberof ClanService
   */
  get clan(): Observable<Clan> {
    return this.clanCollection.valueChanges()
      .concatMap((clan: Clan[]) => {
        if (clan.length) {
          return this.clanCollection.snapshotChanges()
            .map((snap: DocumentChangeAction[]) => {
              if (snap[0] && snap[0].payload && clan[0]) {
                clan[0].docPath = snap[0].payload.doc.ref.path;
                clan[0].$key = snap[0].payload.doc.id;
              }
              return clan;
            });
        }
        return Observable.of(clan);
      })
      .concatMap((clan: Clan[]) => {
        if (!clan.length) {
          return this.import()
            .map(() => {
              this._clan = clan[0];
              return clan[0];
            });
        } else {
          if (clan[0].$key && this.clanModeUpdate) {
            this.updateClan(clan[0].$key);
          }
        }
        this._clan = clan[0];
        return Observable.of(clan[0]);
      })
      .catch((err) => {
        console.error(err);
        return Observable.throw(err);
      });
  }
  /**
   * add clan
   * @param {Clan} item
   * @returns
   * @memberof ClanService
   */
  public addClan(item: Clan) {
    if (!item.id) {
      item.id = this.afs.createId();
    }
    return Observable.fromPromise(this.clanCollection.add(item));
  }
  /**
   * if empty fresh import
   * @param {boolean} [onlyClan=false]
   * @returns
   * @memberof ClanService
   */
  import() {
    return this.clanImportService.import()
      .filter((res) => !res.error)
      .concatMap((collection: any) => {
        return this.addClan(collection)
          .map(() => collection);
      });
  }
  /**
   * update clan
   * @param {any} id
   * @memberof ClanService
   */
  updateClan(id) {
    this.clanImportService.import()
      .debounceTime(180000)
      .subscribe((clan) => {
        // console.log(clan, id);
        const itemDoc = this.clanCollection.doc<Clan>(id);
        itemDoc.update(clan);
      });
  }
}
