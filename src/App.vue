<template>
  <div id="app">
    <div class="wrapper">
      <Nav @myEvent="activeElemHandler($event)" />
      <hr />
      <Characters
        @nextPage="pageClick(nextURL)"
        @prevPage="pageClick(prevURL)"
        class="chars"
        :characters="characters"
        :pages="pages"
        :currentPage="currentPage"
        :nextURL="nextURL"
        :prevURL="prevURL"
        :API="API"
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
      API: "https://rickandmortyapi.com/api/",
      activeElem: "character",
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
      axios.get(this.API + this.activeElem).then((response) => {
        this.characters = response.data.results;
      });
    },
    getData() {
      axios
        .get(this.API + this.activeElem)
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
    activeElemHandler(event) {
      event = event.toLowerCase().slice(0, -1);
      this.activeElem = event;
      this.getCharacters();
      this.getData();
    },
    pageClick(way) {
      axios
        .get(way)
        .then((response) => {
          this.characters = response.data.results;
          this.prevURL = response.data.info.prev;
          this.nextURL = response.data.info.next;
          this.currentURL = response.config.url;
        })
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
