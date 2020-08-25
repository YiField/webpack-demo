<template>
  <div class="echarts" ref="echarts"></div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "charts",
  data() {
    return {};
  },
  mounted() {
    this.chart = echarts.init(this.$refs.echarts);

    const option = {
      title: {
        text: "ECharts 入门示例",
      },
      tooltip: {},
      legend: {
        data: ["销量"],
      },
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    };
    // window.addEventListener("resize", this.$_handleResizeChart);
    this.chart.setOption(option);
    console.log(this.chart);
  },
  updated() {},
  created() {},
  methods: {
    $_handleResizeChart() {
      console.log("resizechart");
    },
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.$_handleResizeChart);
  },
};
</script>

<style lang="scss" scoped>
.echarts {
  width: 100%;
  height: 100%;
}
</style>
