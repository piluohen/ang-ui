import { NgModule } from '@angular/core';
import { NgZorroModule } from '../ng-zorro.module';

import { AngPreviewComponent } from './ang-preview.component';

@NgModule({
  imports: [
    NgZorroModule
  ],
  declarations: [
    AngPreviewComponent
  ],
  exports: [AngPreviewComponent]
})
export class AngPreviewModule { }
