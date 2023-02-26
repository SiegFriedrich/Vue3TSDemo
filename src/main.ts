import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { errorHandler } from './util/error-handler.util';

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
const app = createApp(App);
app.use(router).use(ElementPlus).use(pinia);

//Global Error Handler
app.config.errorHandler = errorHandler;

window.addEventListener('error',(event)=>{
    errorHandler(event.error);
});

window.addEventListener('unhandledrejection',(event)=>{
    errorHandler(event.reason);
})

app.mount("#app");