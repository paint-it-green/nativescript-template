import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';

import { OtpComponent } from './otp.component';

const routes: Routes = [
  {
    path: '',
    component: OtpComponent
  },
];

@NgModule({
  declarations: [OtpComponent],
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule.forChild(routes)
  ],
  exports: [NativeScriptRouterModule],
  schemas: [NO_ERRORS_SCHEMA]
})
export class OtpModule { }
