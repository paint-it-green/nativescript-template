import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from '@nativescript/angular';
import { PreloadAllModules, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./modules/accounts/accounts.module').then((m) => m.AccountsModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./modules/fund-transfer/fund-transfer.module').then((m) => m.FundTransferModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./modules/settings/settings.module').then((m) => m.SettingsModule),
  },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
