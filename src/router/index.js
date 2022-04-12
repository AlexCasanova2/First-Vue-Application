import { createRouter, createWebHistory } from "vue-router";
import Contact from "../components/ContactSection.vue";
import Steps from "../components/StepsSection.vue";

const routes = [
  {
      path: "/contact",
      component: Contact
  },
  {
      path: "/step",
      component: Steps
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;