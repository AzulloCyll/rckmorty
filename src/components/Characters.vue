<template>
  <div>
    <div class="pagination">
      <span>Pages: {{ currentPage }}/{{ pages }}</span>
      <button type="button" @click="prevPageClick()">Prev</button>
      <button type="button" @click="nextPageClick()">Next</button>
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
    prevURL: { type: String },
    nextURL: { type: String },
  },
  data: function () {
    return {};
  },

  methods: {
    prevPageClick() {
      this.$emit("prevPage", this.prevtURL);
    },
    nextPageClick() {
      this.$emit("nextPage", this.nextURL);
    },
  },
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