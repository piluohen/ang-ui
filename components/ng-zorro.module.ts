import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzModalModule } from 'ng-zorro-antd/modal';

const ngZorro = [
  NzIconModule,
  NzCarouselModule,
  NzModalModule
];

@NgModule({
  imports: [
    CommonModule,
    ...ngZorro
  ],
  declarations: [
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN }
  ],
  exports: [
    CommonModule,
    ...ngZorro
  ]
})
export class NgZorroModule { }
