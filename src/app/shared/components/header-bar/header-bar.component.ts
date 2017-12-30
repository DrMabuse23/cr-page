import { Subscription } from 'rxjs/Subscription';
import { Clan } from '../../../cr-api/models/clan.model';
import { ClanService } from '../../../cr-api/providers/clan/clan.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss']
})
export class HeaderBarComponent implements OnInit, OnDestroy {
  public clan: Clan;
  private clanSubscriber: Subscription;
  constructor(private clanService: ClanService) { }
  ngOnInit() {
    this.clanSubscriber = this.clanService.clan.subscribe((clan) => {
      this.clan = clan;
    });
  }

  ngOnDestroy() {
    this.clanSubscriber.unsubscribe();
  }
}
