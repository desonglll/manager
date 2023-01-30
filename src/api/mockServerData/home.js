import Mock from "mockjs";

let List = [];
export default {
  getStatisticalData: () => {
    for (let i = 0; i < 7; i++) {
      List.push(
        Mock.mock({
          Apple: Mock.Random.float(100, 8000, 0, 0),
          vivo: Mock.Random.float(100, 8000, 0, 0),
          oppo: Mock.Random.float(100, 8000, 0, 0),
          Meizu: Mock.Random.float(100, 8000, 0, 0),
          Samsung: Mock.Random.float(100, 8000, 0, 0),
          Xiaomi: Mock.Random.float(100, 8000, 0, 0),
        })
      );
    }

    return {
      code: 20000,
      data: {
        // 饼图
        videoData: [
          {
            name: "Xiaomi",
            value: 2999,
          },
          {
            name: "Apple",
            value: 5999,
          },
          {
            name: "vivo",
            value: 1500,
          },
          {
            name: "oppo",
            value: 1999,
          },
          {
            name: "Meizu",
            value: 2999,
          },
          {
            name: "Samsung",
            value: 7999,
          },
        ],
        // 柱状图
        userData: [
          {
            date: "Monday",
            new: 5,
            active: 200,
          },
          {
            date: "Tuesday",
            new: 10,
            active: 500,
          },
          {
            date: "Wednesday",
            new: 12,
            active: 550,
          },
          {
            date: "Thursday",
            new: 5,
            active: 200,
          },
          {
            date: "Friday",
            new: 5,
            active: 200,
          },
          {
            date: "Saturday",
            new: 5,
            active: 200,
          },
          {
            date: "Sunday",
            new: 33,
            active: 170,
          },
        ],
        // 折线图
        orderData: {
          date: [
            "20191001",
            "20191002",
            "20191003",
            "20191004",
            "20191005",
            "20191006",
            "20191007",
          ],
          data: List,
        },
        tableData: [
          {
            name: "Smartistan",
            todayBuy: 100,
            monthBuy: 300,
            totalBuy: 800,
          },
          {
            name: "Reno",
            todayBuy: 100,
            monthBuy: 300,
            totalBuy: 800,
          },
          {
            name: "Apple",
            todayBuy: 100,
            monthBuy: 300,
            totalBuy: 800,
          },
          {
            name: "Xiaomi",
            todayBuy: 100,
            monthBuy: 300,
            totalBuy: 800,
          },
          {
            name: "Huawei",
            todayBuy: 100,
            monthBuy: 300,
            totalBuy: 800,
          },
          {
            name: "Meizu",
            todayBuy: 100,
            monthBuy: 300,
            totalBuy: 800,
          },
        ],
      },
    };
  },
};
