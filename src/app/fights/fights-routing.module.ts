import { FightEventResolverService } from './providers/fight-event-resolver/fight-event-resolver.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateEventFightComponent } from './components/create-event-fight/create-event-fight.component';
import { EventsComponent } from './components/events/events.component';
import { CreateEventComponent } from './components/create-event/create-event.component';

const routes: Routes = [
  {
    path: 'events',
    component: EventsComponent,
    pathMatch: 'full'
  },
  {
    path: 'add',
    component: CreateEventComponent
  },
  {
    path: 'view/:id',
    component: CreateEventFightComponent
    // resolve: {
    //   event: FightEventResolverService
    // }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FightsRoutingModule { }
