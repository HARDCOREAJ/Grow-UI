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
                    这是娱乐内容
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