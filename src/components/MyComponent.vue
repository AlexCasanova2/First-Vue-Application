<template>
  <div id="my-component">
    <h3>This is my first component</h3>
    <h4>{{ subtitle }}</h4>
  </div>
</template>

<script>
export default {
  name: "MyComponent",
  data() {
    return {
      subtitle: "I'm the subtitle of the component",
    };
  },
};
</script>