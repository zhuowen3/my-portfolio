import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'

// Font Awesome Setup
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser, faFolderOpen, faBriefcase, faEnvelope, faVolumeLow, faVolumeXmark, faVolumeHigh, faBug } from '@fortawesome/free-solid-svg-icons'

// Add icons to the library
library.add(faUser, faFolderOpen, faBriefcase, faEnvelope, faVolumeLow, faVolumeXmark, faVolumeHigh, faBug)

// Create and mount the app **once**
const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
