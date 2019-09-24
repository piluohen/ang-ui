import { NgModule } from '@angular/core';
import { ShareModule } from 'src/app/share/share.module';
import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import { CountupComponent } from './countup/countup.component';
import { PreviewComponent } from './preview/preview.component';
import { ColorComponent } from './color/color.component';


@NgModule({
  imports: [
    ShareModule,
    DemoRoutingModule
  ],
  providers: [],
  declarations: [
    DemoComponent,
    CountupComponent,
    PreviewComponent,
    ColorComponent
  ],
  entryComponents: [DemoComponent]
})
export class DemoModule { }
