import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClient } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { HttpExceptionInterceptor } from './httpExceptionInterceptor';
import { TrustHtmlPipe, TrustScriptPipe, TrustStylePipe, TrustUrlPipe } from './trust-resource.pipe';
import { LayoutComponent } from '../components/layout/layout.component';
import { AngUiModule } from 'components/ang-ui.module';

/**
 * 公共组件
 * @type {any[]}
 */
const COMPONENT = [
  TrustUrlPipe, TrustHtmlPipe, TrustScriptPipe, TrustStylePipe,
  LayoutComponent
];

/**
 * 第三方模块
 * @type {NgZorroAntdModule[]}
 */
const THIRD_MODULE = [NgZorroAntdModule, AngUiModule];

/**
 * 公共指令
 * @type {any[]}
 */
const DIRECTIVES = [];

@NgModule({
  imports: [
    CommonModule,
    NgxEchartsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    ...THIRD_MODULE
  ],
  declarations: [
    ...COMPONENT,
    ...DIRECTIVES
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpExceptionInterceptor, multi: true },
    { provide: NZ_I18N, useValue: zh_CN }
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    ...THIRD_MODULE,
    ...COMPONENT,
    ...DIRECTIVES
  ]
})

export class ShareModule { }
