import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countup',
  templateUrl: './countup.component.html',
  styleUrls: ['./countup.component.scss']
})
export class CountupComponent implements OnInit {

  value: any = 500;

  constructor() { }

  ngOnInit() {
  }

  handleChange() {
    this.value = Math.floor(Math.random() * 2000);
  }

}