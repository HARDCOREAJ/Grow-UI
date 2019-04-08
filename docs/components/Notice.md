---
title: Notice
---
# 提示

提示组件

## toast

#### 直接使用

<ClientOnly>
<toast-demo-1></toast-demo-1>
</ClientOnly>

```html
<g-button @click="$toast('点击弹出提示',{autoClose:false})">上方弹出</g-button>
<g-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</g-button>
<g-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</g-button>
```

#### 修改关闭按钮内容

<ClientOnly>
<toast-demo-2></toast-demo-2>
</ClientOnly>

```html js
<g-button @click="onClickButton">上方弹出</g-button>
<script>
    methods: {
        onClickButton() {
            this.$toast('点击关闭可以执行回调函数', {
                closeButton: {
                    text: '关闭',
                    callback: () => {
                        window.alert('这个提示是回调函数触发的')
                    }
                }
            })
        }
    }
</script>
```

#### 支持HTML

<ClientOnly>
<toast-demo-3></toast-demo-3>
</ClientOnly>

```html
<g-button @click="onClickButton">上方弹出</g-button>
<script>
    methods: {
        onClickButton() {
            this.$toast('<strong style="color:pink;">加粗字体</strong>', {
                enableHtml: true
            })
        }
    }
</script>
```

#### Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ------- | ------ | ------ | :------: | :------: |
| autoClose | 是否自动关闭或关闭时间 | Boolean/Number | -- | 5 |
| closeButton | 关闭按钮的内容或触发内容 | Object | -- | '关闭' |
| enableHtml | 是否开启HTML | Boolean | -- | false |
| position | 弹出位置 | String | top/bottom/middle | top |


::: tip 实现
toast是一个比较特殊的组件，它由用户决定是否需要在页面上添加 Vue 实例。所以应该把它们添加到 Vue.prototype 上实现, 并且每次关闭的时候都需要卸载这个实例。这个插件的核心代码如下
:::

``` js
import Toast from './toast'

let ToastElement

export default {
  install(Vue, options) {
    Vue.prototype.$toast = function (message, toastOptions) {
     ToastElement = initToast({
        Vue,
        message,
        propsData:toastOptions,
        onClose:()=>{
          ToastElement=null
        }
      })
    }
  }
}


/* helper */
function initToast({ Vue, message, propsData, onClose }) {
  let Constructor = Vue.extend(Toast)
  let toast = new Constructor({propsData})
  toast.$on('close', onClose)
  toast.$slots.default = [message]
  toast.$mount()
  document.body.appendChild(toast.$el)
}

```