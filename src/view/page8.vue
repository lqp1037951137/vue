<template>
  <div class="con">
    <div class="echart" ref="echarts7"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import china from "../geojson/china";
import jiangxi from "../geojson/360000_jx";

export default {
  data() {
    return {
      data: []
    };
  },
  mounted() {
    const myEcharts = echarts.init(this.$refs.echarts7);

    myEcharts.setOption({
      series: [
        {
          type: "gauge",
          data: [
            {
              value: 97,
              itemStyle:{
                //color:'pink'
              }

            },
            // {
            //   value: 125
            // }
          ],
          min: 50,
          max: 180
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
    width: 800px;
    height: 600px;
    background: white;
  }
}
</style>
