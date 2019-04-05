---
title: Layout
sidebarDepth: 2
---
## grid
设计思路：将页面宽度设置成24等分，随后根据父组件传入的span属性去计算当前的col组件的宽度

<br />

# 基础布局
<grid-demo-1></grid-demo-1>


**使用方法**

``` html
<g-row>
    <g-col span="24"></g-col>
</g-row>
<g-row>
    <g-col span="12"></g-col>
    <g-col span="12"></g-col>
</g-row>
<g-row>
    <g-col span="8"></g-col>
    <g-col span="8"></g-col>
    <g-col span="8"></g-col>
</g-row>
```

::: tip 实现技巧
结合SCSS遍历语法@for遍历语法和变量$去计算每个col组件的宽度   
:::



``` scss
  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n / 24) * 100%;
    }
```
<br />
<br />

# 混合布局

<grid-demo-2></grid-demo-2>

**使用方法**

``` html
<g-row gutter="20">
    <g-col span="14"></g-col>
    <g-col span="6"></g-col>
</g-row>
<g-row gutter="10">
    <g-col span="7"></g-col>
    <g-col span="7"></g-col>
    <g-col span="3"></g-col>
    <g-col span="3"></g-col>
</g-row>
<g-row gutter="15">
    <g-col span="7"></g-col>
    <g-col span="6"></g-col>
    <g-col span="7"></g-col>
</g-row>
```

# 响应式布局
<grid-demo-3></grid-demo-3>

**使用方法**

``` html
<g-row gutter="20">
    <g-col :pc="{span:3}" :narrow-pc="{span:6}" :ipad="{span:12}" ></g-col>
    <g-col :pc="{span:3}" :narrow-pc="{span:6}" :ipad="{span:12}" ></g-col>
    <g-col :pc="{span:3}" :narrow-pc="{span:6}" :ipad="{span:12}" ></g-col>
    <g-col :pc="{span:3}" :narrow-pc="{span:6}" :ipad="{span:12}" ></g-col>
    <g-col :pc="{span:3}" :narrow-pc="{span:6}" :ipad="{span:12}" ></g-col>
    <g-col :pc="{span:3}" :narrow-pc="{span:6}" :ipad="{span:12}" ></g-col>
```

::: tip 实现技巧
根据父组件的gutter属性去计算每个子组件col的相应间隔是多少  
:::

``` js
colStyle() {
    return {
    paddingLeft: this.gutter / 2 + "px",
    paddingRight: this.gutter / 2 + "px"
    };
}
```


#### g-row Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ------- | ------ | ------ | :------: | :------: |
| gutter | 栅格间隔 | Number | -- | 0 |
| align | flex 布局下的水平排列方式 | String | left/right/center | left |

#### g-col Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ------- | ------ | ------ | :------: | :------: |
| span | 栅格占据的列数 | Number/String | -- | 24 |
| offset | 栅格左侧的间隔格数 | Number/String | -- | 0 |
| widePc | >1201px 响应式栅格数或者栅格属性对象 | Object (例如： {span: 4, offset: 4}) | -- | -- |
| pc | >993px 响应式栅格数或者栅格属性对象 | Object (例如： {span: 4, offset: 4}) | -- | -- |
| narrowPc | >769px 响应式栅格数或者栅格属性对象 | Object (例如： {span: 4, offset: 4}) | -- | -- |
| ipad | >577px 响应式栅格数或者栅格属性对象 | Object (例如： {span: 4, offset: 4}) | -- | -- |

<br />
<br />

## collapse
**使用方法**
<collapse-demo-1></collapse-demo-1>

``` html
<g-collapse :selected="['finance']" single>
    <g-collapse-item title="新闻" name="finance"> text</g-collapse-item>
    <g-collapse-item title="体育" name="sports"> text</g-collapse-item>
    <g-collapse-item title="娱乐" name="entertainment"> text</g-collapse-item>
</g-collapse>
```
<br />
<br />

<collapse-demo-2></collapse-demo-2>
``` html
<g-collapse :selected="['finance','sports']" >
    <g-collapse-item title="新闻" name="finance"> text</g-collapse-item>
    <g-collapse-item title="体育" name="sports"> text</g-collapse-item>
    <g-collapse-item title="娱乐" name="entertainment"> text</g-collapse-item>
</g-collapse>
```

#### g-collapse Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ------- | ------ | ------ | :------: | :------: |
| single | 是否显示单项 | Boolean | -- | false |
| selected | 被选择的项 | Array | -- | -- |

::: warning 使用技巧
实现selectd的双向绑定记得要在父组件加上.sync。
:::

``` html
<g-collapse :selected.sync="Selectedarray">
```

#### g-collapse-item Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ------- | ------ | ------ | :------: | :------: |
| title | 单项小标题 | String | -- | -- |
| name | 选择标记 | String | -- | -- |