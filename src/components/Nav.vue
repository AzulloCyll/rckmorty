<template>
  <nav class="nav">
    <ul class>
      <li
        @click="menuHandler($event)"
        :class="{ active: activatedElem === 'Characters' }"
      >
        Characters
      </li>
      <li
        @click="menuHandler($event)"
        :class="{ active: activatedElem === 'Locations' }"
      >
        Locations
      </li>
      <li
        @click="menuHandler($event)"
        :class="{ active: activatedElem === 'Episodes' }"
      >
        Episodes
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data: function () {
    //default menu is characters
    return { activatedElem: "Characters" };
  },

  methods: {
    menuHandler(event) {
      this.activatedElem = event.target.innerHTML.replaceAll(" ", "");
      this.$emit("myEvent", this.activatedElem);
    },
  },
};
</script>

<style lang="scss" scoped>
$main-color: rgb(19, 207, 119);

body {
  margin: 0;
  padding: 0;
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
>;
