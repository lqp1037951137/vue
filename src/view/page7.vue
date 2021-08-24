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
    const dataMax = [
      {
        name: "易用性",
        value: 100
      },
      {
        name: "功能",
        value: 100
      },
      {
        name: "拍照",
        value: 100
      },
      {
        name: "跑分",
        value: 100
      },
      {
        name: "续航",
        value: 100
      }
    ];

    myEcharts.setOption({
      radar: {
        //radar 雷达
        indicator: dataMax,
        shape: "polygon" //显示雷达图最外层为圆形 circle, 默认为polygon 多边形
      },
       legend: {
            show: true,
            bottom: 10,
            type: "scroll",
            data: [
              "华为手机1",
              "中兴手机1"
            ]
          },
      series: [
        {
          type: "radar",
          label: {
            show: true
          },
          areaStyle: {},
          
          data: [
            {
              name: "华为手机1",
              value: [80, 90, 80, 82, 90]
            },
            {
              name: "中兴手机1",
              value: [70, 82, 75, 70, 78]
            }
          ]
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
