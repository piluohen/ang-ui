import { NgModule } from '@angular/core';
import { ShareModule } from 'src/app/share/share.module';

import { MarkdownModule, MarkedOptions } from 'ngx-markdown';


import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';

import { CountupComponent } from './countup/countup.component';
import { PreviewComponent } from './preview/preview.component';
import { ColorComponent } from './color/color.component';
import { ScrollListComponent } from './scroll-list/scroll-list.component';
import { HttpClient } from '@angular/common/http';


@NgModule({
  imports: [
    ShareModule,
    DemoRoutingModule,
    MarkdownModule.forRoot({
      // provide: MarkedOptions,
      loader: HttpClient,
      // useValue: {
      //   gfm: true,
      //   tables: true,
      //   breaks: false,
      //   pedantic: false,
      //   sanitize: false,
      //   smartLists: true,
      //   smartypants: false,
      // },
    })
  ],
  providers: [],
  declarations: [
    DemoComponent,
    CountupComponent,
    PreviewComponent,
    ColorComponent,
    ScrollListComponent
  ],
  entryComponents: [DemoComponent]
})
export class DemoModule { }
