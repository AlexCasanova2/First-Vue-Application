<template>
  <div class="product__circle"></div>
  <img :src="product.image" alt="" class="product__img" />

  <h3 class="product__title">{{ product.name }}</h3>
  <!-- Variable classes -->
  <span
    class="product__price"
    :class="{
      lowprice: product.price <= 20,
      highprice: product.price > 20,
    }"
    >{{ product.price }}€</span
  >

  <button class="button--flex product__button" style="margin-right: 32px">
    <i class="ri-shopping-bag-line"></i>
  </button>
  sdsdsds
  <button class="button--flex favourite__button" value="Add to favourites"
    @click="AddFavourite(product)"
  >
    <i class="ri-heart-line"></i>
  </button>
</template>

<script>
export default {
  name: "ProductComponent",
  props: ["product"],
  methods: {
      AddFavourite(product){
          console.log(product.name);
          this.$emit('favourite', product);
      }
  },
  mounted() {
    console.log("Montado");
  },
};
</script>