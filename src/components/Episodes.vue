<template>
  <div>
    <div class="episode_wrapper" v-for="item in items" :key="item.id">
      <Episode :item="item" />
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
.episode_wrapper {
  width: 100%;
}
</style>