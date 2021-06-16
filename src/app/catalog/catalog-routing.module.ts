import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { CatalogComponent } from './catalog.component';
import { DashboardComponent } from '../catalog/dashboard/dashboard.commponent'
import {DashboardUserComponent} from '../catalog/dashboard-user/dashboard-user.commponent'
import {DeeplearningComponent} from '../catalog/deeplearning/deeplearning.component'
import {SongComponent} from '../catalog/song/song.component'
import {PlaylistComponent} from '../catalog/playlist/playlist.component'
import {TypeComponent} from '../catalog/type/type.component'
import {TagComponent} from '../catalog/tag/tag.component'
import {TestComponent} from '../catalog/test/test.component'
import {AccountComponent} from '../catalog/account/account.component'
import {ProfileComponent} from '../catalog/profile/profile.component'
import {LogoutComponent} from '../catalog/logout/logout.component'

const routes: Routes = [{
  path: '',
  component: CatalogComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: 'dashboard-user',
      component: DashboardUserComponent,
    },
    {
      path: 'deeplearning',
      component: DeeplearningComponent,
    },
    {
      path: 'song',
      component: SongComponent,
    },
    {
      path: 'playlist',
      component: PlaylistComponent,
    },
    {
      path: 'type',
      component: TypeComponent,
    },
    {
      path: 'tag',
      component: TagComponent,
    },
    {
      path: 'account',
      component: AccountComponent,
    },
    {
      path: 'user',
      component: ProfileComponent,
    },
    {
      path: 'logout',
      component: LogoutComponent,
    },
    {
      path: 'test',
      component: TestComponent,
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: DashboardComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogRoutingModule {
}
