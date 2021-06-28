<template>
  <div id="app">
    <div class="wrapper">
      <Nav @myEvent="activeElemHandler($event)" />

      <hr />
      <Pagination
        @nextPage="pageClick(nextURL)"
        @prevPage="pageClick(prevURL)"
        :pages="pages"
        :currentPage="currentPage"
        :nextURL="nextURL"
        :prevURL="prevURL"
        :nextDisabled="nextDisabled"
        :prevDisabled="prevDisabled"
      />
      <hr />

      <router-view class="items" :items="items"></router-view>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  data: () => {
    return {
      API: "https://rickandmortyapi.com/api/character",
      items: [],
      pages: 0,
      prevURL: "",
      nextURL: "",
      currentURL: "",
      currentPage: 0,
      prevDisabled: true,
      nextDisabled: false,
    };
  },
  created: function () {
    this.getData();
  },
  methods: {
    getData() {
      axios
        .get(this.API)
        .then((response) => {
          this.items = response.data.results;
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
    pageClick(way) {
      if (way !== null) {
        this.prevDisabled = false;
        this.nextDisabled = false;
        axios
          .get(way)
          .then((response) => {
            this.items = response.data.results;
            this.prevURL = response.data.info.prev;
            this.nextURL = response.data.info.next;
            this.currentURL = response.config.url;
          })
          .then(() => {
            if (this.currentURL.includes("=")) {
              //current page
              this.currentPage = this.currentURL.split("=");
              this.currentPage = this.currentPage[this.currentPage.length - 1];
              this.currentPage = parseInt(this.currentPage);
              //pagination buttons disabling
              if (this.currentPage === 1) {
                this.prevDisabled = true;
              }
              if (this.currentPage === this.pages) {
                this.nextDisabled = true;
              }
            }
          });
      }
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
  .items {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
</style>
