<template>
  <div class="buttons-container">
    <div>
      <router-link to="/drafts/filter">
        <button class="btn btn-liner">Заменить главный пресет</button>
      </router-link>
      <button class="btn btn-liner">Отдать на аппрув</button>
    </div>
    <div>
      <button class="btn btn-border">
        Запустить и обновить текущий бектест
      </button>
      <button class="btn btn-border">Запустить и сохранить как новый</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.buttons-container {
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.btn {
  width: 45rem;
  height: 5rem;
  margin-right: 2rem;
  margin-top: 2rem;
  border: 1px solid transparent;
  cursor: pointer;
  border-radius: 16px;
  background: transparent;
}
.btn-liner {
  background: linear-gradient(64.09deg, #3a64fa 15.45%, #c041fb 83.65%);
  color: white;
}
.btn-border {
  border: 1px solid #d5d3d8;
  color: #a04afc;
}
</style>
