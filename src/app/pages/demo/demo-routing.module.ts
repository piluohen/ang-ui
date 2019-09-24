import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountupComponent } from './countup/countup.component';
import { PreviewComponent } from './preview/preview.component';
import { ColorComponent } from './color/color.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: '/demo/color',
        pathMatch: 'full'
      },
      {
        path: 'color',
        component: ColorComponent,
        data: {
          breadcrumb: '颜色'
        }
      },
      {
        path: 'ang-countup',
        component: CountupComponent,
        data: {
          breadcrumb: 'ang-countup 组件'
        }
      },
      {
        path: 'ang-preview',
        component: PreviewComponent,
        data: {
          breadcrumb: 'ang-preview 组件',
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
