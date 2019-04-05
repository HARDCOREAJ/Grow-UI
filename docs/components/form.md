---
title: Form
sidebarDepth: 2
---
## Input

<input-demo></input-demo>

**使用方法**
``` html
    <g-input placeholder="默认状态"></g-input>
    <g-input value="初始内容"></g-input>
    <g-input v-model="message"></g-input>{{message}}
    <g-input value="禁用状态" disabled></g-input>
    <g-input value="只读状态" readonly></g-input>
    <g-input value="错误状态" error="error"></g-input>
```
<br />

#### Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ------- | ------ | ------ | :------: | :------: |
| placeholder | 原生属性 | String | -- | -- |
| value | 输入框初始内容 | String | -- | -- |
| disabled | disabled状态 | Boolean | -- | false |
| readonly | readonly状态 | Boolean | -- | false |
| error | error状态 | Boolean | -- | false |
<br />
