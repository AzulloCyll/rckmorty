<template>
  <div>
    <div class="character_wrapper" v-for="item in items" :key="item.id">
      <Character :item="item" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {},
  },
};
</script>

<style lang="scss" scoped>
.character_wrapper {
  width: 24%;
}
</style>