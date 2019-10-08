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
        { title: 'color', path: '/demo/color' },
        { title: 'ang-button', path: '/demo/ang-button' },
        { title: 'ang-countup', path: '/demo/ang-countup' },
        { title: 'ang-preview', path: '/demo/ang-preview' },
        { title: 'ang-scroll-list', path: '/demo/ang-scroll-list' },
        { title: 'ang-checkbox-group', path: '/demo/ang-checkbox-group' }
      ]
    }
  ];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
  }
}
