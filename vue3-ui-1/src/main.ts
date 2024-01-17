import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'
import { createWebHashHistory, createRouter } from 'vue-router'
import home from './view/home.vue'
import doc from './view/doc.vue'

const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: home },
        { path: '/doc', component: doc }
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app') 