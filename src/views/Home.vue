<template>
  <div class="home-container">
    <div class="deals">
      <h3>Deals by strategies</h3>
      <div class="heading">
        <span></span>
        <span>Overall volume</span>
      </div>
      <line-chart />
    </div>
    <div class="deals">
      <h3>Volume by presets</h3>
      <div class="heading">
        <span></span>
        <span>Total</span>
      </div>
      <line-chart />
    </div>
    <div class="deals">
      <h3>Number of users</h3>
      <div class="heading">
        <span></span>
        <span>Overall volume</span>
      </div>
      <line-chart />
    </div>
  </div>
</template>

<script>
import LineChart from "../components/LineChart.vue";

export default {
  components: { LineChart },
  name: "Home",
};
</script>

<style scoped>
.home {
  display: flex;
}
.home-container {
  flex: 4;
}
.home-container {
  margin-left: 250px;
  width: 80%;
  margin-bottom: 2rem;
}
.deals {
  background: #fff;
  margin-top: 2rem;
  padding: 2rem;
  border-radius: 12px;
}
.deals h3 {
  font-size: 2rem;
}
.deals .heading {
  width: 30%;
  display: flex;
  align-items: center;
  margin-top: 1.2rem;
}
.deals .heading span:last-child {
  font-size: 1.3rem;
  margin-left: 12px;
}
.deals .heading span:first-child {
  height: 10px;
  width: 10px;
  background-color: #a04afc;
  border-radius: 50%;
  display: block;
}
</style>
