import { Member } from '../../../cr-api/models/clan.model';
import { MemberModel } from '../../member.mdel';
import { MemberService } from '../../providers/member/member.service';
import { Subscription } from 'rxjs/Subscription';

import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-member-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy, AfterViewInit {
  displayedColumns = ['rank', 'name', 'role', 'expLevel', 'trophies', 'arena', 'clanChestCrowns', 'donations'];
  dataSource: MatTableDataSource<Member[]>;
  memberSubcriber: Subscription;
  constructor(private memberService: MemberService) {

  }

  ngAfterViewInit() {
  }

  ngOnInit() {
    this.memberSubcriber = this.memberService.member.subscribe((collection: any) => {
      this.dataSource = new MatTableDataSource(collection);
      console.log(JSON.stringify(collection[25], null, 2));
    });
  }

  getArenaImage(arena) {
    const name = arena.replace(' ', '').toLowerCase();
    const isArena = name.indexOf('arena') !== -1;
    if (isArena) {
      const mapper = {
        arena0: 'training',
        arena1: 'goblin',
        arena2: 'bone',
        arena3: 'barbarian',
        arena4: 'pekka',
        arena5: 'spell',
        arena6: 'builders',
        arena7: 'royal',
        arena8: 'ice',
        arena9: 'jungle',
        arena10: 'hogmountain',
        arena11: 'electron',
        arena12: 'champion'
      };
      return `assets/ui/arenas/ui_icon_${mapper[name]}.png`;
    }
    return `assets/ui/leagues/${name}.png`;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  ngOnDestroy() {
    this.memberSubcriber.unsubscribe();
    this.memberSubcriber = undefined;
  }
}
