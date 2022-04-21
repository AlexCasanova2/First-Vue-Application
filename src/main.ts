import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Vuelidate from "vuelidate";


const moment = require("moment");
require('moment/locale/es');
//Use router file exported in router/index.js
createApp(App).use(router,Vuelidate, require('vue-moment'), moment).mount("#app");