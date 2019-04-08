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
