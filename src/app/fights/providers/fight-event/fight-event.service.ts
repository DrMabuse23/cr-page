import { Fight } from '../../fight.model';
import { FightingEvent } from '../../event.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

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

@Injectable()
export class FightEventService {
  public eventCollection: AngularFirestoreCollection<FightingEvent>;
  protected collectionName = 'events';
  constructor(private afs: AngularFirestore) {
    this.eventCollection = afs.collection<FightingEvent>(this.collectionName);
  }

  addEvent(item: FightingEvent) {
    if (!item.results) {
      item.results = [];
    }
    if (!item.id) {
      item.id = this.afs.createId();
    }
    return Observable.fromPromise(this.eventCollection.add(item));
  }

  get events(): Observable<FightingEvent[]> {
    return this.eventCollection.valueChanges();
  }


  byId($key: string = null): Observable<FightingEvent> {
    return this.afs.collection(this.collectionName, ref => ref.where('id', '==', $key))
      .valueChanges()
      .map((data: FightingEvent[]) => data[0] ? <FightingEvent>data[0] : <FightingEvent>{});
  }

  addFight(item: Fight) {

  }

}
