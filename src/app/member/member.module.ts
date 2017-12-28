import { FlexLayoutModule } from '@angular/flex-layout';
import { CrApiModule } from '../cr-api/cr-api.module';
import { MemberService } from './providers/member/member.service';

import { MaterialModule } from '../material/material.module';
import { ListComponent } from './components/list/list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberRoutingModule } from './member-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MemberRoutingModule,
    MaterialModule,
    CrApiModule,
    FlexLayoutModule
  ],
  declarations: [
    ListComponent
  ],
  providers: [
    MemberService
  ],
  entryComponents: [
    ListComponent
  ],
  exports: [
    ListComponent
  ]
})
export class MemberModule { }
