<template>
  <el-row>
    <el-col :span="8" style="padding-right: 10px">
      <el-card class="box-card">
        <div class="user">
          <img src="../assets/images/admin-logo.jpeg" alt="" />
          <div class="userinfo">
            <p class="name">Admin</p>
            <p class="access">超级管理员</p>
          </div>
        </div>
        <el-divider></el-divider>
        <div class="login-info">
          <p>上次登陆的时间：<span>2021-07-19</span></p>
          <p>上次登陆的地点：<span>武汉</span></p>
        </div>
      </el-card>
      <el-card style="margin-top: 20px; height: 460px">
        <el-table :data="tableData" style="width: 100%">
          <!-- <el-table-column prop="name" label="品牌" width="auto">
          </el-table-column>
          <el-table-column prop="todayBuy" label="今日购买" width="auto">
          </el-table-column>
          <el-table-column prop="monthBuy" label="本月购买" width="auto">
          </el-table-column>
          <el-table-column prop="totalBuy" label="总购买" width="auto">
          </el-table-column> -->

          <!-- v-for要是对象，注意:key="key" -->
          <el-table-column
            v-for="(val, key) in tableLabel"
            :key="key"
            :prop="key"
            :label="val"
          >
          </el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <el-col :span="16" style="padding-left: 10px">
      <div class="num">
        <el-card
          v-for="item in countData"
          :key="item.name"
          :body-style="{ display: 'flex', padding: 0 }"
        >
          <!-- 模板字符串 -->
          <i
            class="icon"
            :class="`el-icon-${item.icon}`"
            :style="{ background: item.color }"
          ></i>
          <div class="detail">
            <p class="price">¥ {{ item.value }}</p>
            <p class="desc">{{ item.name }}</p>
          </div>
        </el-card>
      </div>

      <el-card style="height: 280px">
        <!-- 折线图 -->
        <div ref="echarts1" style="height: 280px"></div>
      </el-card>
      <div class="graph">
        <el-card style="height: 260px">
          <!-- 柱状图 -->
          <div ref="echarts2" style="height: 260px"></div>
        </el-card>
        <el-card style="height: 260px">
          <!-- 饼状图 -->
          <div ref="echarts3" style="height: 240px"></div>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import { getData } from "../api";
import * as echarts from "echarts";
export default {
  data() {
    return {
      tableData: [],
      // 要是对象
      tableLabel: {
        name: "型号",
        todayBuy: "今日购买",
        monthBuy: "本月购买",
        totalBuy: "总购买",
      },
      // 订单数据
      countData: [
        {
          name: "今日支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "今日收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "今日未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
        {
          name: "本月支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "本月收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "本月未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
      ],
    };
  },
  mounted() {
    getData().then(({ data }) => {
      // 解构
      const { tableData } = data.data;
      console.log(tableData);
      // 动态数据
      this.tableData = tableData;

      // 基于准备好的dom，初始化echarts实例
      const echarts1 = echarts.init(this.$refs.echarts1);
      // 指定图表的配置项和数据
      var echarts1Options = {};
      // 处理数据xAxis
      const { orderData, userData, videoData } = data.data;
      const xAxis = Object.keys(orderData.data[0]);
      const xAxisData = { data: xAxis };
      echarts1Options.xAxis = xAxisData;
      echarts1Options.yAxis = {};
      echarts1Options.legend = xAxisData;
      echarts1Options.series = [];
      xAxis.forEach((key) => {
        echarts1Options.series.push({
          name: key,
          data: orderData.data.map((item) => item[key]),
          type: "line",
        });
      });
      echarts1.setOption(echarts1Options);

      // 柱状图
      const echarts2 = echarts.init(this.$refs.echarts2);
      const echarts2Options = {
        title: {
          text: "ECharts 入门示例",
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          // 图例文字颜色
          textStyle: {
            color: "#333",
          },
        },
        xAxis: {
          type: "category",
          data: userData.map((item) => item.date),
          axisLine: {
            lineStyle: {
              color: "#17b3a3",
            },
          },
          axisLabel: {
            interval: 0,
            color: "#333",
          },
        },
        yAxis: [
          {
            type: "value",
            axisLine: {
              lineStyle: {
                color: "#17b3a3",
              },
            },
          },
        ],
        color: ["#2ec7c9", "#b6a2de"],
        series: [
          {
            name: "new users",
            data: userData.map((item) => item.new),
            type: "bar",
          },
          {
            name: "active users",
            data: userData.map((item) => item.active),
            type: "bar",
          },
        ],
      };
      echarts2.setOption(echarts2Options);

      // 饼状图
      const echarts3 = echarts.init(this.$refs.echarts3);
      const echarts3Options = {
        tooltip: {
          trigger: "item",
        },
        color: [
          "#c23531",
          "#2f4554",
          "#61a0a8",
          "#d48265",
          "#91c7ae",
          "#749f83",
          "#ca8622",
          "#bda29a",
          "#6e7074",
          "#546570",
          "#c4ccd3",
        ],
        series: [
          {
            data: videoData,
            type: "pie",
          },
        ],
      };
      echarts3.setOption(echarts3Options);
    });
  },
};
</script>

<style lang="less">
.user {
  padding-bottom: 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;

  img {
    margin-right: 5vh;
    width: 10vh;
    height: 10vh;
    border-radius: 50%;
  }

  .userinfo {
    .name {
      font-size: 32px;
      margin-bottom: 10px;
    }

    .access {
      color: #999999;
    }
  }
}

.login-info {
  p {
    line-height: 28px;
    font-size: 14px;
    color: #999999;

    span {
      color: #666666;
      margin-left: 60px;
    }
  }
}

.num {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .icon {
    width: 80px;
    height: 80px;
    font-size: 30px;
    text-align: center;
    line-height: 80px;
    color: white;
  }

  .detail {
    margin-left: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .price {
      font-size: 30px;
      margin-bottom: 14px;
      line-height: 30px;
      height: 30px;
    }

    .desc {
      font-size: 14px;
      text-align: center;
      color: #999999;
    }
  }

  .el-card {
    width: 33%;
    margin-bottom: 20px;
  }
}

.graph {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;

  .el-card {
    width: 48%;
  }
}
</style>
