import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserService } from './providers/user/user.service';
import { AuthGuard } from './providers/auth/auth.guard';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ],
  declarations: [],
  exports: [],
  providers: [UserService, AuthGuard]
})
export class UserModule { }
