<template>
  <line-chart ref="chart"></line-chart>
</template>

<script>
import LineChart from "./LineChart";
export default {
  components: {
    LineChart,
  },
  //   data() {
  //     return {
  //       datacollection: null,
  //       loaded: false,
  //       temperature: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  //       humidity: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
  //       potentio: [4, 5, 4, 5, 4, 5, 4, 5, 4, 5],
  //       time: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  //     };
  //   },
  //   mounted() {
  //     this.fillData();
  //     this.loaded = false;
  //     // await this.getFavoriot();
  //   },
  //   methods: {
  //     fillData() {
  //       this.datacollection = {
  //         labels: this.time,
  //       };
  //     },
  //   },
};
</script>

<style></style>
