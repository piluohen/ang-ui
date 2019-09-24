import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'ang-preview',
  templateUrl: './ang-preview.component.html',
  styleUrls: ['./ang-preview.component.scss']
})
export class AngPreviewComponent implements OnInit {

  @Input()
  set visible(val: boolean) {
    this.modeVisible = val;
    setTimeout(() => {
      this.visibleChange.emit(val);
    }, 0);
  }

  get visible() {
    return this.modeVisible;
  }

  constructor() { }

  modeVisible = false;

  imgList: any[] = [];

  @ViewChild('carousel', { static: false }) carousel;

  @Input() list: any = [];

  @Input() index = 0;

  @Output()
  visibleChange: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
  }

  handleAfterOpen() {
    this.imgList = this.list;
    setTimeout(() => {
      this.handleGoToIndex(this.index);
    }, 0);
  }

  handleCancel() {
    this.imgList = [];
    this.modeVisible = false;
    this.visibleChange.emit(false);
  }

  handlePrev(): void {
    this.carousel.pre();
  }

  handleNext(): void {
    this.carousel.next();
  }

  handleGoToIndex(index): void {
    this.carousel.goTo(index);
  }
}
