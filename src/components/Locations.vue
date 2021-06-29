<template>
  <div>
    <div class="location_wrapper" v-for="item in items" :key="item.id">
      <Location :item="item" />
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
</style>
