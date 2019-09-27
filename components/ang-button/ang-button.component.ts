import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'ang-button',
  templateUrl: './ang-button.component.html',
  styleUrls: ['./ang-button.component.scss']
})
export class AngButtonComponent implements OnInit {

  @Input() type = 'default';
  @Input() ghost = false;
  @Input() loading = false;
  @Input() shape = '';
  @Input() size = 'default';
  @Input() block = false;
  @Input() icon = '';
  @Input() disabled = false;

  @Output() click: EventEmitter<any> = new EventEmitter();

  angClass: any;

  constructor() { }

  ngOnInit() {
    this.setClass();
  }

  setClass() {
    this.angClass = {
      'ang-btn': true,
      [`ang-btn-${this.type}`]: this.type,
    };
  }

  /**
   * 点击事件
   */
  handleClick(): void {
    this.click.emit();
  }
}
