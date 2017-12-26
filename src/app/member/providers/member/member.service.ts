import {ClanService} from '../../../cr-api/providers/clan/clan.service';
import { Observable } from 'rxjs/Observable';
import { MemberModel } from '../../member.mdel';
import { Injectable, ElementRef } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/observable/from';

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
export class MemberService {

  constructor(private clanService: ClanService) {
  }

  // addMember(item: MemberModel) {
  //   if (!item.id) {
  //     item.id = this.afs.createId();
  //   }
  //   return Observable.fromPromise(this.memberCollection.add(item));
  // }

  get member() {
    return this.clanService.member;
  }
  /**
   * @param {ElementRef} clanRowContainer
   * @memberof MemberService
   */
  // initialImportMembersfromStatsHtml(clanRowContainer: ElementRef) {
  //   Observable.from(clanRowContainer.nativeElement.children)
  //     .filter((row, index) => index > 0)
  //     .map((row: any) => {

  //       const last = row.children.length - 1;
  //       const member: MemberModel = {
  //         name: row.children[1].children[0].innerText,
  //         profileLink: row.children[1].children[0].href,
  //         role: row.children[last].children[0].innerText
  //       };
  //       return member;
  //     })
  //     .concatMap((member) => this.addMember(member))
  //     .subscribe(
  //       (row: any) => console.log(row)
  //     );
  // }
}
