<!-- The Home Component is called in the url: '/' and inside have all the components that requires to make the page -->
<template>
  <FirstSection />
  <AboutSection />
  <StepsSection />
  <ProductsSection />
  <LastArticles />
  <FaqSection />
  <ContactSection />
</template>

<script>
import FirstSection from "../components/FirstSection.vue";
import AboutSection from "../components/AboutSection.vue";
import ContactSection from "../components/ContactSection.vue";
import StepsSection from "../components/StepsSection.vue";
import ProductsSection from "../components/ProductsSection.vue";
import FaqSection from "../components/FaqSection.vue";
import LastArticles from "../components/LastArticles.vue";

export default {
  name: "HomeComponent",
  components: {
    FirstSection,
    AboutSection,
    StepsSection,
    ProductsSection,
    FaqSection,
    ContactSection,
    LastArticles
  },
};
</script>