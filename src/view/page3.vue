<template>
  <div class="con">
    <div class="echart" ref="echarts3"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {};
  },
  mounted() {
    const myEcharts = echarts.init(this.$refs.echarts3);
    myEcharts.setOption({
      title: {
        text: "成绩展示",
        textStyle: {
          color: "#3A4E8B"
        },
        // borderWidth: 5,
        // borderColor: "blue",
        // borderRadius: 5,
        left: "center",
        top: 10
      },
      tooltip: {
        // trigger: "item",
        trigger: "axis",
        triggerOn: "click",
        // formatter:'{b} : {c}'
        formatter: function(arg) {
          return arg[0].name + " : " + arg[0].data;
        }
      },
      toolbox: {
        feature: {
          saveAsImage: {},
          dataView: {},
          restore: {},
          dataZoom: {},
          magicType: {
            type: ["bar", "line"]
          }
        }
      },
      xAxis: {
        type: "category",
        data: ["张三", "李四", "王五", "赵六", "刘七", "陈八", "蔡九", "曾十"]
      },
      yAxis: {
        type: "value"
      },
      legend: {
        data: ["语文", "数学"],
        bottom:0
      },
      series: [
        {
          name: "语文",
          type: "bar",
          data: [88, 92, 63, 77, 94, 80, 72, 86]
        },
        {
          name: "数学",
          type: "bar",
          data: [66, 98, 65, 85, 96, 75, 68, 81]
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
