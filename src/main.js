import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Vuelidate from "vuelidate";

//Use router file exported in router/index.js
createApp(App).use(router,Vuelidate).mount("#app");