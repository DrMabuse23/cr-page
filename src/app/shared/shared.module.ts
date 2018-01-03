import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UserModule } from '../user/user.module';
import { CrApiModule } from '../cr-api/cr-api.module';
import { MaterialModule } from '../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
export const COMPONENTS = [
  HeaderBarComponent,
  LoginComponent
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    CrApiModule,
    FlexLayoutModule,
    RouterModule
  ],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS]
})
export class SharedModule { }
