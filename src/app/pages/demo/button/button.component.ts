import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  baseMarkdown = require('raw-loader!./docs/base.md').default;

  iconMarkdown = require('raw-loader!./docs/icon.md').default;

  sizeMarkdown = require('raw-loader!./docs/size.md').default;

  ghostMarkdown = require('raw-loader!./docs/ghost.md').default;

  constructor() { }

  ngOnInit() {
  }

}
