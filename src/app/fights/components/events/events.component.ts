import { FightingEvent } from '../../event.model';
import { FightEventService } from '../../providers/fight-event/fight-event.service';
import { Subscription } from 'rxjs/Subscription';


import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit, OnDestroy {
  displayedColumns = ['name', 'from', 'to', 'id'];
  dataSource: MatTableDataSource<FightingEvent>;
  memberSubcriber: Subscription;
  constructor(private eventService: FightEventService) {

  }

  ngOnInit() {
    this.memberSubcriber = this.eventService.events.subscribe((collection) => {
      console.log(collection);
      this.dataSource = new MatTableDataSource(collection);
    });
  }

  ngOnDestroy() {
    this.memberSubcriber.unsubscribe();
    this.memberSubcriber = undefined;
  }
}
