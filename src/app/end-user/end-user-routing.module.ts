import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import {EndUserComponent} from './end-user.component'
import {DashboardComponent} from 'app/catalog/dashboard/dashboard.commponent'
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component'
import { ListMySongComponent } from './list-my-song/list-my-song.component'
import { CreateSongComponent } from './create-song/create-song.component'
import {UpdateAccountComponent} from './update-account/update-account.component'

import {ProfileComponent} from '../catalog/profile/profile.component'
import {LogoutComponent} from '../catalog/logout/logout.component'

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
      component: DashboardComponent,
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
      path: 'logout',
      component: LogoutComponent,
    },

    {
      path: '',
      redirectTo: 'user',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: ProfileComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnduserRoutingModule {
}
