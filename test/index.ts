import { createApp } from 'vue';
import TestApp from './TestApp.vue';
import LWM from 'vue-late-window-manager';
import '../src/styles/default.scss';

const app = createApp(TestApp).use(LWM);
app.mount('#app');

// @ts-ignore
window.$lwm = app.config.globalProperties.$lwm;
