---
title: Basic
sidebarDepth: 2
---
## Icon

**使用方法**

<g-icon-demo></g-icon-demo>

``` html
    <g-icon name="left"></g-icon>
    <g-icon name="right"></g-icon>
    <g-icon name="error"></g-icon>
```
<br />

**Atributes**

| 参数     | 说明           | 类型  | 可选值  | 默认值  |
| -------- |:-------------:| -----:|:--------:|:-------:|
|name      |   图标名       | String  |  --      |  --     |
<br />

## Button

**使用方法**

<button-demo></button-demo>

<br />

``` html
    <g-button>默认</g-button>
    <g-button :loading='true'>加载</g-button>
    <g-button icon='settings'>设置</g-button>
    <g-button icon="settings" icon-position="right">设置</g-button>
```
<br />


#### Atributes

| 参数   | 说明             | 类型  | 可选值  | 默认值 |
| -------- |:-------------:| -----:|:--------:|:-------:|
| icon     | 图标的名称     | String|  --  |  --    |
| loading  | 加载中         |   Bollean | -- | false |
| iconPosition | 图标的位置  |    String |left/right  | left |  
<br />

::: tip 使用小技巧
正常情况下，在加载过程中的图标是与初始时不一样的。所以在这个button组件，通过判断pros去决定在加载过程中，原始图标是否显示。源码中具体实现如下：      
:::


``` js
 <g-icon class="icon" v-if="icon&&!loading" :name="icon"></g-icon>
```
<br />

## ButtonGroup

**使用方法**

<button-group-demo></button-group-demo>

<br />

``` html
    <g-button-group>
        <g-button icon="left">上一页</g-button>
        <g-button>更多</g-button>
        <g-button icon="right" icon-position="right">下一页</g-button>
    </g-button-group>

```

<br />

#### Atributes

| 参数     | 说明           | 类型  | 可选值  | 默认值  |
| -------- |:-------------:| -----:|:--------:|:-------:|
| --       |        --     | --    |  --      |  --     |


<br />