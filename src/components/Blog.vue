<template>
  <section class="blog section container" id="blog">
    <h2 class="section__title-center">Blog</h2>
    <p class="product__description">
      This is the blog page where you can find all about us.
    </p>
    <div v-if="!articles">Loading...</div>
    <div class="product__container grid" v-if="articles && articles.length >= 1">
      <Articles :articles="articles" />
    </div>
    <div v-else-if="articles && articles.length < 1">Nothing to show</div>
    <div v-else>Loading...</div>
  </section>
</template>

<script>
import Articles from "../components/Articles.vue";
import axios from "axios";
import Global from "../Global";
export default {
  name: "BlogComponent",
  components: {
    Articles,
  },
  mounted() {
    this.getArticles();
  },
  data() {
    return {
      url: Global.url,
      articles: null,
    };
  },
  methods: {
    getArticles() {
      axios.get(Global.url + "articles").then((res) => {
        if (res.data.status == "success") {
          this.articles = res.data.articles;
          console.log(this.articles);
        }
      });
    },
  },
};
</script>