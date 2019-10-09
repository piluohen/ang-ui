import { FocusMonitor } from '@angular/cdk/a11y';
import {
  forwardRef,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewEncapsulation
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { InputBoolean } from 'ng-zorro-antd/core';

@Component({
  selector: 'ang-checkbox-group',
  templateUrl: './ang-checkbox-group.component.html',
  exportAs: 'angCheckboxGroup',
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AngCheckboxGroupComponent),
      multi: true
    }
  ]
})
export class AngCheckboxGroupComponent implements ControlValueAccessor, OnInit, OnDestroy {

  @Input() options: any[] = [];

  @Input() @InputBoolean() disabled = false;

  data: any[] = [];

  constructor(
    private elementRef: ElementRef,
    private focusMonitor: FocusMonitor,
    private cdr: ChangeDetectorRef,
    renderer: Renderer2
  ) {
    renderer.addClass(elementRef.nativeElement, 'ant-checkbox-group');
  }

  ngOnInit(): void {
    this.focusMonitor.monitor(this.elementRef, true).subscribe(focusOrigin => {
      if (!focusOrigin) {
        Promise.resolve().then(() => this.onTouched());
      }
    });
  }

  ngOnDestroy(): void {
    this.focusMonitor.stopMonitoring(this.elementRef);
  }

  /**
   * change方法
   */
  onChange: (value: any) => void = () => null;

  /**
   * touch方法
   */
  onTouched: () => any = () => null;

  /**
   * 索引
   * @param _index 索引值
   * @param option 子项
   */
  trackByOption(_index: number, option: any): string {
    return option.value;
  }

  /**
   * 写入value方法
   * @param value 值
   */
  writeValue(value: any[]): void {
    if (!value) {
      return;
    }
    this.options.forEach(item => {
      item.checked = value.includes(item.value);
    });
    this.data = value;
    this.cdr.markForCheck();
  }

  /**
   * 注册change方法
   * @param fn change方法
   */
  registerOnChange(fn: (_: any[]) => {}): void {
    this.onChange = fn;
  }

  /**
   * 注册touch事件
   * @param fn touch方法
   */
  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  /**
   * 设置禁用状态
   * @param isDisabled 是否禁用
   */
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this.cdr.markForCheck();
  }

  /**
   * checkbox选中值改变操作
   */
  handleChange(): void {
    const data = this.options.filter(item => {
      return item.checked;
    }).map(item => {
      return item.value;
    });
    this.onChange(data);
  }
}

