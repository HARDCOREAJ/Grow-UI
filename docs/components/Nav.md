---
title: Nav
sidebarDepth: 2
---

## tabs
<tabs-demo></tabs-demo>

```html
    <g-tabs selected="entertainment">
        <g-tabs-head>
            <g-tabs-item name="entertainment">
                    娱乐
            </g-tabs-item>
            <g-tabs-item name="finance">
                    财经
            </g-tabs-item>
            <g-tabs-item name="sports">
                    体育
            </g-tabs-item>
            <g-tabs-item name="disable" disabled>
                    禁用
            </g-tabs-item>
            </g-tabs-head>
        <g-tabs-body>
            <g-tabs-pane name="entertainment">
                    这是娱乐内容
            </g-tabs-pane>
            <g-tabs-pane name="finance">
                    这是财经内容
            </g-tabs-pane>
            <g-tabs-pane name="sports">
                    这是体育内容
            </g-tabs-pane>
            <g-tabs-pane name="disable">
                    这是禁用内容
            </g-tabs-pane>
        </g-tabs-body>
    </g-tabs>
```
<br />

::: tip 下划线实现技巧
首先根据当前tabs-head父组件里给选中tabs-item，通过getBoundingClientRect()拿到父子组件的大小及其相对于视口的位置视口的；随后计算其距离左边视口的差值。
最后设置属性：下划线line是绝对定位，tabs-head组件是相对定位
:::


``` js
      let { width, height, top, left } = vm.$el.getBoundingClientRect();
      this.$refs.line.style.width = `${width}px`;
      let { left: left2 } = this.$refs.head.getBoundingClientRect();
      this.$refs.line.style.left = `${left - left2}px`;
```
``` css
.line {
    position: absolute;
    bottom: 0;
    border-bottom: 1px solid $blue;
    transition: all 350ms;
    margin-bottom: -1px;

```

#### g-tabs Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ------- | ------ | ------ | :------: | :------: |
| selected | 默认被选择的项 | String | -- | -- |

#### g-tabs-item Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ------- | ------ | ------ | :------: | :------: |
| name | 选择项名字 | String | -- | -- |
| disabled | 是否被禁用 | Boolean | -- | false |

#### g-tabs-pane Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ------- | ------ | ------ | :------: | :------: |
| name | 和item对应的名字 | String | -- | -- |
