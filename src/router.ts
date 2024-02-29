import { createWebHashHistory, createRouter } from 'vue-router'
import home from './view/home.vue'
import doc from './view/doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from "./components/ButtonDemo.vue";
import DialogDemo from "./components/DialogDemo.vue";
import TabsDemo from "./components/TabsDemo.vue";
import DocDemo from "./components/DocDemo.vue";
import { h } from 'vue';
import Markdown from './components/markdown.vue';
import intro from './markdown/Intro.md';
import getStarted from './markdown/get-started.md';
import install from './markdown/install.md';

const history = createWebHashHistory()
const md = string => h(Markdown, { content: string, key: string })
export const router = createRouter({
    history: history,
    routes: [
        { path: "/", component: home },
        {
            path: "/doc",
            component: doc,
            children: [
                { path: "", redirect: '/doc/intro' },
                { path: "intro", component: md(intro) },
                { path: "get-started", component: md(getStarted) },
                { path: "install", component: md(install) },
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