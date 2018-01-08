import { CrApiModule } from '../cr-api/cr-api.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FightsRoutingModule } from './fights-routing.module';
import { FightEventService } from './providers/fight-event/fight-event.service';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { EventsComponent } from './components/events/events.component';
import { CreateEventFightComponent } from './components/create-event-fight/create-event-fight.component';
import { FightEventResolverService } from './providers/fight-event-resolver/fight-event-resolver.service';
import { ChooseMemberComponent } from './components/choose-member/choose-member.component';

@NgModule({
  imports: [
    CommonModule,
    CrApiModule,
    MaterialModule,
    ReactiveFormsModule,
    FightsRoutingModule
  ],
  declarations: [CreateEventComponent, EventsComponent, CreateEventFightComponent, ChooseMemberComponent],
  providers: [FightEventService, FightEventResolverService]
})
export class FightsModule { }
