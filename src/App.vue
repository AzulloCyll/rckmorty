<template>
  <div id="app">
    <div class="wrapper">
      <nav class="nav">
        <ul class>
          <li
            @click="
              $router.push('/character').catch((err) => {}); //łapie błąd, żeby się nie pokazywał :D
              menuHandler();
            "
            :class="{ active: $route.path === '/character' }"
          >
            Characters
          </li>
          <li
            @click="
              $router.push('/location').catch((err) => {});
              menuHandler();
            "
            :class="{ active: $route.path === '/location' }"
          >
            Locations
          </li>
          <li
            @click="
              $router.push('/episode').catch((err) => {});
              menuHandler();
            "
            :class="{ active: $route.path === '/episode' }"
          >
            Episodes
          </li>
        </ul>
      </nav>

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
        :API="API"
      />
      <hr />

      <router-view v-if="loading" class="items" :items="items"></router-view>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  data: () => {
    return {
      APIRoot: "https://rickandmortyapi.com/api",
      API: "https://rickandmortyapi.com/api/character", //default
      items: [],
      pages: 0,
      prevURL: "",
      nextURL: "",
      currentURL: "",
      currentPage: 0,
      prevDisabled: true,
      nextDisabled: false,
      loading: false,
    };
  },
  created: function () {
    this.getData();
  },

  methods: {
    menuHandler() {
      if (window.location.pathname === this.$route.path) {
        this.API = this.APIRoot;
        this.API += this.$route.path;
        this.getData();
      }
    },
    getData() {
      this.loading = false;
      axios
        .get(this.API)
        .then((response) => {
          this.items = response.data.results;
          this.pages = response.data.info.pages;
          this.prevURL = response.data.info.prev;
          this.nextURL = response.data.info.next;
          this.currentURL = response.config.url;
          this.loading = true;
        })
        //do currentPage
        .then(() => {
          if (this.currentURL.includes(" =")) {
            this.currentPage = this.currentURL.split("=");
            this.currentPage = this.currentPage[this.currentPage.length - 1];
            this.currentPage = parseInt(this.currentPage);
          } else this.currentPage = 1;
        });
    },
    pageClick(way) {
      this.loading = false;
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
            this.loading = true;
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
$main-color: rgb(19, 207, 119);

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

.nav {
  font-weight: bold;
  display: block;
  width: 100%;
  padding-top: 5px;
  text-align: right;
  & li {
    display: inline-block;
    margin-left: 50px;
    cursor: pointer;
    &.active {
      color: $main-color;
      border-bottom: 1px solid $main-color;
    }
  }
}
</style>
