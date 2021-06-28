<template>
  <div>
    <div class="location_wrapper" v-for="item in locations" :key="item.id">
      <Location :location="item" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    locations: {},
  },
};
</script>

<style lang="scss" scoped>
</style>
