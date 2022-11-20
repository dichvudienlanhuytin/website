// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import { BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue'
import Vuex from 'vuex'
import store from '~/store'
import './assets/styles/main.scss'
import './assets/styles/site.css'

export default function (Vue, { router, head, isClient, appOptions }) {
  Vue.use(Vuex)
  appOptions.store = store
  Vue.use(BootstrapVue)
  Vue.use(BootstrapVueIcons)
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
