<template>
  <div class="char">
    {{ character.name }}<br />
    {{ character.species }}<br />
    {{ character.gender }}<br />
    <!-- {{ character.episode }}<br /> -->
    <!-- {{ character.image }}<br /> -->
    {{ character.location }}<br />
    {{ character.type }}<br />
    {{ character.status }}<br />
    <br />
  </div>
</template>

<script>
export default {
  props: {
    character: { type: Object },
  },

  data: function () {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.char {
  background-color: lightgrey;
  margin-bottom: 20px;
  padding: 8%;
}
</style>