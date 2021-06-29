import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';

import { MainLayoutModule } from './main-layout';

const modules = [
  MainLayoutModule
];

@NgModule({
  declarations: [],
  imports: [
    NativeScriptCommonModule,
    ...modules
  ],
  exports: [...modules],
  schemas: [NO_ERRORS_SCHEMA ]
})
export class LayoutsModule { }
