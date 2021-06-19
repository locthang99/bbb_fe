import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {LoginComponent} from './catalog/login/login.component'
//import {BaseLoginComponent} from './catalog/login/baseLogin/baselogin.component'

export const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./catalog/catalog.module')
      .then(m => m.CatalogModule),
  },
  {
    path: 'enduser',
    loadChildren: () => import('./end-user/end-user.module')
      .then(m => m.EnduserModule),
  },
  {
    path: 'auth_admin',component: LoginComponent,pathMatch:'full'
  },
  {
    path: 'auth_enduser',component: LoginComponent,pathMatch:'full'
  },
  // { path: '', redirectTo: 'admin',pathMatch:'full'},
  // { path: '**', redirectTo: 'admin' ,pathMatch:'full'},
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
