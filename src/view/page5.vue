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
    const pieData = [
      {
        name: "淘宝",
        value: 11231
      },
      {
        name: "京东",
        value: 22673
      },
      {
        name: "唯品会",
        value: 6123
      },
      {
        name: "1号店",
        value: 8989
      },
      {
        name: "聚美优品",
        value: 6700
      }
    ];
    myEcharts.setOption({
      series: [
        {
          type: "pie",
          data: pieData,
          label: {
            show: true,
            formatter: function(arg) {
              // console.log(arg);
              return arg.name + " " + arg.value + "元\n" + arg.percent + "%";
            }
          },
          // radius: ['50%','75%']
          // roseType: "radius",
          selectedMode: "single", // multiple single
          selectedOffset: 30
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
