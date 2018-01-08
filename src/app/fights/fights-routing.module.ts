import { AuthGuard } from '../user/providers/auth/auth.guard';
import { FightEventResolverService } from './providers/fight-event-resolver/fight-event-resolver.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateEventFightComponent } from './components/create-event-fight/create-event-fight.component';
import { EventsComponent } from './components/events/events.component';
import { CreateEventComponent } from './components/create-event/create-event.component';

const routes: Routes = [
  {
    path: 'event',
    canActivateChild: [AuthGuard],
    component: EventsComponent
  },
  {
    path: 'event/add',
    component: CreateEventComponent,
  },
  {
    path: 'event/:id',
    component: CreateEventFightComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FightsRoutingModule { }
