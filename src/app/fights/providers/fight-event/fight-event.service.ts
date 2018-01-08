import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

import { Fight } from '../../models/fight.model';
import { Tournament } from '../../models/event.model';

export const defaultFights = {
  'Jannik': 'Speznas',
  'schnubberstern': 'reza72',
  'Lucas': 'lars',
  'loku': 'XBannerx',
  'RCW_Himself': 'Yoda',
  'fabri': 'lealein',
  'Donkey': 'xxLolxx',
  'linda': 'lmntrix',
  'bronko': 'Patrick500',
  'emre': 'buffon0612',
  'DeathValley2': 'lord84',
  'pid': 'l.King',
  'vanköbi': 'Taale96',
  'kitch': 'Mopsi',
  'Meister': 'fuxx',
  'Pusher': 'Steffi372',
  'DrMabuse': 'volkitolki',
  'Roman Reigns': 'Lizza',
  'Yomaha': 'Horscht',
  'Munzur': 'baumhausen',
  'Hong_K': 'Tafwolf292',
  'Roberto': 'slajaborada',
  'Nico :victory:': 'Sisko',
  'sibro': 'sanane_38'
};

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

@Injectable()
export class FightEventService {
  public eventCollection: AngularFirestoreCollection<Tournament>;
  protected collectionName = 'events';
  constructor(private afs: AngularFirestore) {
    this.eventCollection = afs.collection<Tournament>(this.collectionName);
  }

  addEvent(item: Tournament, from, to) {
    if (!item.rounds) {
      item.rounds = [{
        name: 'Round 1',
        from: from,
        to: to
      }];
    }
    if (!item.id) {
      item.id = this.afs.createId();
    }
    return Observable.fromPromise(this.eventCollection.add(item));
  }

  get events(): Observable<Tournament[]> {
    return this.eventCollection.valueChanges();
  }


  byId($key: string = null): Observable<Tournament> {
    return this.afs.collection(this.collectionName, ref => ref.where('id', '==', $key))
      .valueChanges()
      .map((data: Tournament[]) => data[0] ? <Tournament>data[0] : <Tournament>{});
  }

  addFight(item: Fight) {

  }

}
