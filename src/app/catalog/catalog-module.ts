import { ModuleWithProviders, NgModule } from '@angular/core';
import {ListSongDetailComponent} from "./playlist/list-song-detail/list-song-detail.component"
import { ThemeModule } from '../@theme/theme.module';
import { BrowserModule } from '@angular/platform-browser'
import {MaterialModule} from '../material-module'
const COMPONENTS =[
    ListSongDetailComponent
]
@NgModule({
  imports: [MaterialModule,ThemeModule],
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
