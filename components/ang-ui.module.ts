import { NgModule, ModuleWithProviders } from '@angular/core';

import { AngCountupModule } from './ang-countup/ang-countup.module';
import { AngPreviewModule } from './ang-preview/ang-preview.module';

@NgModule({
  exports: [
    AngCountupModule,
    AngPreviewModule
  ]
})
export class AngUiModule {
  /**
   * @deprecated Use `AngUiModule` instead.
   */
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AngUiModule
    };
  }
}
