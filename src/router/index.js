//Import the necessary to make routes work
import { createRouter, createWebHistory } from "vue-router";

//Import the components we want to use
import Contact from "../components/ContactSection.vue";
import Steps from "../components/StepsSection.vue";
import HomeComponent from "../components/HomeComponent.vue";
import ProductsSection from "../components/ProductsSection.vue";
import FaqSection from "../components/FaqSection.vue";
import AboutSection from "../components/AboutSection.vue";
import PageComponent from "../components/PageComponent.vue";
import ErrorComponent from "../components/ErrorComponent.vue";

//Define all routes in the app
const routes = [
  { path: "/", component: HomeComponent },
  { path: "/contact", component: Contact },
  { path: "/steps", component: Steps },
  { path: "/products", component: ProductsSection },
  { path: "/faqs", component: FaqSection },
  { path: "/about", component: AboutSection },
  { path: "/page/:id?", name: 'page', component: PageComponent },
  { path: "/404", component: ErrorComponent },
  { path: "/:pathMatch(.*)*", redirect: '/404' },
];

//Creating the router const with the routes values
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

//We need to export this file
export default router;