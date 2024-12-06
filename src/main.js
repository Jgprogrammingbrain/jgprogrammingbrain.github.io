import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'  // Tailwind CSS import

// Create the Vue application
const app = createApp(App)

// Use router
app.use(router)

// Global error handler
app.config.errorHandler = (err, vm, info) => {
  // Log errors to console
  console.error('Error:', err)
  console.error('Component:', vm)
  console.error('Info:', info)
}

// Optional: Add global properties or methods
app.config.globalProperties.$formatDate = (date) => {
  return new Date(date).toLocaleDateString()
}

// Mount the application
app.mount('#app')
