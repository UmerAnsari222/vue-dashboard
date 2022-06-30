<template>
  <div class="summary-container">
    <div class="summary-tabs">
      <span>ID</span>
      <span>Направление</span>
      <span>Дата начала</span>
      <span>Дата завершения</span>
      <span>Цена на старте</span>
      <span>Цена в конце</span>
      <span>Совокуп. прибыль</span>
      <span>Максимальная просадка</span>
    </div>
    <div v-for="item in items" :key="item">
      <div class="summary">
        <span>1</span>
        <span class="long">Long</span>
        <span>12.03.2022</span>
        <span>14.03.2022</span>
        <span>0,0432524</span>
        <span class="price-end">0,0432524</span>
        <div class="btc">
          <span>0.0026 BTC</span>
          <br />
          <span>+12%</span>
        </div>
        <div class="maximum">
          <span>0.0026</span>
          <br />
          <span>0.007</span>
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
  justify-content: space-between;
}
.summary-tabs span {
  font-size: 1.4rem;
  font-weight: bold;
}

.summary-tabs div span:last-child {
  margin-right: 0;
}
.summary {
  display: grid;
  grid-template-columns: 50px repeat(7, 1fr);

  margin-top: 2rem;
  box-shadow: -1px -1px 4px -2px rgba(0, 0, 0, 0.75);
  padding: 1.5rem 1.4rem;
  border-radius: 10px;
}
.summary > span {
  font-size: 1.3rem;
  color: black;
}
.summary span:first-child {
  margin: 0;
}

.main-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 45%;
  font-size: 1.2rem;
  font-weight: 600;
}

.btc span:last-child {
  color: green;
  display: block;
  margin-left: 3rem;
}
.maximum {
  margin: auto;
}
.maximum span:last-child {
  color: red;
}
.long {
  background-color: #e3e3ee;
  width: 50px !important;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
}
</style>
