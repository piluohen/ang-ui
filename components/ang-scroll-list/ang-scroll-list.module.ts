import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngScrollListComponent } from './ang-scroll-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AngScrollListComponent
  ],
  exports: [AngScrollListComponent]
})
export class AngScrollListModule { }
