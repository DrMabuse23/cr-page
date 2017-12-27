import { Clan } from '../../../cr-api/models/clan.model';
import { ClanService } from '../../../cr-api/providers/clan/clan.service';
import { Subscription } from 'rxjs/Subscription';


import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-clan-page',
  templateUrl: './clan-page.component.html',
  styleUrls: ['./clan-page.component.scss']
})
export class ClanPageComponent implements OnInit, OnDestroy {
  public clan: Clan;
  private clanSubscription: Subscription;
  constructor(private clanService: ClanService) { }

  ngOnInit() {
    this.clanSubscription = this.clanService.clan.subscribe((clan) => {
      console.log(clan);
      this.clan = clan;
    });
  }

  ngOnDestroy() {
    this.clanSubscription.unsubscribe();
    this.clanSubscription = undefined;
  }
}
