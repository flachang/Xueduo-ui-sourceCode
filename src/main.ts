import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/home.vue'
import Doc from './views/document.vue'

const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes: [
        { path: "/", component: Home },
        {path: "/doc", component: Doc}
        
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
