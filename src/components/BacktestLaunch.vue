<template>
  <div class="Backtest-results">
    <h3>Backtest launch</h3>
    <div class="tab-menu">
      <ul>
        <li :class="isActive == 1 ? 'active' : ''" @click="handelClick(1)">
          Launch settings
        </li>
        <li :class="isActive == 2 ? 'active' : ''" @click="handelClick(2)">
          Advanced settings
        </li>
      </ul>
    </div>
    <div v-if="isTab == 1">
      <BasicLanuch />
    </div>
    <div v-if="isTab == 2" class="advance">
      <Advance />
    </div>
    <button class="run-button">Save in draft</button>
  </div>
</template>

<script>
import BasicLanuch from "./BasicLanuch.vue";
// import Button from "./Button.vue";
import Advance from "./Advance.vue";
export default {
  data() {
    return {
      isTab: 1,
      isActive: 1,
    };
  },
  components: { BasicLanuch, Advance },
  methods: {
    handelClick(num) {
      this.isTab = num;
      this.isActive = num;
    },
  },
};
</script>

<style scoped>
.Backtest-results {
  padding: 1rem 1rem;
  background-color: #fff;
  margin-top: 2rem;
  border-radius: 12px;
}
.Backtest-results h3 {
  padding: 0 1rem;
  font-size: 2.5rem;
}
.tab-menu {
  margin-top: 0.5rem;
  padding: 0 1rem;
}
.tab-menu ul {
  display: flex;
}
.tab-menu ul li.active {
  border-bottom: 2px solid #a04afc;
  padding-bottom: 0.5rem;
}
.tab-menu ul li {
  list-style: none;
  margin-right: 2rem;
  font-size: 1.3rem;
  cursor: pointer;
}
.advance {
  padding: 0 1rem;
}
.run-button {
  width: 100%;
  height: 52px;
  background: linear-gradient(64.09deg, #3a64fa 15.45%, #c041fb 83.65%);
  box-shadow: inset 0px 4px 30px rgba(238, 205, 254, 0.32);
  border-radius: 16px;
  border: none;
  color: white;
  cursor: pointer;
  margin-top: 2rem;
}
</style>
