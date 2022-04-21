<template>
  <article class="product__card" v-for="article in articles" :key="article._id">
    <img
      :src="url + 'get-image/' + article.image"
      :alt="article.title"
      class="product__img"
      v-if="article.image"
    />
    <img
      src="../assets/images/product3.png"
      :alt="article.title"
      class="product__img"
      v-if="!article.image"
    />

    <router-link :to="{name: 'article', params: {id: article._id}}"><h3 class="product__title">{{ article.title }}</h3></router-link>
    <span class="entry__date">{{ dateTime(article.date) }}</span>
    <span class="entry__short-description">{{ article.content }}</span>
  </article>
</template>
<script>
import Global from "../Global";
import moment from "moment";

export default {
  name: "ArticlesComponent",
  props: ["articles"],
  methods: {
    dateTime(value) {
      return moment(value).startOf("seconds").fromNow();
    },
  },
  data() {
    return {
      url: Global.url,
    };
  },
};
</script>