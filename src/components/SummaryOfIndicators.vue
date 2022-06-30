<template>
  <div class="summary-container">
    <div class="summary-tabs">
      <span>Параметр</span>
      <div>
        <span>Все</span>
        <span>Long</span>
        <span>Short</span>
      </div>
    </div>
    <div v-for="item in items" :key="item">
      <div class="summary">
        <span>Чистая прибыль</span>
        <div class="main-content">
          <div class="bсе">
            <span>0.0026 BTC</span>
            <br />
            <span>+12%</span>
          </div>
          <div class="long">
            <span>0.0026 BTC</span>
            <br />
            <span>+12%</span>
          </div>
          <div class="short">
            <span>0.0026 BTC</span>
            <br />
            <span>+12%</span>
          </div>
        </div>
      </div>
    </div>
    <Button />
  </div>
</template>

<script>
import Button from "../components/Button.vue";

export default {
  data() {
    return {
      items: 6,
    };
  },
  components: {
    Button,
  },
};
</script>

<style scoped>
.summary-container {
  margin-top: 2rem;
}
.summary-tabs {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.summary-tabs span {
  font-size: 1.4rem;
  font-weight: bold;
}
.summary-tabs div {
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.summary-tabs div span:last-child {
  margin-right: 0;
}
.summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
  box-shadow: -1px -1px 4px -2px rgba(0, 0, 0, 0.75);
  padding: 1.5rem 1.4rem;
  border-radius: 10px;
}
.summary > span {
  font-size: 1.5rem;
  font-weight: 700;
}
.main-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 45%;
  font-size: 1.2rem;
  font-weight: 600;
}
.main-content span:last-child {
  color: green;
  display: block;
  text-align: right;
}
</style>
