"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vue_router_1 = require("vue-router");
const ContactSection_vue_1 = __importDefault(require("../components/ContactSection.vue"));
const StepsSection_vue_1 = __importDefault(require("../components/StepsSection.vue"));
const HomeComponent_vue_1 = __importDefault(require("../components/HomeComponent.vue"));
const ProductsSection_vue_1 = __importDefault(require("../components/ProductsSection.vue"));
const FaqSection_vue_1 = __importDefault(require("../components/FaqSection.vue"));
const AboutSection_vue_1 = __importDefault(require("../components/AboutSection.vue"));
const Blog_vue_1 = __importDefault(require("../components/Blog.vue"));
const Search_vue_1 = __importDefault(require("../components/Search.vue"));
const PageComponent_vue_1 = __importDefault(require("../components/PageComponent.vue"));
const ErrorComponent_vue_1 = __importDefault(require("../components/ErrorComponent.vue"));
const TestComponent_vue_1 = __importDefault(require("../components/TestComponent.vue"));
const Redirect_vue_1 = __importDefault(require("../components/Redirect.vue"));
const Article_vue_1 = __importDefault(require("../components/Article.vue"));
const CreateArticle_vue_1 = __importDefault(require("../components/CreateArticle.vue"));
const EditArticle_vue_1 = __importDefault(require("../components/EditArticle.vue"));
const routes = [
    { path: "/", component: HomeComponent_vue_1.default },
    { path: "/contact", component: ContactSection_vue_1.default },
    { path: "/steps", component: StepsSection_vue_1.default },
    { path: "/products", component: ProductsSection_vue_1.default },
    { path: "/faqs", component: FaqSection_vue_1.default },
    { path: "/about", component: AboutSection_vue_1.default },
    { path: "/blog", component: Blog_vue_1.default },
    { path: "/article/:id", name: 'article', component: Article_vue_1.default },
    { path: "/create-article", name: 'create', component: CreateArticle_vue_1.default },
    { path: "/edit/:id", name: 'edit', component: EditArticle_vue_1.default },
    { path: "/search/:searchString", component: Search_vue_1.default },
    { path: "/redirect/:searchString", component: Redirect_vue_1.default },
    { path: "/page/:id?", name: 'page', component: PageComponent_vue_1.default },
    { path: "/404", component: ErrorComponent_vue_1.default },
    { path: "/:pathMatch(.*)*", redirect: '/404' },
    { path: "/test", name: 'test', component: TestComponent_vue_1.default },
];
const router = (0, vue_router_1.createRouter)({
    history: (0, vue_router_1.createWebHistory)(process.env.BASE_URL),
    routes,
});
exports.default = router;
