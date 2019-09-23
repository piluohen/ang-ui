import { Component, OnInit, OnChanges, Input, ElementRef, Output, EventEmitter } from '@angular/core';
import { CountUp } from 'countup.js';

@Component({
  selector: 'ang-countup',
  template: `<span class="hn-countup"></span>`
})

export class AngCountupComponent implements OnInit, OnChanges {

  instance = null;

  @Input() startVal = 0;
  @Input() endVal: number;
  @Input() duration = 2;
  @Output() ready: EventEmitter<any> = new EventEmitter();

  constructor(
    private el: ElementRef
  ) { }

  ngOnInit() {
    this.create();
  }

  ngOnChanges(changes) {
    const value = changes.endVal.currentValue;
    if (this.instance) {
      this.instance.update(value);
    }
  }

  ngOnDestory() {
    this.instance = null;
  }

  create() {
    if (this.instance) {
      return;
    }
    const dom = this.el.nativeElement.querySelector('.hn-countup');
    const instance = new CountUp(
      dom,
      this.endVal,
      {
        startVal: this.startVal,
        duration: this.duration
      }
    );
    if (instance.error) {
      return;
    }
    this.instance = instance;
    if (this.duration < 0) {
      this.ready.emit({ instance, CountUp });
      return;
    }
    setTimeout(() => {
      instance.start(() => {
        this.ready.emit({ instance, CountUp });
      });
    }, this.duration);
  }

}
