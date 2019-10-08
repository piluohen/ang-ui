import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-checkbox-group',
  templateUrl: './checkbox-group.component.html',
  styleUrls: ['./checkbox-group.component.scss']
})
export class CheckboxGroupComponent implements OnInit {

  @ViewChild('group', { static: false }) group: any;

  data: any = [
    { label: 'A', value: 'A' },
    { label: 'B', value: 'B' },
    { label: 'C', value: 'C' }
  ];

  value: any = ['A'];

  constructor() { }

  ngOnInit() {
  }

  log(value: any): void {
    console.log(value);
    console.log('data', this.data);
    console.log('value', this.value);
  }

}
