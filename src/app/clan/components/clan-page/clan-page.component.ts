import { ClanService } from '../../../cr-api/providers/clan/clan.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-clan-page',
  templateUrl: './clan-page.component.html',
  styleUrls: ['./clan-page.component.scss']
})
export class ClanPageComponent {
  constructor(public clanService: ClanService) { }
}
