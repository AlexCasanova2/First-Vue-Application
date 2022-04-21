<template src="./CreateArticle.html">
</template>

<script>
import axios from "axios";
import Global from "../Global";
import { required, minLength } from "vuelidate/lib/validators";
import Article from "../models/Article";

export default {
  name: "EditArticleComponent",
  data() {
    return {
      file: "",
      url: Global.url,
      article: new Article("", "", null, ""),
      submitted: null,
      isEdit: true
    };
  },
  validations: {
    title: {
      required,
      minLength: minLength(4),
    },
    content: {
      required,
    },
  },
  mounted() {
    //console.log(this.article.title);
    var articleId = this.$route.params.id;
    this.getArticle(articleId);
  },
  methods: {
    fileChange() {
      this.file = this.$refs.file.files[0];
      console.log(this.file);
    },
    getArticle(articleId) {
      axios.get(this.url + "article/" + articleId).then((res) => {
        if (res.data.status === "success") {
          this.article = res.data.article;
          console.log(this.article.title);
        }
      });
    },
    createArticle() {
      console.log("submit");
      var articleId = this.$route.params.id;
      axios
        .put(this.url + "article/"+ articleId, this.article)
        .then((res) => {
          if (res.data.status === "success") {
            //Uploading the post image
            if (
              this.file != null &&
              this.file != undefined &&
              this.file != ""
            ) {
              const formData = new FormData();
              formData.append("file0", this.file, this.file.name);
              var articleId = res.data.article._id;
              axios
                .post(this.url + "upload-image/" + articleId, formData)
                .then((res) => {
                  if (res.data.article) {
                      console.log('hola');
                    this.article = res.data.article;
                    this.$router.push("/blog");
                  } else {
                    console.log("error");
                  }
                })
                .catch((err) => {
                  console.log(err);
                });
            } else {
                console.log('holaaaaa');
              this.article = res.data.article;
              this.$router.push("/article/"+articleId);
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>