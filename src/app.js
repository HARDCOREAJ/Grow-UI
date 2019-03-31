import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './buttonGroup'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Sider from './sider'
import Content from './content'
import Footer from './footer'
import Ul from './ul'
import Li from './li'
import Toast from './toast'
import plugIn from './plugIn'
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsBody from './tabs-body'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'
import Popover from './popover'
import Collapse from './collapse'
import CollapseItem from './collapse-item'




Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-layout', Layout)
Vue.component('g-header', Header)
Vue.component('g-content', Content)
Vue.component('g-footer', Footer)
Vue.component('g-sider', Sider)
Vue.component('g-ul', Ul)
Vue.component('g-li', Li)
Vue.component('g-toast', Toast)
Vue.use(plugIn)
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-pane', TabsPane)
Vue.component('g-popover',Popover)
Vue.component('g-collapse', Collapse)
Vue.component('g-collapse-item', CollapseItem)


import createElement from 'vue'
const h = createElement

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true,
    loading3: false,
    message: 'hi',
    selectedTab: ['1','2']
  },
  created() {

  },
  methods: {
    inputChange(e) {
      console.log(e)
    },
    showToast(){
      this.$toast('你的智商需要充值！', {
        position: 'top',
        enableHtml: false,
        closeButton: {
          text: '已充值',
          callback(vm) {
            vm.log('他说已经充值智商了')
          }
        },
        autoClose: 3,
      })
    },
    bindSlected(){
      
    }
  }
})