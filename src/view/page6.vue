<template>
  <div class="con">
    <div class="echart" ref="echarts6"></div>
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
    echarts.registerMap("china", china);
    echarts.registerMap("jiangxi", jiangxi);
    const myEcharts = echarts.init(this.$refs.echarts6);

    this.data = [
      { name: "北京", value: 199 },
      { name: "天津", value: 42 },
      { name: "河北", value: 102 },
      { name: "山西", value: 81 },
      { name: "内蒙古", value: 47 },
      { name: "辽宁", value: 67 },
      { name: "吉林", value: 82 },
      { name: "黑龙江", value: 123 },
      { name: "上海", value: 24 },
      { name: "江苏", value: 92 },
      { name: "浙江", value: 114 },
      { name: "安徽", value: 109 },
      { name: "福建", value: 116 },
      { name: "江西", value: 91 },
      { name: "山东", value: 119 },
      { name: "河南", value: 137 },
      { name: "湖北", value: 116 },
      { name: "湖南", value: 114 },
      { name: "重庆", value: 91 },
      { name: "四川", value: 125 },
      { name: "贵州", value: 62 },
      { name: "云南", value: 83 },
      { name: "西藏", value: 9 },
      { name: "陕西", value: 80 },
      { name: "甘肃", value: 56 },
      { name: "青海", value: 10 },
      { name: "宁夏", value: 18 },
      { name: "新疆", value: 180 },
      { name: "广东", value: 123 },
      { name: "广西", value: 59 },
      { name: "海南", value: 140 }
    ];
    const scatterData = [
      {
        value: [117.283042, 31.86119]
      }
    ];
    myEcharts.setOption({
      geo: {
        type: "map",
        map: "china",
        roam: true,
        label: {
          show: true
        },
        zoom: 1.5,
        center: [108.948024, 34.263161]
      },
      visualMap: {
        min: 0,
        max: 300,
        inRange: {
          color: ["white", "red"]
        },
        calculable: true
      },
      series: [
        {
          data: this.data,
          type: "map",
          geoIndex: 0
        },
        {
          type: "effectScatter",
          coordinateSystem: "geo",
          data: scatterData,
          rippleEffect: {
            scale: 10,
          }
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
