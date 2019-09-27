import { NgModule, ModuleWithProviders } from '@angular/core';

import { AngCountupModule } from './ang-countup/ang-countup.module';
import { AngPreviewModule } from './ang-preview/ang-preview.module';
import { AngScrollListModule } from './ang-scroll-list/ang-scroll-list.module';
import { AngButtonModule } from './ang-button/ang-button.module';

@NgModule({
  exports: [
    AngCountupModule,
    AngPreviewModule,
    AngScrollListModule,
    AngButtonModule
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
