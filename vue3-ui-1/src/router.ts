import { createWebHashHistory, createRouter } from 'vue-router'
import home from './view/home.vue'
import doc from './view/doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'

const history = createWebHashHistory()
export const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: home },
        { path: '/doc', component: doc, children:[
            {path: 'switch', component: SwitchDemo}
        ] }
    ]
})

router.afterEach(() => {
    console.log("路由切换了");
  });