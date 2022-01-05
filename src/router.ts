import { createWebHashHistory, createRouter } from "vue-router";
import Home from "./views/home.vue";
import Doc from "./views/document.vue";
import SwitchDemo from "./components/SwitchDemo.vue";
import ButtonDemo from "./components/ButtonDemo.vue";
import DialogDemo from "./components/DialogDemo.vue";
import TabsDemo from "./components/Tabsdemo1.vue";
import { h } from "vue";
import Markdown from "./components/Markdown.vue"
import intro from './markdown/intro.md'
import start from './markdown/start.md'
import install from './markdown/install.md'

const history = createWebHashHistory();
const md = string => h(Markdown, { content: string, key: string })
export const router = createRouter({
    history: history,
    routes: [
        { path: "/", component: Home },
        {
            path: "/doc", component: Doc, children: [
                { path: "", redirect:"/doc/intro" },
                { path: 'intro', component: md(intro) },
                { path: 'install', component: md(install) },
                { path: 'start', component: md(start) },
                { path: "switch", component: SwitchDemo },
                { path: "button", component: ButtonDemo },
                { path: "dialog", component: DialogDemo },
                { path: "tabs", component: TabsDemo },
            ],
        },
    ],
});
