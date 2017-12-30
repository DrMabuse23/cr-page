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
  public memberModeUpdate = true;
  public clanModeUpdate = true;
  constructor(
    private httpClient: HttpClient,
    private clanImportService: ClanImportService,
    private afs: AngularFirestore
  ) {
    super();
    this.memberCollection = afs.collection<Member>('members', ref => ref.orderBy('rank'));
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
              return clan[0];
            });
        } else {
          if (clan[0].$key && this.clanModeUpdate) {
            this.updateClan(clan[0].$key);
          }
        }
        return Observable.of(clan[0]);
      })
      .catch((err) => {
        console.error(err);
        return Observable.throw(err);
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

  updateMembers(members: Member[], data: Member[]) {
    const canBeUpdated = members.filter((member) => {
      const upgradeMember = data.find((_m) => _m.name === member.name);
      if (upgradeMember) {
        return Object.assign(member, upgradeMember);
      }
    });

    if (canBeUpdated.length === data.length) {
      canBeUpdated.forEach((member) => this.updateMember(member))
      return Observable.of(canBeUpdated);
    }
    const leaved = members.filter((member) => data.findIndex((_m) => _m.name === member.name));
    const newEntry = data.filter((member) => {
      if (members.findIndex((_m) => _m.name !== member.name) === -1) {
        return true;
      }
      return false;
    });
    return Observable.from(newEntry)
      .map((member) => this.addMember(member))
      .last()
      .map(() => {
        canBeUpdated.forEach((_member) => this.updateMember(_member));
      });

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
      // .concatMap((clan) => {
      //   return this.member.concatMap((_m) => <any>this.updateMembers(_m, clan.members))
      //     .map(() => clan);
      // })
      .subscribe((clan) => {
        // console.log(clan, id);
        const itemDoc = this.clanCollection.doc<Clan>(id);
        // delete clan.members;
        itemDoc.update(clan);
      });
  }
}
