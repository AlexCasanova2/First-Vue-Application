<template>
  <header class="header" id="header">
    <nav class="nav container">
      <router-link to="/" class="nav__logo">
        <i class="ri-leaf-line nav__logo-icon"></i> Plantex
      </router-link>

      <div class="nav__menu" id="nav-menu">
        <ul class="nav__list">
          <li class="nav__item">
            <router-link to="/" class="nav__link" active-class="active-link"
              >Home</router-link
            >
          </li>
          <li class="nav__item">
            <router-link
              to="/about"
              class="nav__link"
              active-class="active-link"
              >About</router-link
            >
          </li>
          <li class="nav__item">
            <router-link
              to="/products"
              class="nav__link"
              active-class="active-link"
              >Products</router-link
            >
          </li>
          <li class="nav__item">
            <router-link to="/faqs" class="nav__link" active-class="active-link"
              >FAQs</router-link
            >
          </li>
          <li class="nav__item">
            <router-link
              to="/contact"
              class="nav__link"
              active-class="active-link"
              >Contact</router-link
            >
          </li>
          <li class="nav__item">
            <router-link
              :to="{ name: 'page', params: { id: 'input' } }"
              class="nav__link"
              active-class="active-link"
              >New</router-link
            >
          </li>
        </ul>

        <div class="nav__close" id="nav-close">
          <i class="ri-close-line"></i>
        </div>
      </div>

      <div class="nav__btns">
        <!-- Theme change button -->
        <i class="ri-moon-line change-theme" id="theme-button"></i>

        <div class="nav__toggle" id="nav-toggle">
          <i class="ri-menu-line"></i>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>