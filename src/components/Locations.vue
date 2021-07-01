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
.location_wrapper {
  width: 100%;
}
.location {
  line-height: 25px;
  background-color: lightgrey;
  padding: 2%;
  margin-bottom: 20px;
  border-radius: 15px;
  & span {
    display: inline-block;
    padding-right: 10px;
    a {
      color: black;
    }
  }
}
</style>
