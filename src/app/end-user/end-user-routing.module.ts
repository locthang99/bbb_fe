import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import {EndUserComponent} from './end-user.component'
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component'
import { ListMySongComponent } from './list-my-song/list-my-song.component'
import { CreateSongComponent } from './create-song/create-song.component'
import {UpdateAccountComponent} from './update-account/update-account.component'
import {MyBillComponent} from "./my-bill/my-bill.component"

import {ProfileComponent} from '../catalog/profile/profile.component'
import {LogoutComponent} from '../catalog/logout/logout.component'
import { DashboardComponent } from 'app/catalog/dashboard/dashboard.commponent';

const routes: Routes = [{
  path: '',
  component: EndUserComponent,
  children: [
    {
      path: 'user',
      component: ProfileComponent,
    },
    {
      path: 'dashboard',
      component: MyDashboardComponent,
    },
    {
      path: 'song',
      component: ListMySongComponent,
    },
    {
      path: 'newsong',
      component: CreateSongComponent,
    },
    {
      path: 'buyvip',
      component: UpdateAccountComponent,
    },
    {
      path: 'bill',
      component: MyBillComponent,
    },
    {
      path: 'logout',
      component: LogoutComponent,
    },

    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: MyDashboardComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnduserRoutingModule {
}
