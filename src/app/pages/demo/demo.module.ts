import { NgModule } from '@angular/core';
import { ShareModule } from 'src/app/share/share.module';

import { MarkdownModule, MarkedOptions, MarkedRenderer } from 'ngx-markdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';


import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';

import { CountupComponent } from './countup/countup.component';
import { PreviewComponent } from './preview/preview.component';
import { ColorComponent } from './color/color.component';
import { ScrollListComponent } from './scroll-list/scroll-list.component';
import { ButtonComponent } from './button/button.component';


// export function markedOptions(): MarkedOptions {
//   const renderer = new MarkedRenderer();

//   renderer.blockquote = (text: string) => {
//     return '<blockquote class="blockquote"><p>' + text + '</p></blockquote>';
//   };

//   return {
//     renderer,
//     gfm: true,
//     tables: true,
//     breaks: false,
//     pedantic: false,
//     sanitize: false,
//     smartLists: true,
//     smartypants: false,
//   };
// }

@NgModule({
  imports: [
    ShareModule,
    DemoRoutingModule,
    HttpClientModule,
    MarkdownModule.forChild()
    // MarkdownModule.forRoot({
    //   loader: HttpClient,
    //   markedOptions: {
    //     provide: MarkedOptions,
    //     useFactory: markedOptions,
    //   },
    // })
  ],
  providers: [],
  declarations: [
    DemoComponent,
    CountupComponent,
    PreviewComponent,
    ColorComponent,
    ScrollListComponent,
    ButtonComponent
  ],
  entryComponents: [DemoComponent]
})
export class DemoModule { }
