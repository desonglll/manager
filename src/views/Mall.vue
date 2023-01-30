<template>
  <div>
    <div>Hello Mall</div>
    <el-button @click="clickConsole()"></el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    clickConsole() {
      console.log("Hello World!");
    },
  },
};
</script>

<style lang="scss">

</style>
