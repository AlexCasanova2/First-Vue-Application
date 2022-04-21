<template>
  <section class="article section container" id="article">
    <div
      class="blog__image"
      :style="{ backgroundImage: `url(${url + 'get-image/' + article.image})` }"
      :alt="article.title"
      v-if="article.image"
    ></div>
    <div class="blog__image default__image" :alt="article.title" v-else></div>
    <span>{{ dateTime(article.date) }}</span>
    <h2 class="section__title-left">{{ article.title }}</h2>
    <p class="blog__content">
      {{ article.content }}
    </p>
    <router-link :to="'/edit/' + article._id" class="button button--flex"
      >Edit Article</router-link
    >
    <a @click="deleteArticle(article._id)" class="button button--flex"
      >Delete Article</a
    >
  </section>
</template>

<script>
import Global from "../Global";
import axios from "axios";
import moment from "moment";

export default {
  name: "ArticleComponent",
  data() {
    return {
      url: Global.url,
      article: [],
    };
  },
  mounted() {
    var articleId = this.$route.params.id;
    this.getArticle(articleId);
  },
  methods: {
    getArticle(articleId) {
      axios.get(this.url + "article/" + articleId).then((res) => {
        if (res.data.status === "success") {
          this.article = res.data.article;
          console.log(this.article.title);
        }
      });
    },
    dateTime(value) {
      return moment(value).startOf("seconds").fromNow();
    },
    deleteArticle(articleId) {
      axios.delete(this.url + "article/" + articleId).then((res) => {
        console.log(res);
        this.$router.push("/blog");
      });
    },
  },
};
</script>