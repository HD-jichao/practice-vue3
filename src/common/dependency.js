/* 依赖项
*
* */
import { createApp } from 'vue';
import App from '@/views/Login/login.vue';
import router from '@/router';//路由
import store from '@/store';//vuex
// import VueI18n from 'vue-i18n';//国际化

// createApp(App).use(store).use(router).mount('#app')/

import ElementPlus from 'element-plus' //element
import 'element-plus/dist/index.css'
window.$outils = require('outils');

const app = createApp(App)

app.use(router)
    .use(store)
    // .use(VueI18n)
    .use(ElementPlus)

app.mount('#app')
