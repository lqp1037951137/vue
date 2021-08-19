<template>
  <div class="main">
    <div class="left" v-bind:class="openMenu ? ' left-o' : ' left-c'"></div>
    <div class="right">
      <div class="item" ref="echarts1"></div>
      <div class="item" ref="echarts2"></div>
      <div class="item" ref="echarts3"></div>
      <div class="item" ref="echarts4"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {
      openMenu: true
    };
  },
  mounted() {
    const echarts1 = echarts.init(this.$refs.echarts1);
    const echarts2 = echarts.init(this.$refs.echarts2);
    const echarts3 = echarts.init(this.$refs.echarts3);
    const echarts4 = echarts.init(this.$refs.echarts4);

    echarts1.setOption({
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
      },
      yAxis: {
        type: "value"
      },
      tooltip: {
        show: true
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: "bar"
        },
        {
          data: [80, 100, 130, 60, 40, 50, 120],
          type: "bar"
        },
        ,
        {
          data: [40, 60, 30, 70, 20, 10, 50],
          type: "bar"
        }
      ]
    });

    echarts2.setOption({
      title: {
        text: "南丁格尔玫瑰图",
        subtext: "纯属虚构",
        left: "center"
      },
      tooltip: {
        trigger: "item",
        formatter: "{b} <br/> {c} ({d}%)"
      },
      legend: {
        show: true,
        bottom: 10,
        type: "scroll",
        data: [
          "rose 1",
          "rose 2",
          "rose 3",
          "rose 4",
          "rose 5",
          "rose 6",
          "rose 7",
          "rose 8"
        ]
      },
      toolbox: {
        show: false,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      series: [
        // {
        //   name: "半径模式",
        //   type: "pie",
        //   radius: [20, 140],
        //   center: ["25%", "50%"],
        //   roseType: "radius",
        //   itemStyle: {
        //     borderRadius: 5
        //   },
        //   label: {
        //     show: false
        //   },
        //   emphasis: {
        //     label: {
        //       show: true
        //     }
        //   },
        //   data: [
        //     { value: 40, name: "rose 1" },
        //     { value: 33, name: "rose 2" },
        //     { value: 28, name: "rose 3" },
        //     { value: 22, name: "rose 4" },
        //     { value: 20, name: "rose 5" },
        //     { value: 15, name: "rose 6" },
        //     { value: 12, name: "rose 7" },
        //     { value: 10, name: "rose 8" }
        //   ]
        // },
        {
          name: "面积模式",
          type: "pie",
          radius: [40, 90],
          //  center: ["75%", "50%"],
          roseType: "area",
          itemStyle: {
            //   borderRadius: 5
          },
          label: {
            show: true,
            position: "outside",
            formatter: "{d}%",
            color:'#000000'
          },
          data: [
            { value: 30, name: "rose 1" },
            { value: 28, name: "rose 2" },
            { value: 26, name: "rose 3" },
            { value: 24, name: "rose 4" },
            { value: 22, name: "rose 5" },
            { value: 20, name: "rose 6" },
            { value: 18, name: "rose 7" },
            { value: 16, name: "rose 8" }
          ]
        }
      ]
    });
  },

  methods: {}
};
</script>

<style>
.main {
  width: 100vw;
  height: 100vh;
  background: rgb(120, 121, 122);
  display: flex;
}
.left {
  background: #2a384c;
  height: 100%;
  transition: flex 0.3s ease;
}

.left-o {
  flex: 1;
}
.left-c {
  flex: 0;
}
.right {
  flex: 9;
  background: #e6e8eb;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}

.item {
  width: 45%;
  height: 45%;
  background: white;
}
</style>
