<template>
  <div>
    <div class="episode">
      Name: <b>{{ item.name }}</b
      ><br />
      Date on air: <b>{{ item.air_date }}</b> <br />
      Characters:
      <span v-for="character of item.characters" :key="character">
        <b>
          <a :href="character">{{ character.split("/")[5] }}</a></b
        >
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: { type: Object },
  },
};
</script>

<style lang="scss" scoped>
.episode {
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