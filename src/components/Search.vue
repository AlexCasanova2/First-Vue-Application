<template>
  <section class="search section container" id="search">
    <h2 class="section__title-center">Search results</h2>
    <p style="text-align:center">Results from: <i>{{searchString}}</i></p>
    <div v-if="!articles">Nothing to show</div>
    <div
      class="product__container grid"
      v-if="articles && articles.length >= 1"
    >
      <Articles :articles="articles" />
    </div>
    <div v-else-if="articles && articles.length < 1">Nothing to show</div>
    
  </section>
</template>

<script>
import Articles from "../components/Articles.vue";
import axios from "axios";
import Global from "../Global";

export default {
  name: "SearchComponent",
  components: {
    Articles,
  },
  mounted() {
    this.searchString = this.$route.params.searchString;
    this.getArticlesBySearch(this.searchString);
  },
  data() {
    return {
      url: Global.url,
      articles: null,
      searchString: null
    };
  },
  methods: {
    getArticlesBySearch(searchString) {
      axios.get(Global.url + "search/" + searchString).then((res) => {
        if (res.data.status == "success") {
          this.articles = res.data.articles;
          console.log(this.articles);
        }
      });
    },
  },
};
</script>