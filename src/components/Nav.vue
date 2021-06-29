<template>
  <nav class="nav">
    <ul class>
      <li>
        <router-link to="/character">Characters</router-link>
      </li>
      <li
        @click="
          $router.push('/location');
          handler()
        "
        :class="{ active: $route.path === '/location' }"
      >
        Locations
      </li>
      <li
        @click="
          $router.push('/episode');
          
        "
        :class="{ active: $route.path === '/episode' }"
      >
        Episodes
      </li>
    </ul>
  </nav>
</template>

<script>

export default {
  data() {
    return {}
  },
  methods: {
    handler() {
      this.$emit('myEvent')
    }
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
    & a {
      color: black;
      text-decoration: none;
    }
    .router-link-exact-active {
      color: $main-color;
      border-bottom: 1px solid $main-color;
    }
  }
}
</style>
>;
