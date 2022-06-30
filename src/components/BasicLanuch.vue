<template>
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
          <input type="text" placeholder="Enter" />
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
</template>

<script>
export default {};
</script>

<style scoped>
.choose-input-container {
  margin-top: 2rem;
  border-radius: 12px;
  padding: 0 2rem;
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
.choose-currency input,
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
