import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngCountupComponent } from './ang-countup.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AngCountupComponent],
  exports: [AngCountupComponent]
})
export class AngCountupModule { }
