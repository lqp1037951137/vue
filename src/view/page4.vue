<template>
  <div class="con">
    <div class="echart" ref="echarts4"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {};
  },
  mounted() {
    const myEcharts = echarts.init(this.$refs.echarts4);
    const axis = [
      "1月",
      "2月",
      "3月",
      "4月",
      "5月",
      "6月",
      "7月",
      "8月",
      "9月",
      "10月",
      "11月",
      "12月"
    ];
    const data2 = [
      3000,
      2800,
      900,
      1000,
      800,
      700,
      1400,
      1300,
      900,
      1000,
      800,
      600
    ];
    const data = [
      1500,
      2200,
      1900,
      1200,
      300,
      900,
      400,
      1900,
      2900,
      1500,
      1600,
      1200
    ];
    myEcharts.setOption({
      xAxis: {
        type: "category",
        data: axis,
        boundaryGap: false
      },
      yAxis: {
        type: "value",
        scale: true
      },
      series: [
        {
          name: "销量",
          type: "line",
          data: data,
          markPoint: {
            data: [
              {
                type: "max"
              },
              {
                type: "min"
              }
            ]
          },
          markLine: {
            data: [
              {
                type: "average"
              }
            ]
          },
          markArea: {
            data: [
              [{ xAxis: "1月" }, { xAxis: "2月" }],
              [{ xAxis: "7月" }, { xAxis: "8月" }]
            ]
          },
          smooth: true,
          stack: "all",
          areaStyle: {}
          // lineStyle: {
          //   color: "green",
          //   type: "dashed"
          // },
          // areaStyle: {
          //   // color:'pink'
          // }
        },
        {
          type: "line",
          smooth: true,
          data: data2,
          stack: "all",
          areaStyle: {}
        }
      ]
    });
  }
};
</script>

<style lang="less">
.con {
  width: 100%;
  flex: 90;
  background: #e6e8eb;
  display: flex;
  justify-content: center;
  align-items: center;
  .echart {
    width: 600px;
    height: 400px;
    background: white;
  }
}
</style>
