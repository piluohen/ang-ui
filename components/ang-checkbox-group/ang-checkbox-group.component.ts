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

// export interface NzCheckBoxOptionInterface {
//   label: string;
//   value: string;
//   checked?: boolean;
//   disabled?: boolean;
// }

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

  @Input() @InputBoolean() nzDisabled = false;

  data: any[] = [];

  onChange: (value: any) => void = () => null;

  onTouched: () => any = () => null;


  onOptionChange(): void {
    const data = this.options.filter(item => {
      return !item.disabled && item.checked;
    }).map(item => {
      return item.value;
    });
    this.onChange(data);
  }

  trackByOption(_index: number, option: any): string {
    return option.value;
  }

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

  registerOnChange(fn: (_: any[]) => {}): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.nzDisabled = isDisabled;
    this.cdr.markForCheck();
  }
}

