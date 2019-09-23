import { NgModule, ModuleWithProviders } from '@angular/core';

import { AngCountupModule } from './ang-countup/ang-countup.module';

@NgModule({
  exports: [
    AngCountupModule
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
