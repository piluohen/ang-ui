import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-ang-table',
  templateUrl: './ang-table.component.html',
  styleUrls: ['./ang-table.component.scss']
})
export class AngTableComponent implements OnInit, OnChanges {

  @Input() data: any[] = [];

  @Input() url: any;

  @Input() params: any;

  @Input() columns: any;

  @Input() totalKey: any = 'total';

  @Input() contentKey: any = 'list';

  @Input() showSelect = true;

  @Input() scroll: any;

  @Output() checkChange: EventEmitter<any> = new EventEmitter();

  isAllDisplayDataChecked = false;
  isOperating = false;
  isIndeterminate = false;
  checkedData = [];
  mapOfCheckedId: { [key: string]: boolean } = {};
  numberOfChecked = 0;

  tableData: any[] = [];

  tableColumns: any[] = [];

  loading = true;

  pagination = {
    total: 0,
    pageSize: 10,
    pageIndex: 1
  };

  constructor(
  ) {
  }

  ngOnInit() {
    this.tableColumns = this.columns;
    if (this.url) {
      this.getList();
    } else {
      this.tableData = this.data;
    }
  }

  ngOnChanges(changes: any) {
    const { currentValue, firstChange } = changes.params;
    if (!firstChange) {
      this.params = currentValue;
      this.getList(true);
    }
  }

  /**
   * 刷新全选
   */
  refreshStatus(): void {
    this.isAllDisplayDataChecked = this.checkedData.length > 0 ? this.checkedData
      .filter(item => !item.disabled)
      .every(item => this.mapOfCheckedId[item.id]) : false;
    this.isIndeterminate =
      this.checkedData.filter(item => !item.disabled).some(item => this.mapOfCheckedId[item.id]) &&
      !this.isAllDisplayDataChecked;
    const checked = this.tableData.filter(item => this.mapOfCheckedId[item.id]);
    this.numberOfChecked = checked.length;
    this.checkChange.emit(checked);
  }

  /**
   * 全选操作
   * @param value 全选值
   */
  checkAll(value: boolean): void {
    this.checkedData.filter(item => !item.disabled).forEach(item => (this.mapOfCheckedId[item.id] = value));
    this.refreshStatus();
  }

  /**
   * 清除选中
   */
  clearChecked() {
    this.checkAll(false);
  }

  /**
   * 获取列表数据
   * @param reset 是否重置列表
   */
  getList(reset: boolean = false, param: any = {}): void {
    if (reset) {
      this.pagination.pageIndex = 1;
    }
    this.loading = true;
    const requestParams = {
      pageNo: this.pagination.pageIndex,
      pageSize: this.pagination.pageSize,
      ...this.params,
      ...param
    };

    // this.http.get(this.url, requestParams).subscribe((res) => {
    //   if (res.success) {
    //     const data = res.data;
    //     if (data) {
    //       this.pagination.total = data[this.totalKey];
    //       this.tableData = data[this.contentKey].map((item, i) => {
    //         return {
    //           ...item,
    //           number: (data.pageNo - 1) * this.pagination.pageSize + i + 1,
    //         };
    //       });
    //       this.checkedData = this.tableData || [];
    //       this.checkAll(false);
    //     }
    //   }
    //   this.loading = false;
    // });
  }
}
