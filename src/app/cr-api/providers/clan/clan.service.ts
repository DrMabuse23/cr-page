import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

import { Clan, Member } from '../../models/clan.model';
import { ClanImportService } from '../clan-import/clan-import.service';
import { CrApiBase } from '../../utils/cr-api-base';

@Injectable()
export class ClanService extends CrApiBase {
  public memberCollection: AngularFirestoreCollection<Member>;
  public clanCollection: AngularFirestoreCollection<Clan>;

  constructor(
    private httpClient: HttpClient,
    private clanImportService: ClanImportService,
    private afs: AngularFirestore
  ) {
    super();
    this.memberCollection = afs.collection<Member>('members');
    this.clanCollection = afs.collection<Clan>('clan');
  }

  get url() {
    return `${this.baseUrl}/${this.clanId}`;
  }

  get member() {
    return this.memberCollection.valueChanges()
      .concatMap((collection) => {
        if (collection.length === 0) {
          return this.import()
            .map(es => {
              console.log(es);
              return es.members;
            });
        }
        return Observable.of(collection);
      });
  }

  get clan() {
    return this.clanCollection.valueChanges()
      .concatMap((clan) => {
        // debugger;
        if (clan.length === 0) {
          return this.import(true)
            .map(() => {
              console.log(clan);
              return clan[0];
            });
        }
        return Observable.of(clan[0]);
      })
      .catch((err) => {
        console.log(err);
        return this.import(true);
      });
  }

  public addMember(item: Member) {
    if (!item.id) {
      item.id = this.afs.createId();
    }
    return Observable.fromPromise(this.memberCollection.add(item));
  }

  public addClan(item: Clan) {
    if (!item.id) {
      item.id = this.afs.createId();
    }
    console.log(item);
    return Observable.fromPromise(this.clanCollection.add(item));
  }

  import(onlyClan = false) {
    return this.clanImportService.import()
      .filter((res) => !res.error)
      .concatMap((collection: any) => {
        const copy = JSON.parse(JSON.stringify(collection));
        delete copy.members;
        if (onlyClan) {
          return this.addClan(copy)
            .map(() => collection);
        } else {
          return this.addClan(copy)
            .concatMap(() => Observable.from(collection.members))
            .concatMap((member) => {
              return this.addMember(<Member>member);
            })
            .last()
            .map(() => collection);
        }
      });
  }

  updateClan() {
    // this.update
  }
}
