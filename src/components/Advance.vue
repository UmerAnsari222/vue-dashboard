<template>
  <div class="main-container">
    <!-- basic settings start -->
    <div class="basic-settings-wrapper">
      <div
        class="basic-settings"
        style="
          display: flex;
          align-items: center;
          justify-content: space-between;
        "
      >
        <h3>Advanced settings</h3>
        <img src="@/assets/icons/up-arrow.svg" alt="" @click="handelClick" />
      </div>
      <div v-if="isOpen" class="choose-input-container">
        <div class="form-group">
          <div class="choose-exchange">
            <label for="">Choose an exchange</label>
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
            <label for="">Choose a currency pair</label>
            <div>
              <select name="" id="">
                <option value="">USDT / BTC</option>
                <option value="">Binance</option>
                <option value="">Binance</option>
                <option value="">Binance</option>
              </select>
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="choose-exchange transaction-container">
            <div>
              <input checked type="radio" name="transaction" id="BUY" />
              <label for="BUY">BUY</label>
              <input type="radio" name="transaction" id="SELL" />
              <label for="SELL">SELL</label>
            </div>
          </div>
          <div class="choose-exchange transaction-container">
            <div>
              <input checked type="radio" name="currency" id="Quote" />
              <label for="Quote">Quote (BTC)</label>
              <input type="radio" name="currency" id="Base" />
              <label for="Base">Base (LTC)</label>
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="choose-start">
            <label for="">Start order type</label>
            <div>
              <select name="" id="">
                <option value="">Market</option>
                <option value="">Binance</option>
                <option value="">Binance</option>
                <option value="">Binance</option>
              </select>
            </div>
          </div>
          <div class="choose-specify">
            <label for="">Choose a currency pair</label>
            <div>
              <select name="" id="">
                <option value="">USDT</option>
                <option value="">Binance</option>
                <option value="">Binance</option>
                <option value="">Binance</option>
              </select>
              <input type="text" placeholder="10022" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- basic settings end -->

    <div v-if="isOpen">
      <!-- conditions starting start -->
      <div class="conditions-starting-wrapper">
        <div class="basic-settings">
          <h3>Conditions for starting a deal</h3>
        </div>
        <div class="choose-input-container">
          <div class="form-group">
            <div class="choose-exchange">
              <label for="">Indicator selection</label>
              <div>
                <select name="" id="">
                  <option value="">RSI 7</option>
                  <option value="">Binance</option>
                  <option value="">Binance</option>
                  <option value="">Binance</option>
                </select>
              </div>
            </div>
            <div class="choose-currency">
              <label for="">Indicator timeframe</label>
              <div>
                <select name="" id="">
                  <option value="">45</option>
                  <option value="">Binance</option>
                  <option value="">Binance</option>
                  <option value="">Binance</option>
                </select>
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="choose-start">
              <label for="">Indicator value 0-100</label>
              <div>
                <select name="" id="">
                  <option value="">15</option>
                  <option value="">Binance</option>
                  <option value="">Binance</option>
                  <option value="">Binance</option>
                </select>
              </div>
            </div>

            <div class="choose-start">
              <label for="">The meaning of the comparison operator</label>
              <div>
                <select name="" id="">
                  <option value="">></option>
                  <option value="">Binance</option>
                  <option value="">Binance</option>
                  <option value="">Binance</option>
                </select>
              </div>
            </div>
          </div>
          <PlusButton />
        </div>
      </div>
      <!-- conditions starting end -->

      <!-- setting safety start -->
      <div class="setting-safety-order-wrapper">
        <div class="basic-settings">
          <h3>Setting up a safety order</h3>
        </div>
        <div class="choose-input-container">
          <div class="form-group">
            <div class="choose-specify">
              <label for="">Safety order volume</label>
              <div>
                <select name="" id="">
                  <option value="">USDT</option>
                  <option value="">Binance</option>
                  <option value="">Binance</option>
                  <option value="">Binance</option>
                </select>
                <input type="text" placeholder="10022" />
              </div>
            </div>
            <div class="choose-currency">
              <label for="">Maximum number of orders</label>
              <div>
                <select name="" id="">
                  <option value="">45</option>
                  <option value="">Binance</option>
                  <option value="">Binance</option>
                  <option value="">Binance</option>
                </select>
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="choose-exchange">
              <label for="">Number of simultaneously active orders</label>
              <div>
                <select name="" id="">
                  <option value="">Placeholder</option>
                  <option value="">Binance</option>
                  <option value="">Binance</option>
                  <option value="">Binance</option>
                </select>
              </div>
            </div>
            <div class="choose-currency">
              <label for="">Specify volume multiplier</label>
              <div>
                <select name="" id="">
                  <option value="">45</option>
                  <option value="">Binance</option>
                  <option value="">Binance</option>
                  <option value="">Binance</option>
                </select>
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="choose-start">
              <label for="">Specify the step in % of the entry amount</label>
              <div>
                <select name="" id="">
                  <option value="">Placeholder</option>
                  <option value="">Binance</option>
                  <option value="">Binance</option>
                  <option value="">Binance</option>
                </select>
              </div>
            </div>
            <div class="choose-exchange">
              <label for="">Specify step multiplier</label>
              <div>
                <select name="" id="">
                  <option value="">45</option>
                  <option value="">Binance</option>
                  <option value="">Binance</option>
                  <option value="">Binance</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- setting safety end -->

      <!-- specify step multiplier  start -->
      <div class="specify-step-multiplier-wrapper">
        <div class="basic-settings">
          <h3>Specify step multiplier</h3>
        </div>
        <div class="choose-input-container">
          <div class="form-group">
            <div class="choose-exchange">
              <label for="">Minimum drawdown in %</label>
              <div>
                <select name="" id="">
                  <option value="">20%</option>
                  <option value="">Binance</option>
                  <option value="">Binance</option>
                  <option value="">Binance</option>
                </select>
              </div>
            </div>
            <div class="choose-specify">
              <label for="">Amount</label>
              <div>
                <select name="" id="">
                  <option value="">USDT</option>
                  <option value="">Binance</option>
                  <option value="">Binance</option>
                  <option value="">Binance</option>
                </select>
                <input type="text" placeholder="10022" />
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="choose-exchange">
              <label for="">Indicator selection</label>
              <div>
                <select name="" id="">
                  <option value="">RSI 7</option>
                  <option value="">Binance</option>
                  <option value="">Binance</option>
                  <option value="">Binance</option>
                </select>
              </div>
            </div>
            <div class="choose-currency">
              <label for="">Indicator timeframe</label>
              <div>
                <select name="" id="">
                  <option value="">45</option>
                  <option value="">Binance</option>
                  <option value="">Binance</option>
                  <option value="">Binance</option>
                </select>
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="choose-start">
              <label for="">Indicator value 0-100</label>
              <div>
                <select name="" id="">
                  <option value="">15</option>
                  <option value="">Binance</option>
                  <option value="">Binance</option>
                  <option value="">Binance</option>
                </select>
              </div>
            </div>
            <div class="choose-start">
              <label for=""
                >Comparison operator ( / = / > (less, more, equal)</label
              >
              <div>
                <select name="" id="">
                  <option value="">></option>
                  <option value="">Binance</option>
                  <option value="">Binance</option>
                  <option value="">Binance</option>
                </select>
              </div>
            </div>
          </div>
          <PlusButton />
        </div>
      </div>
      <!-- specify step multiplier end -->

      <!-- Take profit  start -->
      <div class="Take-profit-wrapper">
        <div class="basic-settings">
          <h3>Take-profit</h3>
        </div>
        <div class="choose-input-container">
          <div class="form-group">
            <div class="choose-exchange">
              <label for="">Specify the number of orders</label>
              <div>
                <select name="" id="">
                  <option value="">20</option>
                  <option value="">Binance</option>
                  <option value="">Binance</option>
                  <option value="">Binance</option>
                </select>
              </div>
            </div>
            <div class="choose-exchange">
              <label for="">Choose a take profit step</label>
              <div>
                <select name="" id="">
                  <option value="">20</option>
                  <option value="">Binance</option>
                  <option value="">Binance</option>
                  <option value="">Binance</option>
                </select>
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="choose-exchange">
              <label for="">Volume change</label>
              <div>
                <select name="" id="">
                  <option value="">10</option>
                  <option value="">Binance</option>
                  <option value="">Binance</option>
                  <option value="">Binance</option>
                </select>
              </div>
              <div>
                <select name="" id="">
                  <option value="">10</option>
                  <option value="">Binance</option>
                  <option value="">Binance</option>
                  <option value="">Binance</option>
                </select>
              </div>
              <div>
                <select name="" id="">
                  <option value="">10</option>
                  <option value="">Binance</option>
                  <option value="">Binance</option>
                  <option value="">Binance</option>
                </select>
              </div>
              <div>
                <select name="" id="">
                  <option value="">10</option>
                  <option value="">Binance</option>
                  <option value="">Binance</option>
                  <option value="">Binance</option>
                </select>
              </div>
            </div>
            <div class="choose-exchange">
              <label for="">Choose a take profit step</label>
              <div>
                <select name="" id="">
                  <option value="">20</option>
                  <option value="">Binance</option>
                  <option value="">Binance</option>
                  <option value="">Binance</option>
                </select>
              </div>
              <div>
                <select name="" id="">
                  <option value="">20</option>
                  <option value="">Binance</option>
                  <option value="">Binance</option>
                  <option value="">Binance</option>
                </select>
              </div>
              <div>
                <select name="" id="">
                  <option value="">10</option>
                  <option value="">Binance</option>
                  <option value="">Binance</option>
                  <option value="">Binance</option>
                </select>
              </div>
              <div>
                <select name="" id="">
                  <option value="">10</option>
                  <option value="">Binance</option>
                  <option value="">Binance</option>
                  <option value="">Binance</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <!-- <button class="draft-button">Save in draft</button> -->
      </div>
      <!-- Take profit end -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    handelClick() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style scoped>
.main-container {
  margin-top: 2rem;
}
.middle-strategy-container {
  background-color: #e5e5e5;
  height: 100%;
  max-width: 100%;
  margin: 0 auto;
}
.middle-strategy-wrapper {
  margin-left: 250px;
  width: 80%;
  padding-top: 2rem;
}

.basic-settings-wrapper,
.conditions-starting-wrapper,
.setting-safety-order-wrapper,
.specify-step-multiplier-wrapper,
.Take-profit-wrapper {
  background: #fff;
  /* padding: 2rem; */
  /* border-radius: 10px; */
}

.basic-settings h3 {
  font-size: 2rem;
}
.basic-settings p {
  margin-top: 0.5rem;
  color: #9d97a4;
  font-size: 1.2rem;
}
.choose-input-container {
  padding: 2rem 3rem;
  border: 1px solid #9d97a4;
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
.choose-exchange {
  flex: 1;
}

.choose-currency {
  flex: 1;
}
.choose-start {
  flex: 1;
}
.choose-specify {
  flex: 1;
}
.choose-currency label,
.choose-exchange label,
.choose-start label,
.choose-specify label {
  font-size: 1.2rem;
  font-weight: bold;
}
.choose-currency div,
.choose-exchange div,
.choose-start div {
  border: 1px solid #9d97a4;
  padding: 1rem 1rem;
  border-radius: 12px;
  margin-top: 0.5rem;
}
.choose-currency select,
.choose-exchange select,
.choose-start select {
  border: none;
  outline: none;
  border-radius: 12px;
  width: 100%;
}
.choose-specify select {
  border: none;
  outline: none;
  padding: 1rem 1rem;
  background-color: #f2f1f4;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
}
.choose-specify input {
  border: none;
  outline: none;
  padding: 0.7rem 1rem;
  width: 79%;

  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
}
.choose-specify div {
  border: 1px solid #9d97a4;
  border-radius: 12px;
  margin-top: 0.5rem;
}
.Take-profit-wrapper .choose-input-container {
  padding-bottom: 0rem;
}
.Take-profit-wrapper .form-group:last-child div div {
  margin-top: 2rem;
}
.draft-button {
  margin-top: 2rem;
  width: 100%;
  height: 5rem;
  background: none;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  background: linear-gradient(64.09deg, #3a64fa 15.45%, #c041fb 83.65%);
  color: #fff;
}
.transaction-container div {
  display: flex;
  border: none;
  padding: 0;
}
.transaction-container div label {
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
}
.transaction-container div label:last-child {
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
}
.transaction-container div label {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #9d97a4;
  height: 52px;
  background: #f8f6f9;
}
.transaction-container div input[type="radio"] {
  /* visibility: hidden; */
  display: none;
}
.transaction-container div input[type="radio"]:checked + label {
  background: #a04afc;
  color: #fff;
}
</style>
