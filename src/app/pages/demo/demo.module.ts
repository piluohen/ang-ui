import { NgModule } from '@angular/core';
import { ShareModule } from 'src/app/share/share.module';
import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import { AngCountupComponent } from './ang-countup/ang-countup.component';
import { AngPreviewComponent } from './ang-preview/ang-preview.component';


@NgModule({
  imports: [
    ShareModule,
    DemoRoutingModule
  ],
  providers: [],
  declarations: [
    DemoComponent,
    AngCountupComponent,
    AngPreviewComponent
  ],
  entryComponents: [DemoComponent]
})
export class DemoModule { }
