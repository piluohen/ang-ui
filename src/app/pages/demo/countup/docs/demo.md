## 用法

``` HTML
<ang-countup [endVal]="value"></ang-countup>
```

<!-- // 开始值
  @Input() startVal = 0; 
  // 结束值
  @Input() endVal: number; 
  // 持续时间
  @Input() duration = 1000; 
  // 完全展示回调
  @Output() ready: EventEmitter<any> = new EventEmitter(); -->

## Api

| 参数     |     描述     |  类型  | 可选值 | 必须  | 默认值   |
|----------|:------------:|:------:|:------:|:-----:|----------|
| startVal |    开始值    | Number |        | false | 0        |
| endVal   |    结束值    | Number |        | true  | 0        |
| duration | 动画持续时间 | Number |        | false | 2000(ms) |

## Event

| 名称  |     描述     | 返回值 |
|-------|:------------:|--------|
| ready | 动画结束返回 | -      |

