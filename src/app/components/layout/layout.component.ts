import { Component, OnInit, Input, TemplateRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  // 折叠菜单
  isCollapsed = false;

  menusList: any[] = [
    {
      title: 'demo', icon: 'dashboard', open: true,
      children: [
        { title: 'ang-countup', path: '/demo/ang-countup' },
        { title: 'ang-preview', path: '/demo/ang-preview' }
      ]
    }
  ];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    console.log(this.activatedRoute);
  }

  ngOnInit() {
  }

  handleLink(path: string): void {
    console.log(path);
    this.router.navigate([path]);
  }
}
