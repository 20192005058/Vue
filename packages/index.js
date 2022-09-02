
import ltButton from './button'
import ltDialog from './dialog'
import ltInput from './input'
import ltCheckbox from './checkbox'
import ltRadio from './radio'
import ltRadiogroup from './radiogroup'
import ltSwitch from './switch'
import ltCheckboxgroup from './checkboxgroup'
import ltForm from './form'
import ltFormitem from './formitem'
import './fonts/iconfont.css'
 
const components = [
    ltButton,
    ltDialog,
    ltInput,
    ltCheckbox,
    ltRadio,
    ltRadiogroup,
    ltSwitch,
    ltCheckboxgroup,
    ltForm,
    ltFormitem
]

const install = function (Vue) {

  
  components.forEach(component => {
    Vue.component(component.name, component)
    
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}