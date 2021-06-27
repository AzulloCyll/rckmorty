<template>
  <div>
    <div class="char">
      <div>
        <img :src="character.image" alt="" />
      </div>
      Name: <b>{{ character.name }}</b
      ><br />
      Species: <b>{{ character.species }}</b
      ><br />
      Gender: <b>{{ character.gender }}</b
      ><br />
      Episodes:
      <span v-for="(episode, index) of character.episode" :key="index">
        <a :href="episode">{{ index }}</a></span
      ><br />
      Location: <b>{{ character.location.name }}</b
      ><br />
      <!-- {{ character.location.url }}<br /> -->
      Status: <b>{{ character.status }}</b
      ><br />
      <br />
    </div>
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
  line-height: 25px;
  background-color: lightgrey;
  padding: 8%;
  margin-bottom: 20px;
  border-radius: 15px;
  min-height: 550px;
  & span {
    display: inline-block;
    padding-right: 10px;
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