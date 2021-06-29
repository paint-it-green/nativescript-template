import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';

import { LayoutsModule } from '@layouts/layouts.module';
import { AccountListComponent } from './account-list.component';

const routes: Routes = [
  {
    path: '',
    component: AccountListComponent
  },
];

@NgModule({
  declarations: [AccountListComponent],
  imports: [
    NativeScriptCommonModule,
    LayoutsModule,
    NativeScriptRouterModule.forChild(routes)
  ],
  exports: [NativeScriptRouterModule],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AccountListModule { }
