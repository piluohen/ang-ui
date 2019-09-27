import { Component, OnInit } from '@angular/core';

declare const require: any;

@Component({
  selector: 'app-countup',
  templateUrl: './countup.component.html',
  styleUrls: ['./countup.component.scss']
})
export class CountupComponent implements OnInit {

  value: any = 500;
  apiMarkdown = require('raw-loader!./docs/api.md').default;

  constructor() { }

  ngOnInit() {
  }

  handleChange() {
    this.value = Math.floor(Math.random() * 2000);
  }

}
