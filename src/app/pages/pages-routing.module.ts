import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { DashboardUserComponent } from './user-dashboard/dashboard-user.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import {SongComponent} from '../catalog/song/song.component'
import {PlaylistComponent} from '../catalog/playlist/playlist.component'
import {SongtypeComponent} from '../catalog/songtype/songtype.component'
import {SongtagComponent} from '../catalog/songtag/songtag.component'
import {TestComponent} from '../catalog/test/test.component'
import {AccountComponent} from '../catalog/account/account.component'
import {ProfileComponent} from '../catalog/profile/profile.component'
import {LogoutComponent} from '../catalog/logout/logout.component'

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: ECommerceComponent,
    },
    {
      path: 'user-dashboard',
      component: DashboardUserComponent,
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
      path: 'songtype',
      component: SongtypeComponent,
    },
    {
      path: 'songtag',
      component: SongtagComponent,
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
      path: 'layout',
      loadChildren: () => import('./layout/layout.module')
        .then(m => m.LayoutModule),
    },
    {
      path: 'forms',
      loadChildren: () => import('./forms/forms.module')
        .then(m => m.FormsModule),
    },
    {
      path: 'ui-features',
      loadChildren: () => import('./ui-features/ui-features.module')
        .then(m => m.UiFeaturesModule),
    },
    {
      path: 'modal-overlays',
      loadChildren: () => import('./modal-overlays/modal-overlays.module')
        .then(m => m.ModalOverlaysModule),
    },
    {
      path: 'extra-components',
      loadChildren: () => import('./extra-components/extra-components.module')
        .then(m => m.ExtraComponentsModule),
    },
    {
      path: 'maps',
      loadChildren: () => import('./maps/maps.module')
        .then(m => m.MapsModule),
    },
    {
      path: 'charts',
      loadChildren: () => import('./charts/charts.module')
        .then(m => m.ChartsModule),
    },
    {
      path: 'editors',
      loadChildren: () => import('./editors/editors.module')
        .then(m => m.EditorsModule),
    },
    {
      path: 'tables',
      loadChildren: () => import('./tables/tables.module')
        .then(m => m.TablesModule),
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
