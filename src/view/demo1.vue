<template>
  <div>
    <div id="main" ref="main"></div>
    <el-button type="primary" @click="click()">button</el-button>
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "Index",
  data() {
    return {
      data: {
        name: "销量",
        type: "bar",
        data: [5, 20, 36, 10, 10, 20]
      },
      option: {
        title: {
          text: "ECharts 入门示例"
        },
        tooltip: {},
        legend: {
          data: ["销量", "标题2"]
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: [{}],
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20]
          },
          {
            name: "标题2",
            type: "bar",
            data: [15, 25, 10, 36, 15, 35]
          },
          {
            type: "pie",
            center: ["70%", 50],
            radius: 30,
            data: [
              { name: "数据一", value: 20 },
              { name: "数据二", value: 15 },
              { name: "数据三", value: 25 }
            ]
          }
        ]
      }
    };
  },
  myChart:{},
  mounted() {
    this.myChart = echarts.init(this.$refs.main);

    this.myChart.setOption(this.option);
  },
  methods: {
    click() {
      this.option.series[0].data = [18, 20, 5, 10, 33, 39];
      this.myChart.setOption(this.option)
      console.log(this.data);
    }
  }
};
</script>

<style scoped>
#main {
  width: 100vw;
  height: 50vh;
}

.line {
  position: absolute;
  top: 0;
  width: 20%;
  height: 20px;
  background: #f00;
  margin: 5px 10px;
  transition: all 3.6s ease;
}
.line-o {
  position: absolute;
  top: 60%;
  width: 80%;
  height: 300px;
  background: blue;
  margin: 5px 10px;
  transition: all 3.6s ease;
}
</style>
