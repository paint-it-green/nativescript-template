import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';

import { MainLayoutComponent } from './main-layout.component';

@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    NativeScriptCommonModule
  ],
  exports: [MainLayoutComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class MainLayoutModule { }
