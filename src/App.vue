<template>
  <div id="app">
    <div class="wrapper">
      <Nav />
      <hr />
      <Characters
        class="chars"
        :characters="characters"
        :pages="pages"
        :currentPage="currentPage"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  data: () => {
    return {
      characters: [],
      pages: 0,
      prevURL: "",
      nextURL: "",
      currentURL: "",
      currentPage: 0,
    };
  },
  created: function () {
    this.getCharacters();
    this.getData();
  },
  methods: {
    getCharacters: function () {
      axios
        .get("https://rickandmortyapi.com/api/character?page=30")
        .then((response) => {
          this.characters = response.data.results;
        });
    },
    getData() {
      axios
        .get("https://rickandmortyapi.com/api/character?page=30")
        .then((response) => {
          this.pages = response.data.info.pages;
          this.prevURL = response.data.info.prev;
          this.nextURL = response.data.info.next;
          this.currentURL = response.config.url;
        })
        //do currentPage
        .then(() => {
          if (this.currentURL.includes("=")) {
            this.currentPage = this.currentURL.split("=");
            this.currentPage = this.currentPage[this.currentPage.length - 1];
            this.currentPage = parseInt(this.currentPage);
          } else this.currentPage = 1;
        });
    },
  },
};
</script>

<style lang="scss">
body {
  margin: 0px;
  padding: 0;
}

.wrapper {
  font-family: "Open sans", sans-serif;
  margin: 0 auto;
  max-width: 1280px;
  .chars {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
</style>
