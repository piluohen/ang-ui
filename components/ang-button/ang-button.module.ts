import { NgModule } from '@angular/core';
import { NgZorroModule } from '../ng-zorro.module';

import { AngButtonComponent } from './ang-button.component';

@NgModule({
  imports: [
    NgZorroModule
  ],
  declarations: [
    AngButtonComponent
  ],
  exports: [AngButtonComponent]
})
export class AngButtonModule { }
