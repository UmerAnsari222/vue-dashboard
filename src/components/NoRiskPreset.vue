<template>
  <div v-if="!modelOpen" class="no-risk-preset-container">
    <div class="no-risk-preset-header">
      <div>
        <img src="@/assets/icons/left-arrow.svg" alt="" />
        <h3>Middle Strategy No Risk Preset</h3>
      </div>
      <button @click="changeStatus(true)">
        <span>Add backtest</span>
        <img src="@/assets/icons/plus-button.svg" alt="" />
      </button>
    </div>
    <div class="main-preset-container">
      <div class="main-preset">
        <span>Main preset</span>
      </div>
      <div class="middle-strategy-test">
        <div>
          <select>
            <option value="">Middle Strategy No Risk Test 1</option>
          </select>
        </div>
      </div>
      <div class="long-strategy-test">
        <span>Long Strategy Test</span>
      </div>
    </div>
    <div class="backtest-launch">
      <h3>Backtest launch</h3>
      <div class="backtest-basic-settings">
        <div
          style="
            display: flex;
            align-items: center;
            justify-content: space-between;
          "
        >
          <h4>basic settings</h4>
          <img src="@/assets/icons/up-arrow.svg" alt="" @click="handelClick" />
        </div>
        <div v-if="isOpen" class="choose-input-container">
          <div class="form-group">
            <div class="choose-exchange">
              <label for="">Exchange</label>
              <div>
                <select name="" id="">
                  <option value="">Binance</option>
                  <option value="">Binance</option>
                  <option value="">Binance</option>
                  <option value="">Binance</option>
                </select>
              </div>
            </div>
            <div class="choose-currency">
              <label for="">Order type</label>
              <div>
                <select name="" id="">
                  <option value="">USDT / BTC</option>
                  <option value="">Binance</option>
                  <option value="">Binance</option>
                  <option value="">Binance</option>
                </select>
              </div>
            </div>
            <div class="choose-currency-pair">
              <label for="">currency pair</label>
              <div>
                <input type="text" placeholder="Enter" />
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="short-description">
              <label for="">Short description</label>
              <div>
                <textarea name="" id="" cols="30" rows="10"></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Advance />
      <button class="run-button">Save in draft</button>
    </div>
  </div>
  <!-- <CreatePreset /> -->
</template>

<script>
// import CreatePreset from "./CreatePreset.vue";
import Advance from "./Advance.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  components: {
    Advance,
  },
  props: ["status"],
  data() {
    return {
      isOpen: true,
    };
  },
  methods: {
    handelClick() {
      this.isOpen = !this.isOpen;
    },
    ...mapMutations(["changeStatus"]),
  },
  computed: {
    ...mapGetters(["modelOpen"]),
  },
};
</script>

<style scoped>
.no-risk-preset-container {
  margin-left: 250px;
  width: 80%;
  margin-top: 2rem;
}
.no-risk-preset-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.no-risk-preset-header div {
  display: flex;
  align-items: center;
}

.no-risk-preset-header div h3 {
  margin-left: 2rem;
  font-size: 2rem;
}
.no-risk-preset-header button {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 50px;
  width: 200px;
  border: none;
  border: 2px solid #a04afc;
  background: none;
  border-radius: 12px;
  cursor: pointer;
}
.no-risk-preset-header button span {
  color: #a04afc;
  font-weight: bold;
}
.main-preset-container {
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-between;
  margin-top: 1rem;
}
.main-preset-container .main-preset {
  background: rgba(194, 140, 253, 0.32);
  padding: 1rem 2rem;
  border-radius: 15px;
  color: #a04afc;
  font-weight: bold;
}
.backtest-launch {
  background-color: #fff;
  margin-top: 2rem;
  padding: 2rem 2rem;
  border-radius: 12px;
}
.backtest-launch h3 {
  font-size: 2rem;
  margin-bottom: 1rem;
}
.backtest-launch h4 {
  font-size: 1.5rem;
}

.main-preset-container .long-strategy-test {
  background: #dddde6;
  padding: 1rem 2rem;
  border-radius: 15px;
  color: #585060;
  font-weight: bold;
}

.main-preset-container .middle-strategy-test {
  background: #dddde6;
  padding: 1rem 1rem;
  border-radius: 12px;
  color: #585060;
  font-weight: bold;
}
.main-preset-container .middle-strategy-test select {
  border: none;
  background: none;
  outline: none;
}

.filter-container {
  background: #fff;
  width: 100%;
  padding: 2rem 2rem;
  border-radius: 12px;
  margin-bottom: 4rem;
}

.filter-topbar h3 {
  font-size: 2rem;
}
.filter-topbar p {
  margin-top: 0.5rem;
  color: #9d97a4;
  font-size: 1.2rem;
}
.choose-input-container {
  margin-top: 2rem;
  border-radius: 12px;
}
label {
  display: block;
}
.form-group {
  display: flex;
  gap: 4rem;
  margin-bottom: 2rem;
}
.choose-exchange,
.choose-currency,
.choose-currency-pair {
  flex: 1;
}
.choose-currency label,
.choose-exchange label,
.choose-currency-pair label,
.choose-specify label,
.short-description label,
.choose-strategy label {
  font-size: 1.2rem;
  font-weight: bold;
}
.choose-currency div,
.choose-exchange div,
.choose-currency-pair div,
.short-description div,
.choose-deal-type div {
  border: 1px solid #9d97a4;
  padding: 1rem 1rem;
  border-radius: 12px;
  margin-top: 0.5rem;
}
.choose-currency select,
.choose-exchange select,
.choose-currency-pair input,
.choose-strategy select,
.short-description textarea {
  border: none;
  outline: none;
  border-radius: 12px;
  width: 100%;
}
.choose-deal-type {
  flex: 1;
}
.short-description {
  flex: 2;
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
