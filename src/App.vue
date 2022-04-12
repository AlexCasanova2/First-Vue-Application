<template>
<router-view />
    <HeaderComponent />
    <FirstSection />
    <AboutSection />
    <StepsSection />
    <ProductsSection />
    <FaqSection />
    <ContactSection />
    <FooterComponent />
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import FirstSection from "./components/FirstSection.vue";
import AboutSection from "./components/AboutSection.vue";
import StepsSection from "./components/StepsSection.vue";
import ProductsSection from "./components/ProductsSection.vue";
import FaqSection from "./components/FaqSection.vue";
import ContactSection from "./components/ContactSection.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    FirstSection,
    AboutSection,
    StepsSection,
    ProductsSection,
    FaqSection,
    ContactSection,
    FooterComponent
  },
};
</script>

<style>
/* Importamos la hoja de estilos css que tenemos dentro de src */
@import "./assets/css/styles.css";
</style>