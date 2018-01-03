import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/clan'
  },
  { path: '**', redirectTo: '/clan' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: Boolean(history.pushState) === false,
    enableTracing: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
