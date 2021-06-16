<template>
  <nav class="nav">
    <ul class>
      <li @click="menuHandler($event)">Characters</li>
      <li @click="menuHandler($event)">Locations</li>
      <li @click="menuHandler($event)">Episodes</li>
    </ul>
  </nav>
</template>

<script>
import axios from "axios";

export default {
  name: "Header",
  data: function () {
    return {
      api: "https://rickandmortyapi.com/api",
      contents: [],
      href: "",
    };
  },
  created() {
    axios.get(this.api).then((results) => (this.contents = results.data));
  },
  methods: {
    menuHandler(event) {
      console.log(event.target.innerHTML.toLowerCase());
    },
  },
};
</script>

<style lang="scss" scoped>
.nav {
  display: block;
  width: 100%;
  background-color: honeydew;
  text-align: right;
  & li {
    display: inline-block;
    margin-left: 20px;
    cursor: pointer;
  }
}
</style>>
