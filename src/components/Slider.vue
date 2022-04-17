<template>
  <div class="slider__component" :class="{
      'slider-button': showBtn,
      'slider-nobutton': !showBtn
      }">
      <h2 class="slider__title">{{title}}</h2>
      <p class="slider__subtitle">{{subtitle}}</p>
      <!-- Only show the button if we receive the showBtn prop from parent -->
      <router-link to="/contact" class="nav__link" v-if="showBtn">Contact Us</router-link>
  </div>
</template>

<script>
export default {
  name: "SliderComponent",
  props: ['title', 'subtitle', 'showBtn']
};
</script>