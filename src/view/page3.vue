<template>
  <div class="con">
    <div class="echart" ref="echarts3"></div>
    <button @click="modify">modify</button>
    <button @click="add">add</button>
  </div>
</template>

<script>
import * as echarts from "echarts";
import "../../static/walden";
export default {
  data() {
    return {
      myEcharts: {},
      xArrData: [
        "张三",
        "李四",
        "王五",
        "赵六",
        "刘七",
        "陈八",
        "蔡九",
        "曾十"
      ],
      yArrData: [88, 92, 63, 77, 94, 80, 72, 86]
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.myEcharts = echarts.init(this.$refs.echarts3, "walden");
      //  this.myEcharts.showLoading()
      this.myEcharts.setOption({
        animation: true,
        animationDuration: function(arg) {
          return 500 * (arg + 1);
        },
        animationEasing: "bounceOut",
        animationThreshould:3,
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
        grid: {
          show: true
          // borderWidth: 10,
          // borderColor: "red",
          // top: 20,
          // left: 20
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
          data: this.xArrData
          // position: "top"
        },
        yAxis: {
          type: "value"
          // position: "right"
        },
        dataZoom: [
          {
            type: "slider",
            xAxisIndex: 0
          },
          {
            type: "slider",
            yAxisIndex: 0,
            start: 0,
            end: 100
          }
        ],
        legend: {
          data: ["语文"],
          bottom: 0
        },
        series: [
          {
            name: "语文",
            type: "bar",
            data: this.yArrData,
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
            itemStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "red"
                  },
                  {
                    offset: 1,
                    color: "blue"
                  }
                ]
              }
            }
          }
          // {
          //   name: "数学",
          //   type: "bar",
          //   data: [66, 98, 65, 85, 96, 75, 68, 81],
          //   itemStyle: {
          //     color: {
          //       type: "radial", //径向渐变
          //       x: 0.5,
          //       y: 0.5,
          //       r: 2,
          //       colorStops: [
          //         {
          //           offset: 0,
          //           color: "red"
          //         },
          //         {
          //           offset: 1,
          //           color: "blue"
          //         }
          //       ]
          //     }
          //   }
          // }
        ]
      });

      window.onresize = this.myEcharts.resize;
    });
  },
  methods: {
    modify() {
      var newYDataArr = [68, 32, 99, 77, 94, 80, 72, 89];
      this.myEcharts.setOption({
        series: [
          {
            data: newYDataArr
          }
        ]
      });
    },
    add() {
      this.xArrData.push("小明");
      this.yArrData.push(90);
      this.myEcharts.setOption({
        xAxis: {
          data: this.xArrData
        },
        series: [
          {
            data: this.yArrData
          }
        ]
      });
    }
  }
};
</script>

<style lang="less">
.con {
  width: 100%;
  flex: 90;
  background: #e6e8eb;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .echart {
    border: 1px solid black;
    width: 100%;
    height: 400px;
    background: white;
  }
}
</style>
