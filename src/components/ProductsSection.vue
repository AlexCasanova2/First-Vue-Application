<template>
  <section class="product section container" id="products">
    <h2 class="section__title-center">
      Check out our <br /> products
    </h2>

    <p class="product__description">
      Here are some selected plants from our showroom, all are in excellent
      shape and has a long life span. Buy and enjoy best quality.
    </p>

    <div class="product__container grid">
      <article class="product__card">
        <div class="product__circle"></div>

        <img src="../assets/images/product1.png" alt="" class="product__img" />

        <h3 class="product__title">Cacti Plant</h3>
        <span class="product__price">$19.99</span>

        <button class="button--flex product__button">
          <i class="ri-shopping-bag-line"></i>
        </button>
      </article>

      <article class="product__card">
        <div class="product__circle"></div>

        <img src="../assets/images/product2.png" alt="" class="product__img" />

        <h3 class="product__title">Cactus Plant</h3>
        <span class="product__price">$11.99</span>

        <button class="button--flex product__button">
          <i class="ri-shopping-bag-line"></i>
        </button>
      </article>

      <article class="product__card">
        <div class="product__circle"></div>

        <img src="../assets/images/product3.png" alt="" class="product__img" />

        <h3 class="product__title">Aloe Vera Plant</h3>
        <span class="product__price">$7.99</span>

        <button class="button--flex product__button">
          <i class="ri-shopping-bag-line"></i>
        </button>
      </article>

      <article class="product__card">
        <div class="product__circle"></div>

        <img src="../assets/images/product4.png" alt="" class="product__img" />

        <h3 class="product__title">Succulent Plant</h3>
        <span class="product__price">$5.99</span>

        <button class="button--flex product__button">
          <i class="ri-shopping-bag-line"></i>
        </button>
      </article>

      <article class="product__card">
        <div class="product__circle"></div>

        <img src="../assets/images/product5.png" alt="" class="product__img" />

        <h3 class="product__title">Succulent Plant</h3>
        <span class="product__price">$10.99</span>

        <button class="button--flex product__button">
          <i class="ri-shopping-bag-line"></i>
        </button>
      </article>

      <article class="product__card">
        <div class="product__circle"></div>

        <img src="../assets/images/product6.png" alt="" class="product__img" />

        <h3 class="product__title">Green Plant</h3>
        <span class="product__price">$8.99</span>

        <button class="button--flex product__button">
          <i class="ri-shopping-bag-line"></i>
        </button>
      </article>
    </div>
  </section>
</template>
<script>
export default {
  name: "ProductsSection",
};
</script>