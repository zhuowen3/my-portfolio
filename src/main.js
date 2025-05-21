import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
createApp(App).mount('#app')
// 1. import the library core and the Vue component
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// 2. import whichever icons you need
import { faUser, faFolderOpen, faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons'

// 3. add them to the library
library.add(faUser, faFolderOpen, faBriefcase, faEnvelope)

// 4. create + mount app, registering the FA component globally
const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')