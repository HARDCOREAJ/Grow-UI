import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './buttonGroup'
import chai from 'chai'
import spy from 'chai-spies'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true,
    loading3: false,
  },
})

const expect = chai.expect
chai.use(spy)

//unit test
try {
  {

    var sampleButton = Vue.extend(Button)
    const vm = new sampleButton({
      propsData: {
        icon: 'settings'
      }
    })
    vm.$mount() //让Button组件变成实例然后挂载在Vue中

    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.equal('#i-settings')
    vm.$el.remove()
    vm.$destroy()
  }

  {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'settings',
        loading: true
      }
    })
    vm.$mount() //让Button组件变成实例然后挂载在Vue中

    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-loading')
    vm.$el.remove()
    vm.$destroy()
  }



  {
    let div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'settings'
      }
    })
    vm.$mount(div) ////让Button组件变成实例然后挂载在Vue中,需要有div渲染进去才能看到样式表

    let svg = vm.$el.querySelector('svg')
    let { order } = window.getComputedStyle(svg)
    expect(order).to.eq('1')
    vm.$el.remove()
    vm.$destroy()
  }

  {
    let div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'settings',
        iconPosition: 'right'
      }
    })
    vm.$mount(div) ////让Button组件变成实例然后挂载在Vue中,需要有div渲染进去才能看到样式表

    let svg = vm.$el.querySelector('svg')
    let { order } = window.getComputedStyle(svg)
    expect(order).to.eq('2')
    vm.$el.remove()
    vm.$destroy()
  }

  {
    var sampleButton = Vue.extend(Button)
    const vm = new sampleButton({
      propsData: {
        icon: 'settings'
      }
    })
    vm.$mount() //让Button组件变成实例然后挂载在Vue中

    let spy = chai.spy(function () { })
    vm.$on('click', spy)
    let button = vm.$el
    button.click()
    expect(spy).to.have.been.called()
  }
} catch (error) {
  window.errors = [error]
} finally {
  window.errors.forEach((error) => {
    console.error(error.message)
  })
}