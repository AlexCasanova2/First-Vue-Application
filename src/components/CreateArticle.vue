<template src="./CreateArticle.html">
</template>

<script>
import axios from "axios";
import Global from "../Global";
import { required, minLength } from "vuelidate/lib/validators";
import Article from "../models/Article";

export default {
  name: "CreateArticleComponent",
  data() {
    return {
      file: "",
      url: Global.url,
      article: new Article("", "", null, ""),
      submitted: null,
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
    console.log(this.article.title);
  },
  methods: {
    fileChange() {
      this.file = this.$refs.file.files[0];
      console.log(this.file);
    },
    createArticle() {
      console.log("submit");
      axios
        .post(this.url + "/save", this.article)
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
              this.article = res.data.article;
              this.$router.push("/blog");
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