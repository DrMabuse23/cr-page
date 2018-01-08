import {ClanService} from '../../../cr-api/providers/clan/clan.service';
import {Member} from '../../../cr-api/models/clan.model';
import {MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import { Component, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-choose-member',
  templateUrl: './choose-member.component.html',
  styleUrls: ['./choose-member.component.scss']
})
export class ChooseMemberComponent implements OnInit {
  displayedColumns = ['select', 'name'];
  dataSource: MatTableDataSource<Member>;
  selection = new SelectionModel<Member>(true, []);
  constructor(private clanService: ClanService) { }
  @Output() action = new EventEmitter();

  ngOnInit() {
    setTimeout(() => this.dataSource = new MatTableDataSource<Member>(this.clanService.clan.members), 3000);
  }
   /** Whether the number of selected elements matches the total number of rows. */
   isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  toggle(row) {
    this.selection.toggle(row);
    this.action.emit(this.selection.selected);
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
    this.action.emit(this.selection.selected);
  }
}
