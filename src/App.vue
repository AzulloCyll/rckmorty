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

      <Characters
        v-if="activeElem === 'character'"
        class="characters"
        :characters="characters"
      />

      <Locations
        v-if="activeElem === 'location'"
        class="locations"
        :locations="locations"
      />

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
      locations: [],
      episodes: [],
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
    this.getCharacters();
    this.getData();
  },
  methods: {
    getCharacters: function () {
      axios.get(this.API + this.activeElem).then((response) => {
        this.characters = response.data.results;
      });
    },
    getLocations: function () {
      axios.get(this.API + this.activeElem).then((response) => {
        this.locations = response.data.results;
      });
    },
    getEpisodes: function () {
      axios.get(this.API + this.activeElem).then((response) => {
        this.episodes = response.data.results;
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
      console.log(event);
      switch (event) {
        case "character":
          this.getCharacters();
          this.getData();
          break;
        case "location":
          this.getLocations();
          this.getData();
          break;
        case "episode":
          this.getEpisodes();
          this.getData();
          break;
      }
    },
    pageClick(way) {
      if (way !== null) {
        this.prevDisabled = false;
        this.nextDisabled = false;

        axios
          .get(way)
          .then((response) => {
            if (this.activeElem === "character") {
              this.characters = response.data.results;
            }
            if (this.activeElem === "location") {
              this.locations = response.data.results;
            }
            if (this.activeElem === "episode") {
              this.locations = response.data.results;
            }
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
  .characters {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
</style>
