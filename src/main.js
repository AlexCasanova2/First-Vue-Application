import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

//Use router file exported in router/index.js
createApp(App).use(router).mount("#app");