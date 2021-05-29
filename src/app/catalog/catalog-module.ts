import { ModuleWithProviders, NgModule } from '@angular/core';
import {ListSongDetailComponent} from "./playlist/list-song-detail/list-song-detail.component"
import {CreatePlaylistComponent} from "./playlist/create-playlist/create-playlist.component"
import {CreateSongComponent} from "./song/create-song/create-song.component"
import { ThemeModule } from '../@theme/theme.module';
import { BrowserModule } from '@angular/platform-browser'
import {MaterialModule} from '../material-module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const COMPONENTS =[
    CreateSongComponent,
    ListSongDetailComponent,
    CreatePlaylistComponent
]
@NgModule({
  imports: [MaterialModule,ThemeModule,FormsModule,ReactiveFormsModule],
  exports: [...COMPONENTS],
  declarations: [...COMPONENTS],
})
export class CatalogModule {
  static forRoot(): ModuleWithProviders<CatalogModule> {
    return {
      ngModule: CatalogModule,
    };
  }
}
