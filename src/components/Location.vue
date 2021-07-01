<template>
  <div>
    <div class="location">
      Name: <b>{{ item.name }}</b> <br />
      Dimension: <b>{{ item.dimension }}</b> <br />
      Type: <b>{{ item.type }}</b
      ><br />
      Residents:
      <b
        ><span v-for="resident of item.residents" :key="resident">
          <a :href="resident">{{ resident.split("/")[5] }}</a>
        </span></b
      ><br />
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
