---
title：快速上手
---

# 快速上手

1 **引入**

``` js
import Vue from 'vue'
import GrowUI from 'grow-ui'

Vue.use(GrowUI)
```

<br />

2 **添加CSS样式**

由于本库的css都是基于border-box盒模型，你也需要添加，否则会影响样式。


``` css
*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```