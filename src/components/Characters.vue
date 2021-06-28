<template>
  <div>
    <div class="character_wrapper" v-for="item in characters" :key="item.id">
      <Character :character="item" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    characters: {},
  },
};
</script>

<style lang="scss" scoped>
.character_wrapper {
  width: 24%;
}
</style>