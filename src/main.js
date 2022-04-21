"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = require("vue");
const App_vue_1 = __importDefault(require("./App.vue"));
const router_1 = __importDefault(require("./router"));
const vuelidate_1 = __importDefault(require("vuelidate"));
const moment = require("moment");
require('moment/locale/es');
(0, vue_1.createApp)(App_vue_1.default).use(router_1.default, vuelidate_1.default, require('vue-moment'), moment).mount("#app");
