<template>
  <div class="con">
    <div class="echart" ref="echarts4"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import china from "../china";

export default {
  data() {
    return {};
  },
  mounted() {
    echarts.registerMap("china", china);
    const myEcharts = echarts.init(this.$refs.echarts4);

    myEcharts.setOption({
      geo: {
        type: "map",
        map: "china",
        roam: true,
        label: {
          show: true
        },
        zoom: 5,
        center: [116.405285, 39.904989]
      },
      series: []
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
