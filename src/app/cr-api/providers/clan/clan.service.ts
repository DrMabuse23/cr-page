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
  public memberCollection: AngularFirestoreCollection<Member>;
  public clanCollection: AngularFirestoreCollection<Clan>;
  private initialImport = false;
  constructor(
    private httpClient: HttpClient,
    private clanImportService: ClanImportService,
    private afs: AngularFirestore
  ) {
    super();
    this.memberCollection = afs.collection<Member>('members', ref => ref.orderBy('rank'));
    this.clanCollection = afs.collection<Clan>('clan');
  }

  get url() {
    return `${this.baseUrl}/${this.clanId}`;
  }

  get member() {
    return this.memberCollection.valueChanges()
      .concatMap((members: Member[]) => {
        return this.memberCollection.snapshotChanges()
          .concatMap((snap: DocumentChangeAction[]) => {
            members = snap.map((action) => {
              const data = action.payload.doc.data();
              const index = members.findIndex((member) => member.id === data.id);
              members[index].$key = action.payload.doc.id;
              members[index].docPath = action.payload.doc.ref.path;
              return members[index];
            });
            return Observable.of(members);
          });
      });
  }

  get clan() {
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
              console.log(clan);
              return clan[0];
            });
        } else {
          console.log(clan[0]);
          if (clan[0].$key) {
            this.updateClan(clan[0].$key);
          }
        }
        return Observable.of(clan[0]);
      })
      .catch((err) => {
        return this.import();
      });
  }
  /**
   * add a member into fb
   *
   * @param {Member} item
   * @returns
   * @memberof ClanService
   */
  public addMember(item: Member) {
    if (!item.id) {
      item.id = this.afs.createId();
    }
    return Observable.fromPromise(this.memberCollection.add(item));
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
        const copy = JSON.parse(JSON.stringify(collection));
        delete copy.members;
        return this.addClan(<Clan>copy)
          .concatMap(() => this.importMembers(collection.members))
          .map(() => collection);
      });
  }
  /**
   * update a member
   * @param {Member} doc
   * @memberof ClanService
   */
  updateMember(doc: Member) {
    const itemDoc = this.memberCollection.doc<Clan>(doc.$key);
    itemDoc.update(doc);
  }
  /**
   * initial import member
   * @param {Member[]} members
   * @returns
   * @memberof ClanService
   */
  importMembers(members: Member[]) {
    return Observable.from(members)
      .concatMap((member) => this.addMember(<Member>member))
      .last();
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
        console.log(clan, id);
        const itemDoc = this.clanCollection.doc<Clan>(id);
        delete clan.members;
        itemDoc.update(clan);
      });
  }
}
