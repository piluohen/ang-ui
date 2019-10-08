import { NgModule } from '@angular/core';
import { NgZorroModule } from '../ng-zorro.module';

import { AngCheckboxGroupComponent } from './ang-checkbox-group.component';


@NgModule({
  imports: [
    NgZorroModule
  ],
  declarations: [
    AngCheckboxGroupComponent
  ],
  exports: [AngCheckboxGroupComponent],

})
export class AngCheckboxGroupModule { }

