import { ModuleWithProviders, NgModule } from '@angular/core';
import {ListSongDetailComponent} from "./playlist/list-song-detail/list-song-detail.component"

const COMPONENTS =[
    ListSongDetailComponent
]
@NgModule({
  imports: [],
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
