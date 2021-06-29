import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';

const routes: Routes = [
  {
    path: 'fund-transfer',
    loadChildren: () =>
      import('./fund-transfer/fund-transfer.module').then((m) => m.FundTransferModule),
  },
];

@NgModule({
  declarations: [],
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule.forChild(routes)
  ],
  exports: [NativeScriptRouterModule],
  schemas: [NO_ERRORS_SCHEMA]
})
export class FundTransferModule { }
