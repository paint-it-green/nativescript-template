import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';

import { FundTransferComponent } from './fund-transfer.component';
import { LayoutsModule } from '@layouts/layouts.module';

const routes: Routes = [
  {
    path: '',
    component: FundTransferComponent
  },
];

@NgModule({
  declarations: [FundTransferComponent],
  imports: [
    NativeScriptCommonModule,
    LayoutsModule,
    NativeScriptRouterModule.forChild(routes)
  ],
  exports: [NativeScriptRouterModule],
  schemas: [NO_ERRORS_SCHEMA]
})
export class FundTransferModule { }
