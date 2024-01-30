import { createWebHashHistory, createRouter } from 'vue-router'
import home from './view/home.vue'
import doc from './view/doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from "./components/ButtonDemo.vue";
import DialogDemo from "./components/DialogDemo.vue";
import TabsDemo from "./components/TabsDemo.vue";
import DocDemo from "./components/DocDemo.vue";
import Intro from './view/Intro.vue';
import GetStarted from './view/GetStarted.vue'
import Install from './view/Install.vue'

const history = createWebHashHistory()
export const router = createRouter({
    history: history,
    routes: [
        { path: "/", component: home },
        {
            path: "/doc",
            component: doc,
            children: [
                { path: "", component: DocDemo },
                { path: "intro", component: Intro },
                { path: "get-started", component: GetStarted },
                { path: "install", component: Install },
                { path: "switch", component: SwitchDemo },
                { path: "button", component: ButtonDemo },
                { path: "dialog", component: DialogDemo },
                { path: "tabs", component: TabsDemo },
            ],
        },

    ]
})

router.afterEach(() => {
    console.log("路由切换了");
});