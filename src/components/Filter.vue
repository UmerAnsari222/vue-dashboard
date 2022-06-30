<template>
  <div class="filter-container">
    <div class="filter-topbar">
      <h3>Filters</h3>
      <p>Filter presets by parameters</p>
    </div>
    <div class="filter-input-container">
      <div class="choose-input-container">
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
          <div class="choose-deal-type">
            <label for="">Deal type</label>
            <div>
              <select name="" id="">
                <option value="">Binance</option>
                <option value="">Binance</option>
                <option value="">Binance</option>
                <option value="">Binance</option>
              </select>
            </div>
          </div>
          <div class="choose-strategy">
            <label for="">Strategy</label>
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
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.filter-container {
  background: #fff;
  width: 80%;
  padding: 2rem 2rem;
  border-radius: 12px;
  margin-bottom: 4rem;
  margin-left: 250px;
  margin-top: 2rem;
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
.choose-exchange,
.choose-currency,
.choose-currency-pair {
  flex: 1;
}
.choose-currency label,
.choose-exchange label,
.choose-currency-pair label,
.choose-specify label,
.choose-deal-type label,
.choose-strategy label {
  font-size: 1.2rem;
  font-weight: bold;
}
.choose-currency div,
.choose-exchange div,
.choose-currency-pair div,
.choose-strategy div,
.choose-deal-type div {
  border: 1px solid #9d97a4;
  padding: 1rem 1rem;
  border-radius: 12px;
  margin-top: 0.5rem;
}
.choose-currency select,
.choose-exchange select,
.choose-currency-pair select,
.choose-strategy select,
.choose-deal-type select {
  border: none;
  outline: none;
  border-radius: 12px;
  width: 100%;
}
.choose-deal-type {
  flex: 1;
}
.choose-strategy {
  flex: 2;
}
</style>
