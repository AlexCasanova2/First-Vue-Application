<template>
  <HeaderComponent />
  <!-- This is what prints the url request from url -->
  <router-view />
  <FooterComponent />
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<style>
/* Importamos la hoja de estilos css que tenemos dentro de src */
@import "./assets/css/styles.css";
</style>