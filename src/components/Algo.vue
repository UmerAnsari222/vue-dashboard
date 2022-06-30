<template>
  <div class="algo-strategies-container">
    <div class="algo-strategies-tobar">
      <h3>Algo trading strategies</h3>
      <ul>
        <li class="active">Custom Strategies</li>
        <li>Approval strategies</li>
      </ul>
    </div>
    <div class="card-container">
      <div class="card">
        <h3>Midddle Strtaegy No Risk Bot</h3>
        <span class="strategy">Conservative Strategy</span>
        <span class="profit">Profit</span>
        <h4>+16.28%</h4>
        <button>More</button>
      </div>
      <div class="card">
        <h3>Midddle Strtaegy No Risk Bot</h3>
        <span class="strategy">Conservative Strategy</span>
        <span class="profit">Profit</span>
        <h4>+16.28%</h4>
        <button>More</button>
      </div>
      <div class="card">
        <h3>Midddle Strtaegy No Risk Bot</h3>
        <span class="strategy">Conservative Strategy</span>
        <span class="profit">Profit</span>
        <h4>+16.28%</h4>
        <button>More</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.algo-strategies-container {
  background: #fff;
  margin-top: 2rem;
  padding: 2rem;
  border-radius: 10px;
}
.algo-strategies-tobar {
  display: flex;
  flex-direction: column;
}
.algo-strategies-tobar h3 {
  font-size: 2rem;
}
.algo-strategies-tobar ul {
  display: flex;
  margin-top: 2rem;
}
.algo-strategies-tobar ul li {
  list-style: none;
  margin-right: 2rem;
  font-size: 1.3rem;
  cursor: pointer;
}
.algo-strategies-tobar ul li.active {
  padding-bottom: 0.6rem;
  border-bottom: 1px solid #bc84f7;
}
.card-container {
  margin-top: 2rem;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}
.card {
  border: 1px solid #d5d3d8;
  padding: 1rem 1.4rem;
  border-radius: 12px;
}
.card h3 {
  font-size: 1.3rem;
}
.strategy {
  background-color: #eeedef;
  display: block;
  width: 50%;
  padding: 0.7rem 0.4rem;
  text-align: center;
  border-radius: 8px;
}
.profit {
  margin-top: 0.7rem;
  display: inline-block;
  font-size: 1.7rem;
}
h4 {
  font-size: 1.5rem;
  color: #a04afc;
}
button {
  width: 30%;
  height: 30px;
  background: #ffffff;
  border: 1px solid #a457f6;
  box-sizing: border-box;
  border-radius: 8px;
  color: #a04afc;
  margin-top: 1rem;
  cursor: pointer;
}
</style>
