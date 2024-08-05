import { createApp } from 'vue'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css' // Import AOS styles

const app = createApp(App)

// Initialize AOS
app.config.globalProperties.$aos = AOS.init() // Optionally assign AOS to global properties

app.mount('#app')

// Alternatively, initialize AOS directly (no need for global properties)
AOS.init({

  duration: 1000, // Animation duration in ms
  duration: 2000, // Animation duration in ms
  easing: 'ease-in-out', // Animation easing function
//   once: true // Whether animation should happen only once
})
