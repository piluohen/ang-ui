import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  markdown = require('raw-loader!./demo.md').default;

  constructor() { }

  ngOnInit() {
    console.log(this.markdown);
  }

}
