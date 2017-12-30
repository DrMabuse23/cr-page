import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'clan',
    loadChildren: 'app/clan/clan.module#ClanModule',
  },
  {
    path: 'member',
    loadChildren: 'app/member/member.module#MemberModule',
  },
  {
    path: 'event',
    loadChildren: 'app/fights/fights.module#FightsModule'
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/clan'
  },
  { path: '**', redirectTo: '/clan' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: Boolean(history.pushState) === false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
