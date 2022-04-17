<template>
  <section class="section container">
    <h2 class="section__title-center">
      This is a page with optional parameter
    </h2>
    <p class="">{{ id }}</p>
    <hr />
    <button @click="updateValue()">Update value</button>
    <h4>{{ value }}</h4>
    <input type="text" v-model="name" /><br />
    {{ name }}
    <hr />
    <h2>Directivas condicionales</h2>
    <input type="number" v-model="age" /><br />
    <!-- {{age}} -->
    <p v-if="age && age >= 18">Older</p>
    <hr />
    <ol>
      <li v-for="movie in movies" :key="movie">{{ movie }}</li>
    </ol>
  </section>
</template>

<script>
export default {
  name: "PageComponent",
  //This method is loaded when the component is created
  created() {
    console.log("Component created");
  },
  //This method is loaded when the component is mounted
  mounted() {
    this.id = this.$route.params.id;
    console.log("Component mounted");
  },
  //This method is loaded when the component is updated
  updated() {
    console.log("Component updated");
  },
  //This method is loaded when the component is deleted
  unmounted() {
    console.log("Component deleted");
  },
  //To define the properties
  data() {
    return {
      id: null,
      value: "Default Value",
      name: "",
      age: 26,
      movies: ["Movie 1", "Movie 2", "Movie 3"],
    };
  },
  //The methods we want to create
  methods: {
    updateValue() {
      this.value = "New value from update";
      console.log(this.value);
    },
  },
};
</script>