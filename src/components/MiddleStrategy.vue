<template>
  <div class="middle-strategy-container">
    <div class="middle-strategy-wrapper">
      <div class="middle-strategy-title">
        <img src="@/assets/icons/left-arrow.svg" alt="" />
        <h3>Middle Strategy No Risk Test 1</h3>
      </div>
      <div class="main-container">
        <Backtest />
        <ListOfDeals />
      </div>
    </div>
  </div>
</template>

<script>
import Backtest from "../components/Backtest.vue";
import ListOfDeals from "../components/ListOfDeals.vue";

export default {
  components: {
    // SummaryOfIndicators,
    Backtest,
    ListOfDeals,
  },
};
</script>

<style scoped>
.middle-strategy-container {
  background-color: #e5e5e5;
  height: 100%;
  max-width: 100%;
  margin: 0 auto;
}

.middle-strategy-title {
  padding-top: 2rem;
  display: flex;
  align-items: center;
}
.middle-strategy-title h3 {
  font-size: 2rem;
  font-weight: 700;
  margin-left: 2rem;
}
.main-container {
  background: #fff;
  margin-top: 2rem;
  padding: 2rem;
  border-radius: 10px;
  margin-bottom: 5rem;
}
</style>
