<template>
  <div>
    <div class="pagination">
      <span>Pages: {{ currentPage }}/{{ pages }}</span>
      <button type="button">Prev</button>
      <button type="button">Next</button>
    </div>
    <div class="char_wrapper" v-for="item in characters" :key="item.id">
      <Character :character="item" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    characters: {},
    pages: { type: Number },
    currentPage: { type: Number },
  },
  data: function () {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.char_wrapper {
  width: 24%;
}
.pagination {
  display: block;
  width: 100%;
  margin-bottom: 10px;
  & span {
    margin-right: 20px;
  }
  & button {
    margin-right: 10px;
  }
}
</style>