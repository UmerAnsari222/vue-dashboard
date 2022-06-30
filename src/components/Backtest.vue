<template>
  <div class="Backtest-results">
    <h3>Результаты бектеста</h3>
    <div class="tab-menu">
      <ul>
        <li>Обзор</li>
        <li class="active">Сводка показателей</li>
        <li>Список сделок</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main-container .Backtest-results {
  padding: 0 1rem;
}
.main-container .Backtest-results h3 {
  font-size: 2rem;
}
.tab-menu {
  margin-top: 0.5rem;
}
.tab-menu ul {
  display: flex;
}
.tab-menu ul li.active {
  border-bottom: 2px solid #a04afc;
}
.tab-menu ul li {
  list-style: none;
  font-size: 1.5rem;
  margin-right: 2rem;
  font-weight: bold;
  padding-bottom: 1rem;
  cursor: pointer;
}
</style>
