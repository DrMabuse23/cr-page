import { MemberListComponent } from './components/member-list/list.component';
import { MaterialModule } from '../material/material.module';
import { ClanPageComponent } from './components/clan-page/clan-page.component';
import { CrApiModule } from '../cr-api/cr-api.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ClanRoutingModule } from './clan-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ClanRoutingModule,
    CrApiModule,
    MaterialModule,
    FlexLayoutModule
  ],
  declarations: [ClanPageComponent, MemberListComponent]
})
export class ClanModule { }
