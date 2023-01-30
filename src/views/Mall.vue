<template>
  <div>
    <div>Hello Mall</div>
    <div id="c1"></div>
    <el-button @click="clickConsole()"></el-button>
  </div>
</template>

<script>
import { Bar } from "@antv/g2plot";
import { getData } from "../api";

export default {
  data() {
    return {
      data: [],
    };
  },
  methods: {
    clickConsole() {
      console.log("Hello World!");
    },
  },

  // 生命周期函数
  mounted() {
    const data = [
      { year: "1951 年", sales: 38 },
      { year: "1952 年", sales: 52 },
      { year: "1956 年", sales: 61 },
      { year: "1957 年", sales: 145 },
      { year: "1958 年", sales: 48 },
    ];

    const barPlot = new Bar("c1", {
      data,
      xField: "sales",
      yField: "year",
      colorField: "year",
    });

    barPlot.render();
  },
};
</script>

<style lang="scss"></style>
