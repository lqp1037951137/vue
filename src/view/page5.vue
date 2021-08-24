<template>
  <div class="con">
    <div class="echart" ref="echarts4"></div>
    <button @click="highlight">高亮</button>
  </div>
</template>

<script>
import * as echarts from "echarts";
import "../../static/walden";

export default {
  data() {
    return {
      myEcharts:{}
    };
  },
  mounted() {
    this.myEcharts = echarts.init(this.$refs.echarts4, "walden");
    const pieData = [
      {
        name: "淘宝",
        value: 11231,
        emphasis: {
          itemStyle: {
            color: "pink"
          }
        }
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
    this.myEcharts.setOption({
      tooltip:{
        show:true
      },
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
  },
  methods:{
    highlight(){
      this.myEcharts.dispatchAction({
        type:'highlight',
        seriesIndex:0,
        dataIndex:0
      })
      this.myEcharts.dispatchAction({
        type:'showTip',
        seriesIndex:0,
        dataIndex:2
      })
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
    width: 600px;
    height: 400px;
    background: white;
  }
}
</style>
