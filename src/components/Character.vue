<template>
  <div>
    <div class="character">
      <div>
        <img :src="item.image" alt="" />
      </div>
      Name: <b>{{ item.name }}</b
      ><br />
      Species: <b>{{ item.species }}</b
      ><br />
      Gender: <b>{{ item.gender }}</b
      ><br />
      Episodes:
      <b
        ><span v-for="episode of item.episode" :key="episode">
          <a :href="episode">{{ episode.split("/")[5] }}</a></span
        ></b
      ><br />
      Location: <b>{{ item.location.name }}</b
      ><br />
      Status: <b>{{ item.status }}</b
      ><br />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: { type: Object },
  },

  data: function () {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.character {
  line-height: 25px;
  background-color: lightgrey;
  padding: 8%;
  margin-bottom: 20px;
  border-radius: 15px;
  min-height: 550px;
  & span {
    display: inline-block;
    padding-right: 10px;
    a {
      color: Black;
    }
  }
  & div {
    display: flex;
    & img {
      width: 100%;
      border-radius: 10px;
      margin-bottom: 10px;
    }
  }
}
</style>