<template>
  <div id="app">
    <Nav />
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";

export default {
  name: "App",
  components: {
    Nav,
  },
};
</script>

<style>
body,
* {
  margin: 0;
  padding: 0;
}
</style>
