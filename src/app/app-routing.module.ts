import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
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
    redirectTo: '/member'
  },
  { path: '**', redirectTo: '/member' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
