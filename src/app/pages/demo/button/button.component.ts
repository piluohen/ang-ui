import { Component, OnInit } from '@angular/core';

declare const require: any;

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

  apiMarkdown = require('raw-loader!./docs/api.md').default;

  blockMarkdown = require('raw-loader!./docs/block.md').default;

  constructor() { }

  ngOnInit() {
  }

}
