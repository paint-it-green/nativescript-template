import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';

import { SettingsComponent } from './settings.component';
import { LayoutsModule } from '@layouts/layouts.module';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent
  },
];


@NgModule({
  declarations: [SettingsComponent],
  imports: [
    NativeScriptCommonModule,
    LayoutsModule,
    NativeScriptRouterModule.forChild(routes)
  ],
  exports: [NativeScriptRouterModule],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SettingsModule { }
