<template>
  <div>
    <div class="character">
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
      <b
        ><span v-for="episode of character.episode" :key="episode">
          <a :href="episode">{{ episode.split("/")[5] }}</a></span
        ></b
      ><br />
      Location: <b>{{ character.location.name }}</b
      ><br />
      Status: <b>{{ character.status }}</b
      ><br />
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