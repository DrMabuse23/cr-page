import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { HttpInterCeptorService } from './providers/http-inter-ceptor/http-inter-ceptor.service';
import { ClanImportService } from './providers/clan-import/clan-import.service';
import { ClanService } from './providers/clan/clan.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ClanImportService,
    ClanService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterCeptorService,
      multi: true
    }
  ]
})
export class CrApiModule { }
