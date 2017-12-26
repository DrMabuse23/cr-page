import {Member} from '../../../cr-api/models/clan.model';
import { MemberModel } from '../../member.mdel';
import { MemberService } from '../../providers/member/member.service';
import { Subscription } from 'rxjs/Subscription';


import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {
  displayedColumns = ['name', 'role'];
  dataSource: MatTableDataSource<Member[]>;
  memberSubcriber: Subscription;
  constructor(private memberService: MemberService) {

  }

  ngOnInit() {
    this.memberSubcriber = this.memberService.member.subscribe((collection: any) => {
      this.dataSource = new MatTableDataSource(collection);
    });
  }

  ngOnDestroy() {
    this.memberSubcriber.unsubscribe();
    this.memberSubcriber = undefined;
  }
}
