<template>
  <section class="section container">
    <h2 class="section__title-center">Check out our products</h2>
    <div v-if="productData">
      {{ productData }}
    </div>
    <div class="favourites" v-if="favourite" >
      <h3>{{ favourite.name }}</h3>
    </div>
    <Slider title="Test Page" subtitle="Subtitle test page" showBtn="true" />
    <div class="product__container grid">
      <article class="product__card" v-for="product in products" :key="product">
        <Product :product="product" @favourite="AddedFavourite" />
      </article>
    </div>
  </section>
</template>

<script>
//We need to import the product component
import Product from "../components/Product.vue";
import Slider from "../components/Slider.vue";

export default {
  name: "TestComponent",
  components: {
    Product,
    Slider,
  },
  methods: {
    AddedFavourite(favourite) {
      this.favourite = favourite;
    },
  },
  filters: {
      mayus(value){
          return value.toUpperCase();
      }
  },
  computed: {
    productData() {
      return this.name + ' ' + this.price;
    },
  },
  data() {
    return {
      favourite: null,
      name: 'Name',
      price: 13,
      products: [
        {
          name: "Plant name",
          color: "Green",
          price: 22,
          type: "Plant type",
          image: "/../img/product1.d18ad76c.png",
        },
        {
          name: "Plant name 2",
          color: "Red",
          price: 14,
          type: "Plant type",
          image: "/../img/product5.7a7f2e80.png",
        },
        {
          name: "Plant name 3",
          color: "Red",
          price: 18,
          type: "Plant type",
          image: "/../img/product6.c25f6726.png",
        },
      ],
    };
  },
};
</script>