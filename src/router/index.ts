//Import the necessary to make routes work
import { createRouter, createWebHistory } from "vue-router";

//Import the components we want to use
import Contact from "../components/ContactSection.vue";
import Steps from "../components/StepsSection.vue";
import HomeComponent from "../components/HomeComponent.vue";
import ProductsSection from "../components/ProductsSection.vue";
import FaqSection from "../components/FaqSection.vue";
import AboutSection from "../components/AboutSection.vue";
import BlogSection from "../components/Blog.vue";
import SearchSection from "../components/Search.vue";
import PageComponent from "../components/PageComponent.vue";
import ErrorComponent from "../components/ErrorComponent.vue";
import TestComponent from "../components/TestComponent.vue";
import RedirectComponent from "../components/Redirect.vue";
import ArticleComponent from "../components/Article.vue";
import CreateArticle from "../components/CreateArticle.vue";
import EditArticle from "../components/EditArticle.vue";

//Define all routes in the app
const routes = [
  { path: "/", component: HomeComponent },
  { path: "/contact", component: Contact },
  { path: "/steps", component: Steps },
  { path: "/products", component: ProductsSection },
  { path: "/faqs", component: FaqSection },
  { path: "/about", component: AboutSection },
  { path: "/blog", component: BlogSection },
  { path: "/article/:id", name: 'article', component: ArticleComponent },
  { path: "/create-article", name: 'create', component: CreateArticle },
  { path: "/edit/:id", name: 'edit', component: EditArticle },
  { path: "/search/:searchString", component: SearchSection },
  { path: "/redirect/:searchString", component: RedirectComponent },
  { path: "/page/:id?", name: 'page', component: PageComponent },
  { path: "/404", component: ErrorComponent },
  { path: "/:pathMatch(.*)*", redirect: '/404' },
  { path: "/test", name: 'test', component: TestComponent },
];

//Creating the router const with the routes values
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

//We need to export this file
export default router;