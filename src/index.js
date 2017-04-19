import TrixVue from './TrixVue.vue'

const TrixVueEditor = {
  TrixVue,
  install: function(Vue) {
    Vue.component(TrixVue.name, TrixVue)
  }
}

export default TrixVueEditor
export { TrixVue }
