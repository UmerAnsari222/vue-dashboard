<template>
  <div class="middle-strategy-container">
    <div class="middle-strategy-wrapper">
      <div class="middle-strategy-title">
        <h3>Strategies</h3>
      </div>
      <!-- <div class="main-container"></div> -->
      <Algo />
      <Buy />
      <BacktestLaunch />
    </div>
  </div>
</template>

<script>
import Algo from "../components/Algo.vue";
import BacktestLaunch from "../components/BacktestLaunch.vue";
import Buy from "../components/Buy.vue";
export default {
  components: { Algo, Buy, BacktestLaunch },
};
</script>

<style scoped>
.middle-strategy-container {
  background-color: #e5e5e5;
  height: 100%;
  max-width: 100%;
  margin: 0 auto;
}
.middle-strategy-wrapper {
  margin-left: 250px;
  width: 80%;
}
.middle-strategy-title {
  padding-top: 2rem;
  display: flex;
  align-items: center;
}
.middle-strategy-title h3 {
  font-size: 2.4rem;
  font-weight: 700;
  margin-left: 2rem;
}
.main-container {
  background: #fff;
  margin-top: 2rem;
  padding: 2rem;
  border-radius: 10px;
}
</style>
