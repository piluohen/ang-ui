import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngCountupComponent } from './ang-countup/ang-countup.component';
import { AngPreviewComponent } from './ang-preview/ang-preview.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: '/demo/ang-countup',
        pathMatch: 'full'
      },
      {
        path: 'ang-countup',
        component: AngCountupComponent,
        data: {
          breadcrumb: 'ang-countup 组件'
        }
      },
      {
        path: 'ang-preview',
        component: AngPreviewComponent,
        data: {
          breadcrumb: 'ang-preview',
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
