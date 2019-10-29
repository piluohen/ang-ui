import { NgModule } from '@angular/core';
import { NgZorroModule } from '../ng-zorro.module';
import { AngTableComponent } from './ang-table.component';

@NgModule({
  imports: [
    NgZorroModule
  ],
  declarations: [
    AngTableComponent
  ],
  exports: [AngTableComponent]
})
export class AngTableModule { }
